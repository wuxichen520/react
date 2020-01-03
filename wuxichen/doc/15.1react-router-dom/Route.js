
import React from 'react';
import  RouterContext from './RouterContext';
/**
 * Route代表一条路由规则
 * path代表此规则的路径 
 * component代表要渲染的组件
 * 如果说当前路径 #/user   hashRouter state location pathname =>context传下来了
 */
export default class Route extends React.Component{
    static contextType = RouterContext  //this.context.location.pathname

    render() {
        let {path ,component:RouteComponent,exact} = this.props;
        let pathname = this.context.location.pathname;
        if((exact && pathname === path) || (!exact && pathname.startsWith(path))){
            return <RouteComponent />
        }else{
            return null
        }
       
    }
}