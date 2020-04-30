

import React from './react';
import ReactDOM from './react-dom';

class ClassComponent extends React.Component{
        render(){
            return ( React.createElement('div',{id:"counter4"},'hello'))
        }
}

function FunctionCounter(){
    return ( React.createElement('div',{id:"counter"},'hello'))
}
let ele1 = React.createElement('div',{id:"counter3"},'hello')
let ele2=React.createElement(ClassComponent)
let ele3=React.createElement(FunctionCounter)

// let ele = React.createElement('button',{id:"sayHello",onClick},'say',React.createElement('span',{color:"red",style:{color:"red"}},'hello'))


ReactDOM.render(

    ele2
,document.getElementById("root"));

