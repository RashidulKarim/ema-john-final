import React from 'react';
import './food.css';

const Food = (props) => {
   const {strMealThumb, strMeal, strCategory,strArea, strInstructions} = props.food
   const handleClick = props.handleClick;
   
    
    return (
        <div className='food-container'>
            <div className='food-image'>
                <img src={strMealThumb} alt="" />
            </div>
            <div className="food-details">
                <h2>{strMeal}</h2>
                <p><small>Catagory: {strCategory}</small></p>
                <p><small>Area: {strArea}</small></p>
                <p>{strInstructions}</p>
                <button onClick={()=> handleClick(strMeal)}>Add Product</button>
            </div>
        </div>
    );
};

export default Food;