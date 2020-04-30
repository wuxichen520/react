import React from 'react';
import RouterContext from "./RouterContext" ;
export default class Prompt extends React.Component{
    static contextType = RouterContext
    componentWillUnmount(){
        this.context.history.block(null);
    }
    render(){
        let history = this.context.history
        const {when ,message} = this.props;
        if(when){
            history.block(message)
        }else{
            history.block(null)
        }
        return (
            <div>Prompt</div>
        )
    }
}
