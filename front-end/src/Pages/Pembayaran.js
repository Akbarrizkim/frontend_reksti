import React, { useState, useEffect } from 'react';
import {Table,CardGroup,Modal,Card} from 'react-bootstrap';
import styled from 'styled-components';
import ovoImage from '../Assets/Ovo.png';
import gopayImage from '../Assets/gopay.png';
import linkajaImage from '../Assets/linkaja.png';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Cookie from 'universal-cookie';


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

const StyledListGroup = styled(ListGroup)`
    margin-top: 40px;
    margin-left: 70px;
`;

const StyledButton = styled(Button)`
    margin-top: 40px;
    left: 50%;
    position: absolute;
`;

const StyledButton1 = styled(Button)`
    float: right;
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

let idx = 1;


export const Pembayaran = () =>{
    let cookie = new Cookie();
    var nom = cookie.get("nominal");
    var ID = cookie.get("customerID");


    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/payment/list/${ID}`,);

            setState(result.data);  
            console.log(result.data);
        };
        fetchData();
    }, []);

    // const [paymentHistory, setPaymentHistory] = useState([]);

    // useEffect(() => {
    //     fetch("http://139.59.235.181:8800/payment"+id)
    //     .then(res => res.json())
    //     .then(
    //         (result) => {
    //             setPaymentHistory(result);
    //         }
    //     );        
    // });

    const [paymentType, setPaymentType] = useState(false);

    // function submitNewPayment() {
    //     let data = {
    //       order_id: order_id,
    //       amount: amount,
    //       payment_type_id: paymentType
    // };
    
    //     axios.post('http://139.59.235.181:8800/payment',data);
    // }

    function submitPaymentBaru() {
        let dataPayment = {
            order_id: 1,
            amount: nom,
            payment_type_id: paymentType
        };
  
        axios.post('http://139.59.235.181:8800/payment',dataPayment);
    }

    return (
        <div class="parent-container d-flex">
            <div class="container">         
                <div class="row">
                    <div class="col-sm-9">
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
                            <p>Rp.{nom}</p>
                        </Modal.Body>
                    </StyledModal>
                    <Styledjudul2>
                        Pilih metode pembayaran
                    </Styledjudul2>
                    <StyledListGroup>
                        <ListGroup.Item action>
                            Ovo
                            <StyledButton1 margin= "right" value={"OVO"} onClick={(e) => { setPaymentType(e.target.value)}} >
                                Pilih
                            </StyledButton1>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            Gopay
                            <StyledButton1 margin= "right" value={"GoPay"} onClick={(e) => { setPaymentType(e.target.value)}} >
                                Pilih
                            </StyledButton1>
                        </ListGroup.Item>
                        <ListGroup.Item action>
                            LinkAja
                            <StyledButton1 margin= "right" value={"LinkAja"} onClick={(e) => { setPaymentType(e.target.value)}} >
                                Pilih
                            </StyledButton1>
                        </ListGroup.Item>
                    </StyledListGroup>
                    <StyledButton variant="primary" size="lg" active>
                        Bayar!
                    </StyledButton>     
                    <h1>
                        {paymentType}
                    </h1>     
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
