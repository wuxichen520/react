import React, { useContext }  from 'react';
import RouterContext from './RouterContext'

// export default function (props){

//     let routerContext = useContext(RouterContext);
  
   
//         if(!props.from || props.from === routerContext.location.pathname){
//             routerContext.history.push(props.to)

//         }
    
    
    
//     return (
//        null
//     )
// }
export default class Redirect extends React.Component{
    static contextType = RouterContext
    render(){
        if(!this.props.from || this.props.from ===  this.context.location.pathname){
            this.context.history.push(this.props.to);

        }
     
        return null;
    }
}