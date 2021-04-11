import { getByTitle } from '@testing-library/dom';
import React from 'react';

const SideItem = ({items}) => {
    const {name, links, open} = items;
    const [isOpen,setOpen] = React.useState(open);

    const openSideNav = () => {
        setOpen(!isOpen)
    }

    return(
        <div onClick = {() => openSideNav()}>
            <p style = {headerStyle}>{name}</p>
            {isOpen && links.map((link,index) => {
                const {title, to} = link;
                return (
                    <div>
                        <a href = {to}>
                            <p style = {contentStyle}>{title}</p>
                        </a>
                    </div>
                );
            })}
        </div>
    );
}


const headerStyle = {
    fontWeight: "600",
    padding: "0px 20px",
    color: "#000"
}

const contentStyle = {
    fontWeight: "600",
    padding: "0px 20px",
    color: "#564438"
}

export default SideItem;