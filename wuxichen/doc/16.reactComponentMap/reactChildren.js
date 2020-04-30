
//result:映射出来的所有节点

import { REACT_ELEMENT_TYPE } from "../shared/ReactSymbols";

// let arr = [1,[2,[3,[4]]]];

// // console.log(arr.toString().split(",").map(item=>parseInt(item)))
// function flat(arr){
//     return arr.toString().split(",").map(item=>parseInt(item))
// }
// console.log(arr.flat())

// function mapChildren(children,mapFn,context){
//     return children.flat(Infinity).map(mapFn).flat(Infinity)
// }

const SEPARATOR = '.'; //分隔符  开头的分隔符
const SUBSEPARATOR = ':'; //子分隔符  中间件分隔符
function mapChildren(children,mapFn,context){
    const result = [];
    debugger;
    mapIntoWithKeyPrefixInternal(children,result,null,mapFn,context);
    return result
}


//prefix指的是渲染前的节点   key: ".0:0/.0",  /前面的部分
function mapIntoWithKeyPrefixInternal(children,result,prefix,mapFn,context){
    if(prefix !== null){
        prefix = prefix + "/" ;//  .0:0=>.0:0/
    }
    //遍历的上下文
    const traverseContext = {  
        result,
        mapFn,
        prefix
    }
    traverseAllChildren(children,'',mapStringChildIntoContext,traverseContext,context)
}
function traverseAllChildren(children,nameSoFar,mapStringChildIntoContext,traverseContext,context){
    let type = typeof children;
    //说明是个可渲染节点
    if(type == "string" || type == "number" || (type == "object" && children.$$typeof== REACT_ELEMENT_TYPE)){
        mapStringChildIntoContext(traverseContext,children,context,nameSoFar === ""?SEPARATOR+getComponentKet(children,0):nameSoFar)
    }
    if(Array.isArray(children)){
        //如果传过来的nameSoFar是空前缀就是.否则就是: 
        //第二次进来的时候nameSoFar =.0 nextNamePrefix=:
        let nextNamePrefix = nameSoFar === ""?SEPARATOR:nameSoFar+SUBSEPARATOR
        for(let i =0; i<children.length;i++){
            let child = children[i]; //[<span>A</span>,<span>B</span>] .0
            let nextName = nextNamePrefix+getComponentKet(child,i) //.0   .0:0
            traverseAllChildren(children[i],nextName,mapStringChildIntoContext,traverseContext,context)
        }
    }
}
function getComponentKet(component,index){
    return component.key || index.toString(36) //如果此节点有自己的key就用自己的key  如果没有就用索引
}
//map映射 child肯定是一个节点
//childKey=.0:0
function mapStringChildIntoContext(traverseContext,child,context,childKey){
    let {result,mapFn,prefix} = traverseContext;

    //mappenChild <div key={`${index}`}>{item}</div>
    console.log(traverseContext)
   let mappenChild =  mapFn.call(context,child); //child = <span>A</span>


   //mappenChild = [item,[item,[item,[item]]]]
   if(Array.isArray(mappenChild)){
        mapIntoWithKeyPrefixInternal(mappenChild,result,childKey,c=>c,context)
   }else{

       // result.push(mappenChild) //.0:0/

        result.push({...mappenChild,key:prefix+childKey}) //.0:0/.0
   }
  

}
export{
    mapChildren as map
}