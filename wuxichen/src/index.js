

import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

ReactDOM.render(
    // router  传递history.location 以及 history.push  
    <Router>    
        {/* 调用history.push 将to的参数传入 */}
        <Link to="/">Home</Link>   
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
        <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/profile" component={Profile}></Route>
         
            <Redirect from="/home" to="/"></Redirect>
        </Switch>
       
    </Router>
,document.getElementById("root"))