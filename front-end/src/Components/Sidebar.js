import React from 'react';
import SideItem from './SideItem';
import {NavItems} from '../Data/NavItemData'

const Sidebar = () => {

    
    return(
        <div style = {sidebarStyle}>
            <h2 style = {headerStyle}>Filter</h2>
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

const headerStyle = {
    fontWeight: "600",
    padding: "0px 20px",
    color: "#000"
}

export default Sidebar;