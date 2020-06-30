import React from 'react';
import classes from '../button/button.module.css'

const Button=(props)=>{
    return (
        <button className={classes.button} disabled={props.disabled} onClick={props.clicked}>
            {props.children}
        </button>
    )
}
export default Button;