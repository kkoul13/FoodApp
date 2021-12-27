import React from "react";
import classes from "./MealItemForm.module.css";
import { Input } from "../../UI/Input";
import { useRef , useState } from "react";

export const MealItemForm = (props) => {

  const [amountIsValid, setAmountIsValid]=useState(true);
  const amountInputRef= useRef();

  const submitFormHandler=(event)=>{
    event.preventDefault()
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount
    // console.log(enteredAmountNumber , enteredAmount)
    if(enteredAmount.trim().length === 0 || enteredAmountNumber<1||enteredAmountNumber>5){
      setAmountIsValid(false);
      return;
    }
    else{
      props.onAddToCart(enteredAmountNumber)
      
    }
  }

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <Input
        label="Amount"
        ref={amountInputRef}
        input={{
          id: 'amount_' + props.id,
          type: "number",
          min: "1",
          max: "3",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter a valid amount</p>}
    </form>
  );
};
