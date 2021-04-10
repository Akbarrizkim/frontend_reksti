import React from 'react';
import SideItem from './SideItem';
import {NavItems} from '../Data/NavItemData'

const Sidebar = () => {

    
    return(
        <div style = {sidebarStyle}>
            <h1>side</h1>
            {NavItems.map((navItem, index) => {
                return(
                    <SideItem key = {index} items = {navItem}/>
                )
            })}
        </div>
    )
}


const sidebarStyle = {
    height: "100vh",
    width: "270px",
    background: "#C4C4C4",
    position: "absolute",
    left: 0,
    textAlign: "left"
}

export default Sidebar;