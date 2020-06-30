import React,{ Component } from "react";
import classes from './Login.module.css';
import {LOGO_LOGIN} from '../../constants/images.ts';
import Input from '../UI/input/input'
import Button from "../UI/button/button";
class Login extends Component{
    state={
        form:{
            email:{
                value:'',
                valid:false,
                touched:false,
            },
            password:{
                value:'',
                valid:false,
                touched:false,
            },
        }
    }

    changedHandler=(event,type)=>{
       
        let form={
            ... this.state.form
        }
        let field={
            ...form[type]
        }
     
        field.value=event.target.value;
        let newform={
           ...form,   
        }
        newform[type]=field
       let newstate={
           form:newform
       }
      
        this.setState({...newstate});
        console.log(this.state);

    }
    formSubmit=()=>{
        console.log(this.state.form)
    }

    render(){
        return(
            <div className={classes.login_wrapper}>
                      <div className={classes.login}>
                                <img src={LOGO_LOGIN}/>
                                <div className={classes.loginText}>Login</div>
                                <Input  inputtype="Input" type="email" value="" placeholder="Enter your email" changed={(event) => this.changedHandler(event, 'email')} ></Input>
                                <Input  inputtype="Input" type="password" value="" placeholder="Enter your Password" changed={(event)=>{this.changedHandler(event,'password')}}></Input>
                               
                               <div className={classes.button_style}>
                                        <div><Button clicked={this.formSubmit}>Submit</Button></div>
                               </div>
                                
                     </div>
            </div>
          
        )
    }
}

export default Login;