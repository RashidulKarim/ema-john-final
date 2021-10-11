import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import useCart from '../hook/useCart';
import useProduct from '../hook/useProduct';
import Products from '../Products/Products';
import './shop.css';

const Shop = () => {
    const [filterProduct, setFilterProduct] = useState([]);
    const [products] = useProduct()  
    useEffect(()=> {
        setFilterProduct(products)
    },[products])
    
    const [addedProduct, setAddedProduct, length] = useCart(products)
    const handleClick = product => {
        const exist = addedProduct.find(pd => pd.key === product.key)
        let cart = []
        if(exist){
            const rest = addedProduct.filter(pd=> pd.key !== product.key)
            exist["quantity"] = exist["quantity"] + 1;
            cart = [...rest, exist]
            setAddedProduct(cart)
        }
        else{
            product["quantity"] = 1;
            cart = [...addedProduct, product]
            setAddedProduct(cart)
        }
        const localStorageJson = localStorage.getItem('product');
        const productKey = product.key
        let products = {}
        const localStorageStoredProducts = JSON.parse(localStorageJson);
        if(!localStorageJson){
            products[productKey] = 1
        }else{
            products = {...localStorageStoredProducts}
            if(products[productKey]){
                products[productKey] = products[productKey] + 1; 
            }
            else{
                products[productKey] = 1; 
            }
        }
        localStorage.setItem('product' , JSON.stringify(products))        
    }

    const search = (e) =>{
        const searchValue = e.target.value;
        const filterItem = products.filter(product => product.name.toLowerCase().includes(searchValue.toLowerCase()))
        setFilterProduct(filterItem);       
    }
    return (
        <div>
            <div className="search-section">
                <input onChange={search} placeholder='Type here to search' className='search-field' type="text" /> 
                <h3 className="icon-container">
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} /> <span>{length>0?length: 0}</span>
                </h3>
            </div>
            <div className='shop-container'>
            <div className="products-container">
                <Products products={filterProduct} handleClick={handleClick}></Products>
            </div>
            <div className="cart-container">
            <Cart length={length} addedProduct={addedProduct}>
            <Link to='/review'><button className='btn-regular'>Review Order</button></Link>
            </Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;