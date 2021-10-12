import { useHistory } from 'react-router';
import Cart from '../Cart/Cart';
import useCart from '../hook/useCart';
import useProduct from '../hook/useProduct';
import ReviewProduct from '../ReviewProduct/ReviewProduct';

const Review = () => {    
    const [products] = useProduct();
    const [addedProduct, setAddedProduct, length] = useCart(products)
    const history = useHistory();
    const handleOrderSubmit = () => {
        if(addedProduct.length){
            localStorage.removeItem('product')
        setAddedProduct([])
        history.push('/orderplace')
        }
        else{
            alert("please add some product to order.")
        }
    }
    const handleRemoveItem = key => {
        const newReviewItems = addedProduct.filter(product => product.key !== key)   
        setAddedProduct(newReviewItems)
        const localStorageStoredProducts = JSON.parse(localStorage.getItem('product'))
        if(localStorageStoredProducts[key]){
            delete localStorageStoredProducts[key]
            localStorage.setItem('product', JSON.stringify(localStorageStoredProducts))
        }
    }
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    addedProduct.map(product => <ReviewProduct addedProduct={product} key={product.key} handleRemoveItem= {handleRemoveItem}></ReviewProduct>)
                }
            </div>
            <div className="cart-container">
            <Cart handleOrderSubmit={handleOrderSubmit} addedProduct={addedProduct} length={length}><button className='btn-regular' onClick={handleOrderSubmit}>Place Order</button></Cart>
            </div>
        </div>
    );
};

export default Review;