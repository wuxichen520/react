

import React from './react';
import ReactDOM from './react-dom';



// let onClick = (e)=>{console.log(e)}

let onClick = (e) =>{
    console.log(e)
    // e.persist()
    setInterval(() => {
      
        console.log(e)  //全是null
    }, 1000);
}
// let ele = (<button id="sayHello" onClick={onClick}> say <span color='red'>hello</span></button>)
let ele = React.createElement('button',{id:"sayHello",onClick},'say',React.createElement('span',{color:"red",style:{color:"red"}},'hello'))


// class Counter extends React.Component{
//     constructor(){
//         super()
//         this.state = {
//             number : 0
//         }
//     }
//     tick = (e) =>{
//         setInterval(()=>{
//             console.log(e)
//         },1000)
//     }
//     onClick = (e) =>{
//         console.log(e);
//         // e.persist()
//         this.tick(e)
//     }
//     render(){
//          return (<button onClick={this.onClick}>{this.state.number}</button>)
//     }
// }

// console.log(ele)
ReactDOM.render(

   ele
,document.getElementById("root"));

