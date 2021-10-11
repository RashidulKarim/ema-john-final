import { useEffect, useState } from "react";

const useCart = products => {
    const [addedProduct, setAddedProduct] = useState([]);
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

    const length = addedProduct.reduce((previous, product)=>(previous + product.quantity),0)
    
    return[addedProduct, setAddedProduct, length]

}

export default useCart;