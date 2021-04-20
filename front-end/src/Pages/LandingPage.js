import React from 'react';
import {Button,Image,Form,Row,Col} from 'react-bootstrap';
import styled from 'styled-components';
import welcomeImage from '../Assets/welcome.jpg';
import Cookie from 'universal-cookie';

const StyledButton = styled(Button)`
    margin-left: 770px;
    margin-top: 20px;    
    font-size:25px;
    background-color: #FF5733;
`;
const StyledImage = styled(Image)`
    width: 900px;
    display:block;
    margin-left:auto;
    margin-right:auto;
    margin-top:100px;
`;

const StyledForm = styled(Form)`
    margin-top:70px;
    margin-left:580px;
    margin-rigt:20px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 15px;
`;

const StyledFormLabel = styled(Form.Label)`
    margin-top:-50px;
    font-size: 25px;
    font-weight: bold;
`;

const StyledFormkolom = styled(Form.Control)`
    width:60%;
`;

function initializeCookie(inputCustID) {
    let cookie = new Cookie();
    cookie.set("customerID", inputCustID, { path: '/' });
    console.log(`customerID`, cookie.get("customerID"));
    cookie.set("nominal", 0, { path: '/' });
    console.log(`nominal`, cookie.get("nominal"));
    console.log(`customerID`, cookie.get("customerID"));
}

export const LandingPage = () => (
    <div>
        <StyledImage src={welcomeImage}/>
        <StyledForm>
            <StyledFormLabel >
                Masukkan Customer Id
            </StyledFormLabel>
            <StyledFormkolom type="text"/>
            <StyledButton onClick={() => initializeCookie(1)}>
                Submit
            </StyledButton>
        </StyledForm>
    </div>
)