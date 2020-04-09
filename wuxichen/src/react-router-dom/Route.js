
import React from 'react';
import  RouterContext from './RouterContext';
import {pathToRegexp} from 'path-to-regexp'
/**
 * Route代表一条路由规则
 * path代表此规则的路径 
 * component代表要渲染的组件
 * 如果说当前路径 #/user   hashRouter state location pathname =>context传下来了
 */
export default class Route extends React.Component{
    static contextType = RouterContext  //this.context.location.pathname

    render() {
        //console.log(this.props)
        let {path ,component:RouteComponent,exact} = this.props;
        let pathname = this.context.location.pathname;
        let paramNames = [];
        let rex = pathToRegexp(path,paramNames,{end:!!exact});
        let props = {
            history:this.context.history,
            // location:this.context.location
        }
        // if((exact && pathname === path) || (!exact && pathname.startsWith(path))){
        if(rex.test(pathname)){
            // paramNames = paramNames.map(item=>item.name);
            // // let [url,...values] = result
            // let params = {};
            // for(let i = 0; i<paramNames.length;i++){
            //     params[paramNames[i]] = values[i]
            // }
            // props.match = {
            //     path,
            //     url,
            //     isExact:url === pathname,
            //     params
            // }
            return <RouteComponent {...props}/>
        }else{
            return null
        }
       
    }
}