import { React, useContext } from "react";
import { Modal } from "../UI/Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../store/cart-context";
import CartItem from "./CartItem";

export const Cart = (props) => {
  const cartCtxt = useContext(CartContext);

  const totalAmount = `$${cartCtxt.totalAmount.toFixed(2)}`;

  const hasItems = cartCtxt.items.length > 0;

  const cartItemAddHandler = (item) => {
    cartCtxt.addItem({...item, amount:1})
    
  };
  const cartItemRemoveHnadler = (id) => {

    cartCtxt.removeItem(id)
  };

  const cartItems = (
    <ul className={classes["cart-items"]}>
      {cartCtxt.items.map((item) => (                                    //Main point for cartProvider Action 
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHnadler.bind(null,item.id)}
          onAdd={cartItemAddHandler.bind(null,item)}
        ></CartItem>
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={classes.actions}>
        {hasItems && <button className={classes.button}>Order</button>}
        <button className={classes["button--alt"]} onClick={props.onClose}>
          Close
        </button>
      </div>
    </Modal>
  );
};
