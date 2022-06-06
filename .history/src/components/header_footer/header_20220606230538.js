import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/core/MenuIcon";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from './SideDrawer';
import '../../resources/styles.css';

export default class Header extends Component {
    state={
        drawerOpen: false,
        headerShow: false
    }
    componentDidMount(){
        window.addEventListener('scroll',this.handleScroll);
    }

    handleScroll = () =>{
        if(window.scrolly > 0){
            this.setState({
                headerShow: true
            })
        }else{
            this.setState({
                headerShow: false
            })
        }
        //console.log('user scrolling')
    }

    toggleDrawer = (value) =>{
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <AppBar id="header" className='fixed-top d-flex align-items-center header-transparent'>
                <Toolbar className="">
                    <div >
                        <div >
                            Loly Cup Tea
                        </div>
                    </div>
                    <IconButton
                        aria-label='Menu'
                        color="inherit"
                        onClick={()=>this.toggleDrawer(true)}>
                            {/* <MenuIcon></MenuIcon> */}
                    </IconButton>
                    <SideDrawer
                        open={this.state.drawerOpen}
                        onClose={(value)=>this.toggleDrawer(value)}></SideDrawer>
                </Toolbar>
            </AppBar>
        )
    }
}
