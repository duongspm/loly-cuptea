import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const Side
    render() {
        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={()=>props.onClose(false)}>
                    <ListItem button onClick={()=>console.log('Home')}>Home</ListItem>
                </Drawer>
        )
    }
}
