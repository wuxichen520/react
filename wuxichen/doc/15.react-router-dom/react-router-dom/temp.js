import React  from 'react';
import RouterContext from './RouterContext'


export default function (props){
    return (
        <RouterContext.Consumer>
            {
             
                contextValue=>(
                 
                   <div></div>
                )
            }
        </RouterContext.Consumer>
    )
}