import React  from 'react';
import RouterContext from './RouterContext'


// export default function Link(props){
//     return (
//         <RouterContext.Consumer>
//             {
             
//                 routerValue=>(
//                    //console.log(props.children),
//                    <a {...props} onClick={()=>routerValue.history.push(props.to)}>{props.children}</a>
//                 )
//             }
//         </RouterContext.Consumer>
//     )
// }


export default class Link extends React.Component{
    static contextType = RouterContext
    render(){
        return (
            <a {...this.props} onClick={()=>this.context.history.push(this.props.to)} >{this.props.children}</a>
        )
    }
}








// export default function Link(props){
//     return <a href={`#${props.to}`}>{props.children}</a>
// }