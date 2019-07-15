import React from 'react';
import classes from './Order.css';

const order = (props) => {
    let ingredients = [];
    console.log(props.ingredients);
    for (let ingredientName in props.ingredients) {
        ingredients.push({
            name: ingredientName,
            amount: props.ingredients[ingredientName]
        });
    }

    console.log('Ststojci: ', ingredients);

    let ingredeintOutput = ingredients.map( ig => {
        return <span 
                key={ig.name}
                style={{
                    textTransform: 'capitalize',
                    display: 'inline-block',
                    margin: '0 8px',
                    border: '1px solid #ccc',
                    padding: '7px'
                }}
            >
                {ig.name} ({ig.amount})
            </span>;
    });

    return (
        <div className={classes.Order}>
            <p>Ingredients: {ingredeintOutput}</p>
            <p>Price: <strong>USD {props.price.toFixed(2)}</strong></p>
        </div>
    )
}

export default order;