
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 属性 父组件传过来的，自己是不能控制，也不能改变
 * 状态 状态是组件自己内部产生的维护的,由自己维护，外界无法访问。唯一改变状态 的方式就是setState
 * 
 */

class Welcome extends React.Component{
    constructor(props){
        super(props)
        console.log(props)
    }
    render(){
        return  <h1 id={this.props.id}><span>hello</span><span>world</span></h1>
    }
}

// let element = React.createElement("h1", {
//         id: "hello"
//       },
//        React.createElement("span", {style:{color:"red",backgroundColor:"yellow"}}, "hello"),
//         React.createElement("span", {className:"world"}, "world"));
      

let element =  React.createElement(Welcome,{id:"111"})
       
ReactDOM.render(element, document.getElementById('root'));




