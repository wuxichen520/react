import React from "react";
import { Route, Redirect } from "../react-router-dom";
export default function ({component:Component,...rest}){
    return <Route {...rest} render={
        props=>{ 
            console.log(props,Component,rest)
            return localStorage.getItem("login")?<Component {...props}/>:<Redirect  to={{pathname:"/login",state:{from:props.location.pathname}}} />
    }}/>
}