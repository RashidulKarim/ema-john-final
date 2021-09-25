import Product from '../Product/Product';
import './products.css';

const Products = (props) => {

    return (
        <div>
            {
                props.products.map(product => <Product key={product.key} handleClick={props.handleClick} product={product}></Product>)
            }
        </div>
    );
};

export default Products;