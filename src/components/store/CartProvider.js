import React from "react";
import { CartContext } from "./cart-context";
import { useReducer } from "react";

const defaultCartState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const items = state.items;
    const cartIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    // console.log(action.item)

    if (cartIndex !== -1) items[cartIndex].amount += action.item.totalAmount;
    else items.push({ ...action.item, amount: action.item.totalAmount });

    const totalAmount =
      state.totalAmount + action.item.price * action.item.totalAmount;

    return { items, totalAmount };
  }

  if (action.type === "REMOVE") {
    let updatedItems;
    const index = state.items.findIndex((el) => el.id === action.id);
    if (state.items[index].amount === 1) {
      updatedItems = state.items.filter((el) => el.id !== action.id);
     
    } else {
      updatedItems = [...state.items];
      updatedItems[index].amount -= 1;
      
    }

    return {
      items: updatedItems,
      totalAmount: state.totalAmount - state.items[index].price,
    };
  }

  return defaultCartState;
};

export const CartProvider = (props) => {
  const [cartstate, dispatchCartAction] = useReducer(
    cartReducer,
    defaultCartState
  );
  const addItemCartHandler = (item) => {
    dispatchCartAction({
      type: "ADD",
      item: item,
    });
  };

  const removeItemCartHandler = (id) => {
    dispatchCartAction({
      type: "REMOVE",
      id: id,
    });
  };

  const cartContext = {
    items: cartstate.items,
    totalAmount: cartstate.totalAmount,
    addItem: addItemCartHandler,
    removeItem: removeItemCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};
