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
                    <List component="nav">
                        <ListItem button onClick={()=>console.log('Home1')}>Home</ListItem>
                        <ListItem button onClick={()=>console.log('Home')}>Home</ListItem>
                    </List>
                    
                </Drawer>
        );
};
export default SideDrawer;
