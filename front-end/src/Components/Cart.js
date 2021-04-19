import React from 'react';
import styled from 'styled-components';
import { Card } from 'react-bootstrap';

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
    color: '#fc7703'
}

const Cart = () => {
    
    return(
        <div classname = "card" style = {card2Style}>
                    <h2>Total Harga: </h2>
                    <p>Rp 50.000</p>
                    <p style = {checkoutStyle}>Checkout</p>
                </div>
    )
}


export default Cart;