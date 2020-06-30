import React from 'react';
import classes from '../input/input.module.css'
const Input=(props)=>{
        let inputElement=null;
        let validationError=null;
            switch(props.inputtype){
                case 'Input' : 
                              inputElement=(
                                  
                                      <input className={classes.input} type={props.type}  placeholder={props.placeholder} onChange={props.changed}></input>
                                 
                              )   ;
                              break;

            }


            return (
                <div>
                    <label>{props.label}</label>
                    {inputElement}
                    {validationError}
                </div>
            )

}

export default Input;