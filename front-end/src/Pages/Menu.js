import React, {useEffect, useState} from 'react'
import Sidebar from '../Components/Sidebar';
import Products from '../Components/Products';
import Cart from '../Components/Cart';
import styled from 'styled-components';
import axios from 'axios';


const Styles = styled.div`
    .wrapper {
        margin-top: 10px;
        display: flex;
        justify-content: center;
    }
`;

export const Menu = () => {

    const [state, setState] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(`http://139.59.235.181:8800/menu`,);

            setState(result.data);
            console.log(result.data);
        };
        fetchData();
    }, []);

    return (
        
        <Styles>
            <div><Sidebar/></div>
            <div><Cart/></div>
            <div className="container">
                
                {state.data?.map(item => (
                    <Products key={item.menu_type_id} menuName={item.menu_name} menuPrice={item.price} menuIngredients={item.ingredients} />
                ))}
            </div>
            

        </Styles>
    );
}


