import React from "react";
import { Route,Link} from "../react-router-dom";
export default function({to,exact,children}){
    return <Route path={to} exact={exact} children={
    props=>{
      
        return <Link to={to} className={props.match?"on":""}>{children}</Link>} 
    }/>
}