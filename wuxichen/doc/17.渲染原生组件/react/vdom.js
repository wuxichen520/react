import { TEXT, ELEMENT } from './constants';
import {setProps} from './utils'
/**
 * 
 * @param {*} $$typeof  元素类型  是text  还是element
 * @param {*} type  标签 button  div  span
 * @param {*} key   
 * @param {*} ref  
 * @param {*} props  标签上的属性及child
 */
export function ReactElement($$typeof,type,key,ref,props){   //  虚拟dom
    let  element = {
        $$typeof,
        type,
        key,
        ref,
        props
    }
    return  element
}
export function createDom(element){
    let {$$typeof} = element;  //类型
    let dom = null;
    if(!$$typeof){ //不存在说明没有类型  string/number
        dom = document.createTextNode(element)
    } else if($$typeof == TEXT){
        dom = document.createTextNode(element.content)
    }
    else if($$typeof == ELEMENT){
        dom = createNativeDom(element)
    }

    return  dom
}

 function createNativeDom(element){
    let {type,props} = element
    let dom = document.createElement(type);  //真实dom  span  button
    //创建子节点
    createNativeDomChildren(dom,element.props.children)
    setProps(dom,props) //给真实DOM传属性及方法
    return  dom
}

 function createNativeDomChildren(parentNode,children){
    children&&children.flat(Infinity).forEach(child => {
            let childDOM = createDom(child)
            parentNode.appendChild(childDOM)
    });
 }