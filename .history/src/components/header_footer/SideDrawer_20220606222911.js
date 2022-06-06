import React, { Component } from 'react';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
const SideDrawer = (props)=>{
        return (
            <Drawer
                anchor="right"
                open={props.open}
                onClose={()=>props.onClose(false)}>
                    <List cop>

                    </List>
                    <ListItem button onClick={()=>console.log('Home')}>Home</ListItem>
                </Drawer>
        );
};
export default SideDrawer;
