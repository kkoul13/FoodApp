import { React } from 'react'
import classes from "./Modal.module.css"
import reactDom from 'react-dom'

const Backdrop=(props)=>{
    return <div className={classes.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay=(props)=>{
    return<div className={classes.modal}>

   
    <div className={classes.content}>{props.children}</div>
    </div>
}

const portalReference = document.getElementById('overlays');

export const Modal = (props) => {
    return (
        <>
        {reactDom.createPortal(<Backdrop onClose={props.onClose}/>, portalReference)}
        {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>,portalReference)}
        
        </>
    )
}
