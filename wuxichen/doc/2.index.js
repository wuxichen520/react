
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * 定义组件
 * 1.函数式
 * 2.类
 * 返回的是一个React的顶级元素
 * 
 * React 是如何渲染的
 * 1.把所有的属性组合成一个对象
 * 2.吧属性对象作为参数传给函数组合
 * 3.函数组件会返回React函数
 * 4.然后由ReactDOM.render方法把虚拟DOM（React元素）转为真实元素并且插入页面中
 */

//  function Welcome(props){
//      return (
//          <h1>hello {props.name} <span>world</span></h1>
//      )
//  }

/**
 * 类
 * React 是如何渲染的
 * 1.收集props对象
 * 2.把props对象传递给Welcome类的构造函数  new Welcome(props) 然后获取Welcome的实例
 * 3.调用实例上的render方法进行渲染，获得返回的React元素
 * 4.然后把此元素渲染到页面上
 */
class Welcome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return   (
                      <h1>hello {this.props.name} <span>world</span></h1>
                 )
    }
}
 ReactDOM.render(<Welcome name='ww'></Welcome>,document.getElementById("root"))





