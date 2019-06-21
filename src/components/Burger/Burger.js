import React from 'react';
import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let transformedIngredients = Object.keys(props.ingredients)
    .map( igKey => {
        console.log(props.ingredients[igKey]);
        return [...Array(props.ingredients[igKey])].map( (_, i) => {
            console.log(igKey, _, i);
            return <BurgerIngredient key={igKey + i} type={igKey} />;
            
            // let myApproach = [];
            // for (let i=0; i<props.ingredients[igKey]; i++) {
            //     myApproach.push(<BurgerIngredient key={igKey + i} type={igKey} />);
            // }
            // return myApproach;
        });
    })
    .reduce( (arr, el) => {
        return arr.concat(el);
    }, []);
    
    if (transformedIngredients.length == 0 || transformedIngredients == 0) {
        transformedIngredients = <p>Please, start adding ingredients</p>
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;