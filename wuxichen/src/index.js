

import React from 'react';
import ReactDOM from 'react-dom';

import {HashRouter as Router,Route,Link,Switch} from 'react-router-dom';

import Home from './components/Home';
import User from './components/User';
import Profile from './components/Profile';

ReactDOM.render(
    <Router>
        <Link to="/">Home</Link>
        <Link to="/user">User</Link>
        <Link to="/profile">Profile</Link>
        <Switch>
            <Route exact={true} path="/" component={Home}></Route>
            <Route path="/user" component={User}></Route>
            <Route path="/profile" component={Profile}></Route>
            <Route path="/user" component={User}></Route>
        </Switch>
       
    </Router>
,document.getElementById("root"))