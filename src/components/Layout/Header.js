import React from 'react'
import classes from './Header.module.css'
import mealsImg from '../../assets/meals.jpg'
import { HeaderCartButton } from './HeaderCartButton'


export const Header = (props) => {
    return (
    <>
    <header className={classes.header}>
        <h1 >React Meals</h1>
        <HeaderCartButton onClick={props.onClick}/>
    </header>
    <div className={classes['main-image']}>
        <img src={mealsImg} alt='Food'/>

    </div>
    </>
    )
}
