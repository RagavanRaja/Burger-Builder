import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';


const burger=(props)=>{
    let transformedIngredients=Object.keys(props.ingredients)
        .map(igKey=>{
            return [...Array(props.ingredients[igKey])].map((_,i)=>{
               return <BurgerIngredients key={igKey +i} type={igKey}/>
            });
        })
        .reduce((arr,el)=>{
            return arr.concat(el)
        },[]);
        console.log(transformedIngredients);

        if(transformedIngredients.length===0){
            transformedIngredients="Please start to adding ingredients";
        }
    return(
        <div className={classes.Burger}>
            <BurgerIngredients type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredients type='bread-bottom'/>
        </div>);
}
export default burger;