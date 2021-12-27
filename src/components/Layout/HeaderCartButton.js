import {React , useContext, useEffect, useState} from 'react'
import CartIcon from '../Cart/CartIcon'
import classes from './HeaderCartButton.module.css'
import { CartContext } from '../store/cart-context'


export const HeaderCartButton = (props) => {

    const[btnIsHighlighted , setBtnIsHighlighted] = useState(false);

    const cartContext = useContext(CartContext);

    const totalItems = cartContext.items.reduce((curNum,item)=>{ return curNum + item.totalAmount},0)

    const buttonClasses =`${classes.button} ${btnIsHighlighted ? classes.bump : ''}`

    useEffect(()=>{
        if(cartContext.items.length===0) {return;}

        setBtnIsHighlighted(true)

        const timer = setTimeout(() => {
            setBtnIsHighlighted(false);
          }, 300);
      
          return () => {
            clearTimeout(timer);
          };

// eslint-disable-next-line
    } , [cartContext.totalAmount])

    

    return <button className={buttonClasses} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon/>
        </span>
        <span>
            Your Cart
        </span>
        <span className={classes.badge}>
            {totalItems}
        </span>
    </button>
}
