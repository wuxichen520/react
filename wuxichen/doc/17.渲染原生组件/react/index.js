import { TEXT, ELEMENT } from './constants';
import { ReactElement } from './vdom';


function createElement(type, config = {}, ...children) {   // 虚拟dpm
    delete config.__source;
    delete config.__self;
    let { key, ref, ...props } = config;   //  config 为标签上的属性
    let $$typeof = null;
    if (typeof type === 'string') { // span  div button
        $$typeof = ELEMENT;
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
    createElement
}
export default React;