import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Products from '../Products/Products';
import './shop.css';

const Shop = () => {
    const [filterProduct, setFilterProduct] = useState([]);
    const [products, setProducts] = useState([]);
    useEffect(()=> {
        fetch('./fakeData/products.JSON')
        .then(res => res.json())
        .then(products => {
            setFilterProduct(products)
            setProducts(products)
        })
    },[])
    
    const [addedProduct, setAddedProduct] = useState([]);
    const handleClick = product => {
        setAddedProduct([...addedProduct, product])
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

    useEffect(()=>{
        const localStorageStoredProducts = JSON.parse(localStorage.getItem('product'))
        if(products.length){
            const productsList = [];
        for(let lsProduct in localStorageStoredProducts){
            const quantity = localStorageStoredProducts[lsProduct]
            const filterProduct = products.find(product => product.key === lsProduct );
            filterProduct["quantity"] = quantity; 
            productsList.push(filterProduct)  
        }
        setAddedProduct(productsList)
        }
    },[products])


    let productWithQuantity = [];
    for(let product of addedProduct){
        if(product.quantity){
            productWithQuantity.push(product)
        }else{
            product["quantity"] = 1
            productWithQuantity.push(product)
        }
    }
    
    const length = productWithQuantity.reduce((previous, product)=>(previous + product.quantity),0)

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
                <FontAwesomeIcon className='cart-icon' icon={faShoppingCart} /> <span>{length>0?length:0}</span>
                </h3>
            </div>
            <div className='shop-container'>
            <div className="products-container">
                <Products products={filterProduct} handleClick={handleClick}></Products>
            </div>
            <div className="cart-container">
            <Cart addedProduct={productWithQuantity} length={length}></Cart>
            </div>
        </div>
        </div>
    );
};

export default Shop;