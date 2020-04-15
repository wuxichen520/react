

import React from 'react';
import ReactDOM from 'react-dom';

import {BrowserRouter as Router,Route,Link,Switch,Redirect} from './react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';
import Protected from './components/Protected'; //受保护
import Login from './components/Login';
import MenuLink from "./components/MenuLink";
import NavHeader from "./components/NavHeader";
ReactDOM.render(
    // router  传递history.location 以及 history.push  
    <Router>    
        {/* 调用history.push 将to的参数传入 */}
        {/* <Link to="/">Home</Link>   
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/login">登录</Link> */}
        <NavHeader >nav</NavHeader>
        <MenuLink exact to="/">Home</MenuLink>   
        <MenuLink to="/user">User</MenuLink>
        <MenuLink to="/profile">Profile</MenuLink>
        <MenuLink to="/login">登录</MenuLink>
        <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/login" component={Login}></Route>
            <Route path="/user" component={User}></Route>
            {/* <Route path="/profile" component={Profile}></Route> */}
            <Protected  exact path="/profile" component={Profile}/>  
            <Redirect from="/home" to="/"></Redirect>
        </Switch>
       
    </Router>
,document.getElementById("root"));