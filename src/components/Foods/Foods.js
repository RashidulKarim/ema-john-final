import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import './foods.css';

const Foods = () => {
    const [addedProduct, setAddedProduct] = useState([])
    const [foods, setFoods] = useState([])
    useEffect(()=> {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
        .then(res => res.json())
        .then(foods => setFoods(foods.meals))
    },[])
    const handleClick = name => {
        const allAddedFood = [...addedProduct, name];
        setAddedProduct(allAddedFood)
    }
    console.log(addedProduct);
    
    return (
        <div className='foods-container'>
            <div>
            {
                foods.map(food => <Food handleClick={handleClick} key={food.strMeal} food={food}></Food>)
            }
            </div>
            <div>
                {
                    addedProduct.map(product => <p>{product}</p>)
                }
            </div>
        </div>
    );
};

export default Foods;