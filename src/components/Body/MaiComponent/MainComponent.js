import React, { useEffect, useState } from 'react';
import CardComponent from '../CardComponent/CardComponent';
import './MainComponent.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowRightLong, faDeleteLeft, faRemove, faTrash } from '@fortawesome/free-solid-svg-icons';
 

const MainComponent = () => {

    const [products, setproducts] = useState([]);

    const [card, setCard] = useState([]);

    const [price, setPrice] = useState(0)

    const [shipping, setShipping] = useState(0)

    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setproducts(data))
    } ,[])

    const addToCart = (data) =>{
        const newData = [...card, data];
        setCard(newData)

        const newPrice = price + data.price;
        setPrice(newPrice)

        const newShipping = shipping + data.shipping;
        setShipping(newShipping)
    }

    let tax = price / 100 * 5;
    let grandTotal = price + shipping + tax;


    return (
        <div className='mian-container'>
            <div className='card-container'>
                {
                    products.map(product => <CardComponent 
                        cardData={product} 
                        key = {product.id}
                        handeler = {addToCart}
                    />)
                }
            </div>

            <div className='cart-container'>
                <div className='cart-section'>
                    <h5>Order Summary</h5>

                    <div className='cart-info'>
                        <p>Selected Items: {card.length}</p>
                        <p>Total Price: ${price}</p>
                        <p>Total Shipping Charge: ${shipping}</p>
                        <p>Tax: ${tax.toFixed(2)}</p>
                        <h6>Grand Total: ${grandTotal}</h6>
                    </div>

                    <div className='cart-button'>
                        <button className='clear-btn'>Clear Cart <FontAwesomeIcon icon={faTrash}/></button>
                        <button className='review-btn'>Review Cart
                        <FontAwesomeIcon icon={faArrowRight}/></button>
                    </div>
                
                </div>
            </div>
            
        </div>
    );
};

export default MainComponent;