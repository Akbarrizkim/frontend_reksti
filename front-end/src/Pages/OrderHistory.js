import React from 'react';
import HistoryCard from '../Components/HistoryCard';
import styled from 'styled-components';

const Styles = styled.div`
    .wrapper {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
`;

export const OrderHistory = () => (
    <Styles>
        <div className="container">
            <div className="wrapper">
                <h1>Order History Pelanggan</h1>
            </div>
            
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
        </div>
    </Styles>
)