import {addEvent} from './event'

//如果obj是数组只取第一个元素 否则就返回自己
export function onlyOne(obj){
    return Array.isArray(obj)?obj[0]:obj
}

//给真实DOM节点赋属性
export function setProps(dom,props){
    for(let key in props){
        if(key != 'children'){
            let value  = props[key];
            setProp(dom,key,value)
        }
    }
}
function setProp(dom,key,value){
    if(/^on/.test(key)){ //事件
        // console.log([key.toLowerCase()],value)
        // dom[key.toLowerCase()]=value //改成合成事件   主要原生事件在各个浏览器不一样 
        addEvent(dom,key,value)
    }
    else if(key == 'style'){ //行内样式
        if(value){
            for(let styleName in value){
                if(value.hasOwnProperty(styleName)){
                    dom.style[styleName] = value[styleName];
                }
            }
        }

    }else {  //标签属性
        dom.setAttribute(key, value);
    }
}