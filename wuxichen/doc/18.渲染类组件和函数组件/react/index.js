import { TEXT, ELEMENT,CLASS_COMPONENT,FUNCTION_COMPONENT } from './constants';
import { ReactElement } from './vdom';
import {Component} from './component'

function createElement(type, config = {}, ...children) {   // 虚拟dpm
    delete config.__source;
    delete config.__self;
    let { key, ref, ...props } = config;   //  config 为标签上的属性
    let $$typeof = null;
    if (typeof type === 'string') { // span  div button
        $$typeof = ELEMENT;
    }
    //说明这个类型是个类组件
    else if(typeof type === 'function' && type.prototype.isReactComponent){
        $$typeof = CLASS_COMPONENT;
    }
     //说明这个类型是个函数组件
    else if(typeof type === 'function'){
        $$typeof = FUNCTION_COMPONENT;
    }
    props.children = children.map(item => 
        {
            if(typeof item === 'object' || typeof item === 'function' ){  //标签
                return item //React.createElement('span',{color:'red'},'hello')
            }else{
                return { $$typeof: TEXT, type: TEXT, content: item }  //item = 'hello
            }
        })
        
        return ReactElement($$typeof,type,key,ref,props)
}

const React = {
    createElement,
    Component
}
export {Component}
export default React;