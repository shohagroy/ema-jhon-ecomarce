import React from 'react';
import './CartComponent.css'

const CartComponent = () => {
    return (
        <div className='cart-section'>
            <h5>Order Summary</h5>

            <div className='cart-info'>
                <p>Selected Items: 6</p>
                <p>Total Price: $1140</p>
                <p>Total Shipping Charge: $5</p>
                <p>Tax: $114</p>
                <h6>Grand Total: $1559</h6>
            </div>

            <div className='cart-button'>
                <button className='clear-btn'>Clear Cart</button>
                <button className='review-btn'>Review Cart</button>
            </div>
            
        </div>
    );
};

export default CartComponent;