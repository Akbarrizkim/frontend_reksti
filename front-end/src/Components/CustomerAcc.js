import React from 'react';

import styled from 'styled-components';


const custInfo = [
    {name: 'Aliyyah Kohl', email: 'aliyyah@cans.co.uk', phone_number: '0888877888', username: 'sultan', password: 'selamatmencoba'}
]

const cardStyle = {
    height: "30vh",
    width: "400px",
    background: "#C4C4C4",
    position: "absolute",
    left: 300,
    textAlign: "left",
    flex: 1
}


const CustomerAcc = () => {

    console.log(custInfo);
    const listItem = custInfo.map((item) => 
    <div className = "card" key = {item.username} style = {cardStyle}>
    <div className = "cardHeader">
        <h1>Username: {item.username}</h1>
        <p>Nama: {item.name}</p>
        <p>Email: {item.email}</p>
        <p>No HP: {item.phone_number}</p>
    </div>
    </div>);
    return(
        <div className = "main_content">
            {listItem}
        </div>
    )

}

export default CustomerAcc;