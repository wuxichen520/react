import React, { useState,useEffect } from 'react';
import { Link } from '../react-router-dom';
// export default function(props){
//     let [users,setUser] = useState([]);

//     return (
//         <div>UserList</div>
//     )
// }

export default class UserList extends React.Component{

            state = {
                users:[]
                }
    
    componentDidMount(){
        let usesStr = localStorage.getItem("users");
        let users = JSON.parse(usesStr);
     
        if(users){
            this.setState({users});
        }
       
    }
    render(){
        console.log(this.state.users)
        return(
            <ul>
                {this.state.users.map((user)=>
                    <li key={user.id}>
                        {/* <Link to={`/user/details/${user.id}`}>{user.username}</Link> */}
                        <Link to={{pathname:`/user/details/${user.id}`,state:user}}>{user.username}</Link>
                        {/* {user.username} */}
                    </li>
                )}
            </ul>
        )
    }
}