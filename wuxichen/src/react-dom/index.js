


/**
 * 
 * @param {*} node React节点 因为它可以React元素，也可以是数字 字符串
 * @param {*} parent  父容器，它是一个真实DOM元素 
 */

 function component(){

 }

function render(node,parent){
    if(typeof node === 'string'){
        return parent.appendChild(document.createTextNode(node))
    }
    let type,props;
    type = node.type; //h1 Function ClassComponent
    props = node.props
    if(typeof type == 'function'){  //函数组件
      let newElement =   type(props)
    //   console.log(newElement)
      type = newElement.type;
      props = newElement.props
    }
    if(type.isReactComponent){ //类组件
        let ele =  new type(props).render();
        type = ele.type;
        props = ele.props
    }
    let domElement =  document.createElement(type)
   
    for(let proName in props){
   
        if(proName == 'children'){
            let children = props.children; //可能是一个对象，也可以是一个数组
            if(!Array.isArray(children)){
                children = [children];
            }
            children.forEach(child => render(child,domElement));
        }else if(proName == 'className'){
            domElement.className = props.className
        }else if(proName == 'style'){//值就是一个行内的样式对象
            let styleObject = props.style;  
            for(let attr in styleObject){
             
                domElement.style[attr] = styleObject[attr]
            }
        }else{
            domElement.setAttribute(proName,props[proName])
        }
    }
    parent.appendChild(domElement)
}

export default {render}