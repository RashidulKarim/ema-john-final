import React from 'react';
import './cart.css';
const Cart = (props) => {
    const products = props.addedProduct;
    const length = props.length;
    const productPrice = products.reduce((previous, product) => previous + (product.price * product.quantity),0)
    const shipping = products.reduce((previous, product) => previous + (product.shipping * product.quantity),0)
    
    const totalBeforeTax = (productPrice + shipping).toFixed(2)
    const tax = parseFloat(totalBeforeTax) * .10
    const total = (parseFloat(totalBeforeTax) + tax).toFixed(2)

    return (
        <div className='cart'>
            <div className="cart-head">
                <h3>Order Summary</h3>
                <h4>Items Ordered: {length>0?length: 0} </h4>
            </div>
            <div className='cart-details'>
                <p><small><span>Product Price:</span>${productPrice? productPrice.toFixed(2): 0}</small></p>
                <p><small><span>Shipping & Handing:</span>${shipping? shipping.toFixed(2): 0}</small></p>
                <p><small><span>Total before tax:</span>${totalBeforeTax? totalBeforeTax: 0}</small></p>
                <p><small><span>Estimated tax:</span>${tax? tax.toFixed(2): 0}</small></p>
                <h3 className='total'><span>Order Total:</span>${total? total: 0}</h3>
                <div className="center">
                {props.children}
                </div>
            </div>
        </div>
    );
};

export default Cart;