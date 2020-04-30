import React from 'react';
import {local} from "../local"
export default class UseDetails extends React.Component{
    state = {user:{}}
    componentDidMount(){
        console.log(this.props)
        let user = this.props.location.state;
        if(!user){
            let id = this.props.match.params.id
            user = local.getId(id);
        }
        this.setState({user});
       
    }
    render(){
        const {user} = this.state
        return(
            <div>
                <p>id:{user.id}</p>
                <p>用户名:{user.username}</p>
            </div>
        )
    }
}
// export default function(props){
   
//     componentDidMount
//     return (
//         <div>UseDetails</div>
//     )
// }