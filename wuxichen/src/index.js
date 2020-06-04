

import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component{
       constructor(props){
           super(props)
           this.state = {number:0}

           setInterval(() => {
               this.setState({number:this.state.number+1})
               console.log(this.state.number)
           },1000);
           
       }
       render(){
           
           return <div id={'counter' +this.state.number}></div>
       }
}



ReactDOM.render(

    <Counter />
,document.getElementById("root"));

