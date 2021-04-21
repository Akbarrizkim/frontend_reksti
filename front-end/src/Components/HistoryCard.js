import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .card {
        margin-top: 10px;
    }
`;

export default class HistoryCard extends Component {    
    render() {
        return (
            <Styles>
                <Card>
                    <Card.Header>No. Pesanan: {this.props.idOrder}</Card.Header>
                    <Card.Body>
                        <Card.Title>Total Tagihan: {this.props.priceOrder}</Card.Title>
                        <Card.Text>
                            Tanggal Pemesanan: {this.props.dateOrder.substring(0,10)}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Styles>   
        )
    }
}
