import React from "react";
import classes from "./MealItem.module.css";
import { MealItemForm } from "./MealItemForm";
import { CartContext } from "../../store/cart-context";
import { useContext } from "react";

export const MealItem = (props) => {
  const price = `$${props.meal.price.toFixed(2)}`;
  const cartCtxt = useContext(CartContext)

  const addToCart= amount=>{
    
    cartCtxt.addItem({
      id:props.meal.id,
      name:props.meal.name,
      totalAmount:amount,
      price:props.meal.price

    })
    
  }

  return (
      
    <li className={classes.meal}>
      <div>
        <h3>{props.meal.name}</h3>
        <div className={classes.description}>{props.meal.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
          <MealItemForm onAddToCart={addToCart} id={props.meal.id}/>
      </div>
    </li>
    
  );
};
