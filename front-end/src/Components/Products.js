import React, {Component} from 'react';
import esKrim from '../Assets/eskrim.jpg'
import esKepal from '../Assets/eskepal.jpg'
import basoAci from '../Assets/basoaci.jpeg'
import styled from 'styled-components';
import { Card } from 'react-bootstrap';
import Cookie from 'universal-cookie';
import LandingPage from '../Pages/LandingPage';



const CardStyle = styled.div`
    .card {
    height: "45vh",
    width: "1000px",
    background: "#C4C4C4",
    position: "relative",
    left: 300,
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
    padding: '8px'
}`;

const cardStyle =
    {
    height: "45vh",
    width: "600px",
    background: "#C4C4C4",
    position: "relative",
    left: 300,
    textAlign: "left",
    flex: 1,
    flexDirection: "row",
    padding: '8px'
};

const imageStyle = {
    textAlign: "left",
    flex:1,
    padding: '10px',
    height: '270px',
    width: '270px'
}

const textStyle = {
    fontWeight: 'bold',
    color: '#1b35cc'
}

const deleteStyle = {
    color: 'red',
    fontWeight: 'bold'
}

function initializeCookie(){
    var cookie = new Cookie();
    console.log(`nominal`, cookie.get("nominal"));
    console.log(`customerID`, cookie.get("customerID"));
}

let result = 0;
function addNominal(add,nom){
    return parseInt(add) + parseInt(nom);
}



function deleteNominal(add,nom){
    return parseInt(add) - parseInt(nom);
};

export default class Products extends Component {
    
    componentDidMount(){
        initializeCookie(1);
    }

    
    render() {
        let cookie = new Cookie();
        var nom = cookie.get("nominal");
        
        return (
            
            <CardStyle>
                <Card>
                    <Card.Header>Nama Menu: {this.props.menuName}</Card.Header>
                    <Card.Body>
                        <Card.Title>Harga: {this.props.menuPrice}</Card.Title>
                        <Card.Text>
                            Komposisi: {this.props.menuIngredients}
                        </Card.Text>
                    </Card.Body>
                    
                </Card>
                <button  onClick=
                    {(e) => 
                    {cookie.set("nominal", addNominal(nom,this.props.menuPrice))}
                    } style = {textStyle}>
                             Add to Cart
                        </button>
                        <button onClick = {(e) => {cookie.set("nominal", deleteNominal(nom, this.props.menuPrice))}} style = {deleteStyle}>
                            Delete from Cart
                            </button>
            </CardStyle>   
            
        )
    }
}



///<Card.Body>
///<button onClick={addNominal(nom,this.props.menuPrice)} style = {textStyle}>
///    Add to Cart
///    {cookie.set("nominal", addNominal(nom, this.props.menuPrice))}</button>
///<button style = {deleteStyle}>Delete from Cart</button>
///</Card.Body>

//
//}
///
//
//export default Products;