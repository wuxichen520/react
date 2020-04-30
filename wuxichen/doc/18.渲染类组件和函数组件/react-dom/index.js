
import {createDom} from '../react/vdom'

/**
 * 
 * @param {*} element React节点 因为它可以React元素，也可以是数字 字符串
 * @param {*} container  父容器，它是一个真实DOM元素 
 */


function render(element,container){
   //1.把虚拟dom变成真实dom
   let dom = createDom(element)
   //2.把真实dom挂载到页面上
   container.appendChild(dom)

}

export default {render}