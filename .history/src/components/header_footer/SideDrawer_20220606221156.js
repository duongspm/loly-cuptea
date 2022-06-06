import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
export default class SideDrawer extends Component {
    render() {
        return (
            <Drawer
                anchor="right"
                open={this.props.first}>

                </Drawer>
        )
    }
}
