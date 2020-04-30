
import React  from 'react';
import  RouterContext from './RouterContext';

/**
 * HashRouter只是一个容器，并没有DOM结构，它渲染的就是它的子组件
 * 它就是为了向下层组件传递 location
 */
export default class HashRouter extends React.Component{
    state = {
        location:{
            pathname:window.location.hash.slice(1) || "/", // #/user ==> /user
            state:window.history.state
        }
    }
    componentDidMount(){
        window.addEventListener('hashchange',event=>{
            this.setState({
                ...this.state,
                location:{
                    ...this.state.location,
                    pathname:window.location.hash.slice(1) || "/"
                }
              
            })
            window.location.hash = window.location.hash || "/"
        })
    }

    render(){
        let that = this
        let history = {
            location:this.state.location,
            push(to){
                if(that.message){
                   let confirm =  prompt(that.block(typeof to == "object"?to:{pathname:to}));
                   if(!confirm){
                        return
                   }
                   
                }
                if(typeof to == "object"){
                    let {pathname,state} = to;
                    window.location.hash = pathname
                    that.state.location.state = state;
                }else{
                    that.state.location.state =null
                    window.location.hash = to;
                }
            },
            block(message){
                that.message = message
            }
        }
        let routerValue = {
          
            location:this.state.location,
            history,
        }
        return (
            <RouterContext.Provider value = {routerValue}>
                {this.props.children}
            </RouterContext.Provider>
        )
    }
}