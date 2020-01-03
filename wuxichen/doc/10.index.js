
import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 只有类组件才有生命周期
 */

class Counter extends React.Component {
    static defaultProps = {//0.设置默认属性
        name: 'ww'
    }
    constructor(props) {
        super(props);
        this.state = { count: 0 };//1.执行构造函数，设置初始状态
    }
    render() {
        return (
            <div>
                <p>{this.state.count}</p>
                <button onClick={this.handleClick}>+</button>
                <hr />
                <ChildCounter count={this.state.count} /> 
                
            </div>
        )
    }
    //当此虚拟DOM已经被挂载到真实DOM中之后就会执行componentDidMount,这个时候才能获得真实DOM元素
    componentDidMount() {
        console.log('4.componentDidMount 组件挂载完成后');
    }
}

class ChildCounter extends React.Component {
    state = {
        name:"wx",
    }
     //每当状态、属性变更的时候会插此方法。可以通过最新的属性得到最新的状态
    //nextProps新的属性对象 prevState代表老的状态对象
    static getDerivedStateFromProps(nextProps,prevState){
        if(nextProps.count % 2 == 0){
            return  {count:nextProps.count*2}
        }else{
            return  {count:nextProps.count*3}
        }
    }
    render() {
        return (
            <div>{this.state.count}</div>
        )
    }
}
ReactDOM.render(<Counter  />, document.getElementById('root'));

/**
 * 父组件 子组件
 * componentWillMount 先父先子
 * componentDidMount 先父先子
 */


