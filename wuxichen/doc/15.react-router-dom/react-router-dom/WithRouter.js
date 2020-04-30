import React from 'react'
import  Route  from "./Route";


export default function(WrappedComponent){
    //console.log(WrappedComponent)
    return props => <Route  component={WrappedComponent}></Route>
}