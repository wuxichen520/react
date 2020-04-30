
import React  from 'react';
import  RouterContext from './RouterContext';

let pushState = window.history.pushState;
window.history.pushState = function(state,title,url){
    pushState.call(window.history,state,title,url);
    window.onpushstate.call(this,state,url)
}
export default class BrowserRouter extends React.Component{
    state = {
        location:{
            pathname:window.location.pathname  || "/", // #/user ==> /user
            state:window.history.state
        }
    }
    componentDidMount(){
       
        window.onpopstate =(event)=>{
            this.setState({
                ...this.state,
                location:{
                    ...this.state.location,
                    state:event.state,
                    pathname:window.location.pathname || "/"
                }
              
            })
        }

        window.onpushstate = (state,pathname) =>{
            this.setState({
                ...this.state,
                location:{
                    ...this.state.location,
                    state,
                    pathname
                }
              
            })
        }
        // window.addEventListener('hashchange',event=>{
        //     this.setState({
        //         ...this.state,
        //         location:{
        //             ...this.state.location,
        //             pathname:window.location.hash.slice(1) || "/"
        //         }
              
        //     })
        //     window.location.hash = window.location.hash || "/"
        // })
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
                    // window.location.hash = pathname
                    window.history.pushState(state,'',pathname)
                   // that.state.location.state = state;
                }else{
                    // window.location.hash = to
                    //that.state.location.state =null;
                    window.history.pushState(null,'',to)
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