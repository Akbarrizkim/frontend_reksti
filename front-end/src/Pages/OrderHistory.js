import React, { useState, useEffect } from 'react';
import HistoryCard from '../Components/HistoryCard';
import styled from 'styled-components';
import axios from 'axios';
import Cookie from 'universal-cookie';

const Styles = styled.div`
    .wrapper {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
`;

console.log("orderhistory")

export const OrderHistory = () => {
    const [state, setState] = useState([]);
    let idCustomer = getCookies();
    
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/order/customer/${idCustomer}/history`,);

            setState(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    function getCookies() {
        let cookie = new Cookie();
        console.log('happy', cookie.get('customerID'))
        return cookie.get('customerID');
    }
    
    return (
        <Styles>
            <div className="container">
                <div className="wrapper">
                    <h1>Riwayat Pesanan Pelanggan</h1>
                </div>
                
                {state.data?.map(item => (
                    <HistoryCard key={item.order_id} idOrder={item.order_id} dateOrder={item.order_date} priceOrder={item.total_price} />
                ))}
            </div>
        </Styles>
    );
}