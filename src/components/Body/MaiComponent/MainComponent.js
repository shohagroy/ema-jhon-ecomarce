import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import CartComponent from '../CartComponent/CartComponent';
import './MainComponent.css'

const MainComponent = () => {

    const [products, setproducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } ,[])

    return (
        <div className='mian-container'>
            <div className='card-container'>
                {
                    products.map(product => <CardComponent 
                        cardData={product} 
                        key = {product.id}
                        />)
                }
                
            </div>
            <div className='cart-container'>
                <CartComponent/>
            </div>
            
        </div>
    );
};

export default MainComponent;