import React from 'react';
import {WithRouter} from "../react-router-dom"

class NavHeader extends React.Component{
   
    render(){
        console.log(this.props,WithRouter)
        return  (<div>NavHeader</div>)
    }
}

export default WithRouter(NavHeader)
// export default NavHeader