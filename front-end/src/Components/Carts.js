import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import {Link } from 'react-router-dom';
import axios from 'axios';
import Cookie from 'universal-cookie';
import LandingPage from '../Pages/LandingPage';
import Products from './Products'

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

function initializeCookie(inputOrderID){
    var cookie = new Cookie();
    console.log(`nominal`, cookie.get("nominal"));
    console.log(`customerID`, cookie.get("customerID"));
    cookie.set("orderid", inputOrderID, { path: '/'});
    
}

export const Cart = () => {
    
    const [cartState, setCart] = useState([]);
    const [state, setState] = useState([]);

    
    useEffect(() => {
<<<<<<< Updated upstream
        fetch("http://139.59.235.181:8800/order")
        .then(res=> res.json())
        .then(
            (res) => {
                setCart(res);
            }
        );
    }, []);
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/menu`,);

=======
        const fetchOrder = async () => {
            const res = await axios(`http://139.59.235.181:8800/order`,);
            setCart(res.data);
            console.log(res.data);
        };
        fetchOrder();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/menu`,);
>>>>>>> Stashed changes
            setState(result.data);  
            console.log(result.data);
        };
        fetchData();
    }, []);

    function createOrder() {
        var cookie = new Cookie();
        let data = {
            customer_id : cookie.get("customerID"),
            total_price : cookie.get("nominal"),
            order_status : "0",
            location : "Indonesia"
        };
    }

    useEffect(() => {
        createOrder();
        axios.post('http://139.59.235.181:8800/order',data)
    }, []);
    
    let cookie = new Cookie();
    console.log(`nominal`, cookie.get("nominal"))
    
    function refreshPage() {
        window.location.reload(false);
      }

    let stateValue = '';
    const value = '';
    
    return (
        
        

        <div classname = "card" style = {card2Style}>
                    <h2>Keranjang: </h2>
                    <p>{cookie.get("nominal")}</p>
                    <button onClick={refreshPage}>Tambah Belanjaan Lagi?</button>
                    
                    <Link to = {{pathname: "/Pembayaran", state: cookie.get("nominal")}} style = {checkoutStyle}className = "btn btn-primary" 
                    onClick = {() => {
                        createOrder();
                        {initializeCookie(setCart);}
                            }} >
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
///<Card>
///                        {state.data?.map(item =>(
///                            <Card.Text>
///                                <input type = "int"/>
///                                {item.menu_name} 
///                            </Card.Text>
///                        ))}
///                    </Card>
///

export default Cart;