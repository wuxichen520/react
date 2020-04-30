

import React from 'react';
import ReactDOM from 'react-dom';
import {map} from './react/reactChildren'

class Chid extends React.Component{
    render(){
        const mappenchild = map(
            this.props.children,
            function(item,index){
                {console.log(item)}
                //return  [<div key={`${index}`}>{this.name}:{item}</div>]
                 return  [item,[item,[item,[item,[item]]]]]
             },
             {name:"我是个上下文"}
            
        )

        console.log(mappenchild)
        return(<div>
            {mappenchild}
        </div>)
    }
   
}

class App extends React.Component{
    render(){
        //return <Chid><span>A</span><span>B</span><span>c</span></Chid>
    return <Chid>{[<span key="keyA">A</span>,<span>B</span>]}{[<span>C</span>,<span>D</span>]}</Chid>
    }
}

ReactDOM.render(
<App/>
,document.getElementById("root"));


//数组映射的key
// 0: {$$typeof: Symbol(react.element), type: "span", key: ".0:$keyA/.$keyA", ref: null, props: {…}, …}
// 1: {$$typeof: Symbol(react.element), type: "span", key: ".0:$keyA/.1:$keyA", ref: null, props: {…}, …}
// 2: {$$typeof: Symbol(react.element), type: "span", key: ".0:$keyA/.1:1:$keyA", ref: null, props: {…}, …}
// 3: {$$typeof: Symbol(react.element), type: "span", key: ".0:$keyA/.1:1:1:$keyA", ref: null, props: {…}, …}
// 4: {$$typeof: Symbol(react.element), type: "span", key: ".0:$keyA/.1:1:1:1:$keyA", ref: null, props: {…}, …}
// 5: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.0", ref: null, props: {…}, …}
// 6: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:0", ref: null, props: {…}, …}
// 7: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:1:0", ref: null, props: {…}, …}
// 8: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:1:1:0", ref: null, props: {…}, …}
// 9: {$$typeof: Symbol(react.element), type: "span", key: ".0:1/.1:1:1:1:0", ref: null, props: {…}, …}
// 10: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.0", ref: null, props: {…}, …}
// 11: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:0", ref: null, props: {…}, …}
// 12: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:1:0", ref: null, props: {…}, …}
// 13: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:1:1:0", ref: null, props: {…}, …}
// 14: {$$typeof: Symbol(react.element), type: "span", key: ".1:0/.1:1:1:1:0", ref: null, props: {…}, …}
// 15: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.0", ref: null, props: {…}, …}
// 16: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:0", ref: null, props: {…}, …}
// 17: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:1:0", ref: null, props: {…}, …}
// 18: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:1:1:0", ref: null, props: {…}, …}
// 19: {$$typeof: Symbol(react.element), type: "span", key: ".1:1/.1:1:1:1:0", ref: null, props: {…}, …}