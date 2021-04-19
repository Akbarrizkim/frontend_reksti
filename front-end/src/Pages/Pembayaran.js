import React, { useState, useEffect } from 'react';
import {Table,CardGroup,Modal,Card} from 'react-bootstrap';
import styled from 'styled-components';
import ovoImage from '../Assets/Ovo.png';
import gopayImage from '../Assets/gopay.png';
import linkajaImage from '../Assets/linkaja.png';
import axios from 'axios';

const StyledTable = styled(Table)`
    margin-top: 30px;
    margin-left: 25px;
    width: 80%;
`;

const Styledjudul = styled.h1`
    margin-top: 100px;
    margin-left: 35px;
    font-weight: bold;
    font-size: 30px;
`;

const StyledModal = styled(Modal.Dialog)`
    margin-top: 200px;
    margin-left: 60px;
`;

const Styledjudul2 = styled.h2`
    margin-top: 10px;
    font-weight: bold;
    font-size: 30px;
    margin-left: 90px;
`;

const Styledgroupcard = styled(CardGroup)`
    margin-top: 40px;
    margin-left: 70px;
`;

const Styledpembayaran3 = styled(Card.Title)`
    text-align: center;
`;

const Styledpembayaran2 = styled(Card.Title)`
    margin-top:37px;
    text-align: center;
`;

const Styledpembayaran1 = styled(Card.Title)`
    margin-top:20px;
    text-align: center;
`;

const Petunjuk = styled.h3`
    margin-top:20px;
    margin-left: 20px;
`;

const Isi = styled.p`
    margin-left: 20px;
`;

let idCustomer = 1;

export const Pembayaran = () =>{
    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/payment`,);

            setState(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    return (
        <div class="parent-container d-flex">
            <div class="container">
                <div class="row">
                    <div class="col">
                            <Styledjudul>
                                Riwayat Pembayaran Berhasil
                            </Styledjudul>
                            <StyledTable striped bordered hover>
                            <thead>
                                <tr>        
                                    <th >Order id</th>
                                    <th >amount</th>
                                    <th >date</th>
                                </tr>
                            </thead >
                            <tbody >
                            {state.data?.map(item => (
                                <tr>
                                    <td>{item.order_id}</td>
                                    <td>{item.amount}</td>
                                    <td>{item.payment_date.substring(0,10)}</td>
                                </tr>
                            ))}
                            </tbody>
                        </StyledTable>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-9">
                    <StyledModal >
                        <Modal.Header style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                }}>
                            <Modal.Title>Nominal tagihan</Modal.Title>
                        </Modal.Header>
                        <Modal.Body style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                }}>
                            <p>Rp.50.000</p>
                        </Modal.Body>
                    </StyledModal>
                    <Styledjudul2>
                        Pilih metode pembayaran
                    </Styledjudul2>
                    <Styledgroupcard>
                        <Card>
                            <Card.Img variant="bottom" src={ovoImage} />
                            <Card.Body>
                                <Styledpembayaran1>Ovo</Styledpembayaran1>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="bottom" src={gopayImage} />
                            <Card.Body>
                                <Styledpembayaran2>Gopay</Styledpembayaran2>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="bottom" src={linkajaImage} />
                            <Card.Body>
                                <Styledpembayaran3>LinkAja</Styledpembayaran3>
                            </Card.Body>
                        </Card>
                    </Styledgroupcard>
                    <Petunjuk>
                        Petunjuk Pembayaran:
                    </Petunjuk>
                    <Isi>
                        1. saya saya
                    </Isi>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col">
                    </div>
                </div>
            </div>
        </div>
    );
}
