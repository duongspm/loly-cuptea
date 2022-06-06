import React, {useState, useEffect } from 'react'
import axios from 'axios';

import Table from 'react-bootstrap/Table'
import '../Coins/Coin.css'
import Modal from 'react-bootstrap/Modal'

function Coins() {

        const [coins, setCoins] = useState([])
        const [search, setSearch] = useState('')
        useEffect(()=>{
            axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
            .then(res=>{
                setCoins(res.data)
                //console.log(res.data)
            })
            .catch(error =>alert('Lỗi Đường link hay sao ớ',error))
        },[]);
        const handleChange = (event) =>{
            setSearch(event.target.value)
        }
        const filteredCoins = coins.filter(coin=>
            coin.name.toLowerCase().includes(search.toLowerCase()));
        const click = ()=>{
            alert("haha")
        }
        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
            <div>
                <br/>
                <div className="col-md-6">
                    <div  className="input-group ">
                        <button className="btn btn-success"><i className="fas fa-search"/></button>
                        
                        <input className="form-control" type="text" placeholder="Search ..." onChange={handleChange}></input>
                        
                    </div>
                </div>
                <br/>
                <button onClick={handleShow} className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Show Modal</span></button>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th className="text-center">Tiền ảo ma canada</th>
                        <th></th>
                        <th className="text-center">Giá</th>
                        <th className="text-center">24 giờ</th>
                        <th className="text-center">Khối lượng giao dịch trong 24h</th>
                        <th className="text-center">Giá trị vốn hóa thị trường</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCoins.map((coin,index) =>{
                            return (
                                <tr>
                                    <td><i class="far fa-star"></i>&nbsp;&nbsp;&nbsp;&nbsp;{index+1}</td>
                                    <td><img src={coin.image}/>&nbsp;&nbsp;&nbsp;&nbsp;{coin.name}</td>
                                    <td className="symbol">{coin.symbol}</td>
                                    <td className='text-center'>{coin.current_price.toLocaleString()} US$</td>
                            
                                    {coin.price_change_percentage_24h < 0 ? (
                                    <td className='coin-percent red'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                                    ) : (
                                    <td className='coin-percent green'>{coin.price_change_percentage_24h.toFixed(2)}%</td>
                                    )}

                                    <td className="text-center">{coin.total_volume.toLocaleString()} US$</td>
                                    <td className="text-center">{coin.market_cap.toLocaleString()} US$</td>
                                </tr>
                                
                            )
                        })}
                    </tbody>
                </Table>



              

            </div>
        )
    
}
export default Coins;