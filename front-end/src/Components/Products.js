import React from 'react';
import esKrim from '../Assets/eskrim.jpg'
import esKepal from '../Assets/eskepal.jpg'
import basoAci from '../Assets/basoaci.jpeg'
import styled from 'styled-components';


const listProducts = [
    {id: 1, name: 'Es Krim', description: 'Es krim rasa cokelat', price: 'Rp 5000', thumb: esKrim},
    {id: 2, name: 'Es Kepal Milo', description: 'Es kepal dengan milo dan topping', price: 'Rp 15000', thumb: esKepal},
    {id: 3, name: 'Baso Aci', description: 'Baso aci 100% micin', price: 'Rp 8000', thumb: basoAci}
]

const cardStyle = {
    height: "50vh",
    width: "1000px",
    background: "#C4C4C4",
    position: "relative",
    left: 300,
    textAlign: "left",
    flex: 1,
    flexDirection: "row"
}

const imageStyle = {
    textAlign: "left",
    flex:1,
}

const Products = () => {

    console.log(listProducts);
    const listItem = listProducts.map((item) => 
    <div className = "card" key = {item.id} style = {cardStyle}>
        <div className = "card_image" >
            <img src= {item.thumb}/>
        </div>
    <div className = "cardHeader" style = {imageStyle}>
        <h2>{item.name}</h2>
        <p>{item.description}</p>
        <p className = "cardPrice"> {item.price}</p>
    </div>
    </div>);
    return(
        <div className = "main_content">
            {listItem}
        </div>
    )

}

export default Products;