import React from 'react';
import './CardComponent.css'

const CardComponent = props => {

    const {handeler, cardData} = props

    
    const {name, seller, price, ratings, img} = cardData

    return (
        
        
        <div className='card'>
            <img src={img} alt="" />
            <div className='card-info'>
                <div className='card-header-text'>
                    <p className='card-name'>{name}</p>
                    <p>Price: ${price}</p>
                </div>
                <div className='card-footer-text'>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: {ratings} Star</p>
                </div>
            </div>
            <button onClick={()=>handeler(cardData)}> Add to Cart </button>
        </div>
    );
};

export default CardComponent;