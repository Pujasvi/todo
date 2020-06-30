import React,{ Component, Fragment } from "react";
import classes from './layout.module.css'
    class Layout extends Component{

        render(){
           return (
               <Fragment>
                       
                        <div  className={classes.outer_login}>{this.props.children}</div>
               </Fragment>
               
           )
        }

    }

    export default Layout;