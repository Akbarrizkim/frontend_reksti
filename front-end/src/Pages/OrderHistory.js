import React, { useState, useEffect } from 'react';
import HistoryCard from '../Components/HistoryCard';
import styled from 'styled-components';
import axios from 'axios';

const Styles = styled.div`
    .wrapper {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
`;

export const OrderHistory = () => {
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('http://139.59.235.181:8800/order',);

            setState(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

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

            {/* <div>
                <ul>
                    {state.data?.map(item => (
                        <li key={item.order_id}>
                            <p>{item.order_date}</p>
                        </li>
                    ))}
                </ul>
            </div> */}
        </Styles>
    );
}