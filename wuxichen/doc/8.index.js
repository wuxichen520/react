
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * ref
 *  this.refs={
 *    num1:num1对应的真实DOM
 *    num2:num2对应的真实DOM 
 *    result:result对应的真实DOM
 * }
 * ref是 reference引用 ，让你可以引用一个虚拟DOM无素的真实DOM
 * 1. ref=字符串 已经将被废弃
 * 2. ref=函数   不推荐
 * 3. ref= React.createRef()结果 已经推荐 useRef
 */
// class Calculator  extends React.Component {
//     add=()=>{
//         let num1 = this.refs.num1.value;
//         let num2 = this.refs.num1.value;
//         let result = parseInt(num1) + parseInt(num2);

//         this.refs.result.value = result
//     }
//     render() {
//         return (
//             <div>
//              <input ref="num1"/>+<input ref="num2"/> <button onClick={this.add} >=</button>  <input ref="result"/>
//             </div>
//         )
//     }
// }



// class Calculator  extends React.Component {
//     add=()=>{
//         let num1 = this.num1.value;
//         let num2 = this.num2.value;
//         let result = parseInt(num1) + parseInt(num2);

//         this.result.value = result
//     }
//     render() {
//         return (
//             <div>
//              <input ref={instance => this.num1 = instance}/>+<input ref={instance => this.num2 = instance}/> <button onClick={this.add} >=</button>  <input ref={instance => this.result  = instance}/>
//             </div>
//         )
//     }
// }



// class Calculator  extends React.Component {
//     constructor(){
//         super();
//         this.num1 = React.createRef();//{current:null}
//         this.num2 = React.createRef();//{current:null}
//         this.result = React.createRef();//{current:null}
//     }
//     add=()=>{
//         let num1 = this.num1.current.value;
//         let num2 = this.num2.current.value;
//         let result = parseInt(num1) + parseInt(num2);

//         this.result.current.value = result
//     }
//     render() {
//         return (
//             <div>
//              <input ref={this.num1}/>+<input ref={this.num2}/> <button onClick={this.add} >=</button>  <input ref={this.result}/>
//             </div>
//         )
//     }
// }

// class Username extends React.Component {
//     constructor() {
//         super();
//         this.inputRef = React.createRef();//{current:null}
//     }
//     render() {
//         return (
//             <input ref={this.inputRef} />
//         )
//     }
// }
// function forwardRef(functionComponent){ // 类组件
//     return class extends React.Component{
//         render(){
//             console.log(this.props,this.props.ref2)
//             return functionComponent(this.props,this.props.ref2)
//         }
//     }
// }
function forwardRef(functionComponent){ 
    return props => functionComponent(props,props.ref2)  
}
function Username(props,ref){
   console.log('ref :', ref);
    debugger
    return <input ref={ref}/>   // <input ref={current:null} />
}

// function Username(){
//     return <input ref={current:null} />
// }
const ForwardedUsername = forwardRef(Username); 
class Form extends React.Component {
    constructor() {
        super();
       
        this.username = React.createRef();//{current:null}
        console.log(this.username) //{current:null}
     
    }
    getFocus = (event) => {
       console.log(this.username) //{current: input}
        this.username.current.focus();
    }
    render() {
        return (
            <>
                <ForwardedUsername ref2={this.username} />     {/* <input ref={current:null} /> */}
                <button onClick={this.getFocus}>让用户名获得焦点</button>
            </>
        )
    }
}


ReactDOM.render(<Form  />, document.getElementById('root'));




