import React from 'react';
import './reviewProduct.css';

const ReviewProduct = (props) => {
    const {name, price, seller, quantity, key} = props.addedProduct
    const {handleRemoveItem} = props
    return (
        <div className='product'>
        <div className='product-description'>
            <h2>{name}</h2>
            <div className="feature">
                    <div className='feature-price'>
                        <h3>${price}</h3>
                        <p>Sold by: {seller}</p>
                        <p>Quantity: {quantity}</p>
                        <div className="btn-container">
                        <button onClick={()=> handleRemoveItem(key)} className='btn-regular'>remove</button>
                        </div>
                    </div>
                    <div className='feature-details'>
                    <h4>Shipping Option:</h4>
                    <div className='shippingOption'>
                          <input  type="radio" id="freeShipping" name="shippingOption" value="8-10 business days"/>
                          <label>8-10 business days</label><br/><small>$0 - Free Shipping</small>
                          <input type="radio" id="regularShipping" name="shippingOption" value="5-7 business days"/>
                          <label >5-7 business days</label><br/>
                        <small>$3.99 - Regular Shipping</small> 
                          <input type="radio" id="starndardShipping" name="shippingOption" value="2-4 business days"/>
                          <label >2-4 business days</label>
                        <small>$7.99 - Standard Shipping</small> 
                    </div>
                    </div>
                </div>
        </div>
        
        </div>
    );
};

export default ReviewProduct;