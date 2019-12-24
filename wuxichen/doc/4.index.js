
import React from 'react';
import ReactDOM from 'react-dom';


/**
 * 函数式编程
 * 什么叫纯函数
 * 1.在函数体内部不能改变传入的参数
 * 2.相同的参数一定要返回相同的值
 * 3.不能修改作用域变量之外的值
 */
function withdraw(account, amount) {
     account.balance -= amount; //在函数体内部不能改变传入的参数
}
withdraw({ name: '张三', balance: 1000 }, 100);


function sum(a, b) {
    return a + b + Math.random(); //相同的参数一定要返回相同的值
}
sum(1, 2)
sum(2, 3);

function add(a, b) {
    //global.x = 'a'; //不能修改作用域变量之外的值
    let c = 10;//可以修改在函数作用域内声明的变量
    c = 20;
    return a + b + c;
}
//就是纯函数
function Welcome(props) {
    return <div>hello{props}</div>
}





