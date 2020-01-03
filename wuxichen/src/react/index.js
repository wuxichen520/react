
// function ReactElement(type,props){
//     let element = { $$typeof: REACT_ELEMENT_TYPE, type, props }
//       return element
// }
const hasSymbol = typeof Symbol === 'function' && Symbol.for;


export const REACT_ELEMENT_TYPE = hasSymbol
    ? Symbol.for('react.element')
    : 0


class Component {
        constructor(props) {
            this.props = props;
        }
        static isReactComponent = true
}
function createElement(type,config,children){
    let props = {}
    for(let k in config){
        props[k] = config[k]
    }

    const childrenLength = arguments.length-2
    if(childrenLength == 1){ ////如果说只有一个儿子的话，那么props.children是一个对象,也就是一个ReactNode
        props.children = children

    }else{
        ////如果儿子的数量大于1 个话，就把所有的儿子放到一个数组里
        props.children = Array.prototype.slice.call(arguments,2)
       
    }

    //表示这是一个React元素类型
    return { $$typeof: REACT_ELEMENT_TYPE, type, props };
}
/**
 * REACT_ELEMENT_TYPE 表示这是一个React元素 
 * 不管你的type是不是原生的，都是 reactElemnt类型 
 * type React元素的类型  string number Function Class
 */

export default { createElement ,Component}