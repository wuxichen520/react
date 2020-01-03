
import React from 'react';
import ReactDOM from 'react-dom';

class Counter extends React.Component {
   
    constructor(props) {
        super(props);
        
        this.state = {name:"ww", number: 0 };
    }
    add(){
        //在setTimeout里面如果调用setState的话，会立刻更新
        // setTimeout(()=>{
        //     this.setState({number:this.state.number +1})
        //     console.log(this.state) //{number:1}
        // })
        this.setState({number:this.state.number +1})
    }
  
    render() {
        //当我们调用setState方法的时候，会引起状态的改变和组件的重新刷新
        console.log('render');
        return (
            <div>
                <p>{this.state.name}</p>
                <p>{this.state.number}</p>
                <button onClick={() => this.add()}>+</button>
            </div>
        )
    }
}
ReactDOM.render(<Counter />, document.getElementById('root'));




