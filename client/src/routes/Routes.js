import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../home/Home.js";
import Login from "../login-page/Login.js";
import Signup from "../login-page/Signup.js";
import MessageList from "../messageList/MessageList.js";

export default () =>
    <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/messages" component={MessageList} />
    </Switch>;