import React, { useContext }  from 'react';
import RouterContext from './RouterContext'
import {pathToRegexp} from 'path-to-regexp'
/**
 * 负责进行子组件的匹配，只会渲染第一个匹配上的子组件
 * useContext 是获取上下文对象的第三种方式
 * static contextType (类中的)  Consumer(函数中) 还可以ReactHooks useContext 可以上下文对象
 * @param {*} props 
 */
export default function (props){

    let routerContext = useContext(RouterContext);
    let children = props.children;
    children = Array.isArray(children)?children:[children];
    let pathname = routerContext.location.pathname//当前路径
    for(let i =0;i<children.length;i++){
        let child = children[i];
        /**
         * React.createElement(Route,{exact,path,component})
             {type:Route,props:{exact,path,component}}
         */
        let {path="/",component,exact} = child.props;
        let regexp =  pathToRegexp(path,[],{end: !!exact});
        let matched = pathname.match(regexp);
        if(matched){
            console.log(child)
            return child  //虚拟dom
        }
    }
    return (
       null
    )
}
