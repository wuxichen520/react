
import React from 'react';
import ReactDOM from 'react-dom';


let element = <div>{new Date().toLocaleString()}</div>

setInterval(()=>{
    //element.props.children = new Date().toLocaleString()  //Object.freeze
    let element = <div>{new Date().toLocaleString()}</div>
    ReactDOM.render(element, document.getElementById("root"))
},1000)


function freeze(obj){
    //把属性的writable改为false

}





