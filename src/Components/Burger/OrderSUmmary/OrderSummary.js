import React from 'react';
import Aux from '../../../hoc/Auxi';
import Button from '../../UI/Button/Button';


const orderSummary=(props)=>{

    const ingredientSummary=Object.keys(props.ingredients)
          .map(igKey=>{
              return(
              <li key={igKey}>
                  <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey]}
              </li>);
          });

    return(
        <Aux>
            <h3>Your Order</h3>
            <p>Delicious Burger With Following Ingredients</p>
            <ul>{ingredientSummary}</ul>
            <p>Continue to Checkout??</p>
            <Button btnType="Danger">Cancel</Button>
            <Button btnType="Success">Continue</Button>
        </Aux>
    );
}
export default orderSummary;