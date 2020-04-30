import { TEXT, ELEMENT,CLASS_COMPONENT,FUNCTION_COMPONENT } from './constants';
import {setProps,flatten} from './utils'
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

    else if($$typeof == FUNCTION_COMPONENT){ //函数组件
        dom = createFunctionComponentDom(element)
    }
    else if($$typeof == CLASS_COMPONENT){ //类组件
        dom = createClassComponentDom(element)
    }
    return  dom
}

 function createNativeDom(element){
    let {type,props} = element
    let dom = document.createElement(type);  //真实dom  span  button
    //创建子节点
    createDomChildren(dom,element.props.children)
    setProps(dom,props) //给真实DOM传属性及方法
    return  dom
}

//创建函数dom对象  真实dom
function createFunctionComponentDom(element){
    let {type,props} = element;   //type = Function
    let renderElement = type(props);
    element.renderElement = renderElement
    let newDOM = createDom(renderElement);
    renderElement.dom = newDOM //我们从虚拟domReact元素中创建出真实dom，创建出来后我们会把真实dom添加到虚拟dom的dom属性上
    return newDOM
    // element.renderElement.dom = 真实dom
}
function createClassComponentDom(element){
    let {type,props} = element;   //type = Class
    let componentInstance =  new type(props)  //创建实例
    //创建类组件实例后会在类组件的虚拟dom对象上添加一个属性componentInstance，指向类组件实例
    element.componentInstance = componentInstance //以后组件运行当中componentInstance是不变的
    let renderElement = componentInstance.render();
    //在类组件实例上添加renderElement，指向上一次要渲染的虚拟dom节点
    //后面组件更新，会重新render，然后要跟上一次的renderElement进行dom diff
    componentInstance.renderElement = renderElement
    let newDOM = createDom(renderElement);
    return newDOM
    //element. componentInstance.renderElement.dom = 真实dom
}
 function createDomChildren(parentNode,children){
    // children&&children.flat(Infinity).forEach(child => {  深克隆
        children&&flatten(children).forEach((child,index) => { //自己写的方法
            //child其实是虚拟dom 我们会在虚拟dom加一个属性_mountIndex挂在的索引，指向此虚拟节点在父节点的索引，为了domdiff
            child._mountIndex = index
            let childDOM = createDom(child)
            parentNode.appendChild(childDOM)
    });
 }
