import React, { Component } from 'react'
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
// import MenuIcon from "@material-ui/core/MenuIcon";
import IconButton from "@material-ui/core/IconButton";

export default class Header extends Component {
    render() {
        return (
            <AppBar>
                <Toolbar>
                    <div className='header_logo'>
                        <div className='font_righteous'>
                            Loly Cup Tea
                        </div>
                    </div>
                    <IconButton
                        aria-lable="Menu"
                        color="inherit"
                        onClick={()=>console.log}>

                    </IconButton>
                </Toolbar>
            </AppBar>
        )
    }
}
