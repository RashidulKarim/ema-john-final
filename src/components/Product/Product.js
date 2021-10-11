import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Rating from 'react-rating';
import './product.css';

const Product = (props) => {

    const {img, name, price, seller, star, stock} = props.product;
    return (
        <div className='product'>
            <div className="product-img">
                <img src={img} alt="" />
            </div>
            <div className="product-description">
                <h3 className='product-name'>{name}</h3>
                <h5>By: {seller}</h5>
                <div className="feature">
                    <div className='feature-price'>
                        <h3>${price}</h3>
                        <p><small>Only {stock} left in stock - order soon.</small></p>
                        <div className="btn-container">
                        <button className='btn-regular' onClick={()=>props.handleClick(props.product)}><FontAwesomeIcon icon={faShoppingCart} /> Add to cart</button>
                        </div>
                    </div>
                    <div className='feature-details'>
                    <Rating
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star" 
                    initialRating={star} 
                    readonly
                    />
                        <h3>Features</h3>
                        <ul>
                            {
                                props.product.features.map((feature,index) => <li key={index}><span className='feature-description'>{feature.description}</span>: <span className='feature-value'>{feature.value}</span></li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;