import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/core/MenuIcon";
import IconButton from "@material-ui/core/IconButton";
import SideDrawer from './SideDrawer';

export default class Header extends Component {
    state={
        drawerOpen: false,
        headerShow: false
    }
    toggleDrawer = (value) =>{
        this.setState({
            drawerOpen: value
        })
    }
    render() {
        return (
            <AppBar
                position=''>
                <Toolbar>
                    <div className='header_logo'>
                        <div className='font_righteous'>
                            Loly Cup Tea
                        </div>
                    </div>
                    <IconButton
                        aria-lable="Menu"
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
