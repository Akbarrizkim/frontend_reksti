import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';



const card2Style = 
    {
    height: "150px",
    width: "200px",
    background: "#C4C4C4",
    position: "absolute",
    left: 1700,
    textAlign: "left",    
    padding: '8px'
}

const checkoutStyle = {
    fontWeight: 'bold',
    color: 'white'
}


export const Cart = () => {
    const [cartState, setCart] = useState([]);

    
    const dummyPrice = "50.000";
    useEffect(() => {
        const fetchMenu = async () => {
            const res = await axios.post(`http://139.59.235.181:8800/order`,);
            this.setMenu({custID : res.data.customer_id, orderPrice : res.data.total_price})
        };
        fetchMenu();
    }, []);

    return (
        <div classname = "card" style = {card2Style}>
                    <h2>Total Harga: </h2>
                    <p>{dummyPrice}</p>
                    <Link to = {{pathname: "/Pembayaran", state: dummyPrice}} style = {checkoutStyle}className = "btn btn-primary" >
                        Checkout
                    </Link>
                </div>
    );

}


///const Cart = () => {
///    
///    return(
///        <div classname = "card" style = {card2Style}>
///                    <h2>Total Harga: </h2>
///                    <p>Rp 50.000</p>
///                    <Link to = "/Pembayaran" style = {checkoutStyle}className = "btn btn-primary">Checkout</Link>
///                </div>
///    )
///}
///

export default Cart;