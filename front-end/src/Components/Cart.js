import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'universal-cookie';
import LandingPage from '../Pages/LandingPage'


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

///function setNominalCookie(){
///    console.log(`customerID`, cookie.get("CustomerID"));
///    console.log(`nominal`, cookie.get("nominal"));
///}
///var setNominal = "50.000"

function initializeCookie(){
    var cookie = new Cookie();
    console.log(`nominal`, cookie.get("nominal"));
    console.log(`customerID`, cookie.get("customerID"));
}

export const Cart = () => {
    const [cartState, setCart] = useState([]);

    
    useEffect(() => {
        fetch("http://139.59.235.181:8800/order")
        .then(res=> res.json())
        .then(
            (result) => {
                setCart(result);
            }
        );
        });

    function createOrder() {
        var cookie = new Cookie();
        let data = {
            customer_id : cookie.get("customerID"),
            total_price : cookie.get("nominal"),
            order_status : "0",
            location : "Indonesia"

        };
        axios.post('http://139.59.235.181:8800/order',data)
    }
    var cookie = new Cookie();
    return (
        
        <div classname = "card" style = {card2Style}>
                    <h2>Total Harga: </h2>
                    <p>{cookie.get("nominal")}</p>
                    <Link to = {{pathname: "/Pembayaran", state: cookie.get("nominal")}} style = {checkoutStyle}className = "btn btn-primary" >
                        {createOrder()}
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