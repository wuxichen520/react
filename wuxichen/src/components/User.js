import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch, Redirect,Router } from '../react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';

export default function(props){
    return (
       
        <div className="row">
            <div className="col-md-2" style={{float:"left"}}>
                <ul className="nav nav-stack">
                    <li><Link to="/user/list">用户列表</Link></li>
                    <li><Link to="/user/add">新增用户</Link></li>
                </ul>
            </div>
            <div className="" style={{float:"left"}}>
             
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                
            </div>
        </div>
       
    )
}