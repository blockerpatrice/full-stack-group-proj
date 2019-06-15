import React, { Component } from 'react';
import axios from 'axios';
import MessageList from './messageList/MessageList.js';
import { Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Routes from './routes/Routes.js';

class App extends Component {
    // constructor() {
    //     super()
    //     this.state = {
    //         username: '', 
    //         password: '', 
    //         chat: ''
    //     }
    // }

    getUser() {
        axios.get("/chat-app").then(response => {
            console.log(response.data)
        })
    }

    render() {
        return(
            <div className="app-container">
                <Navbar fluid collapseOnSelect>
                    <Navbar.Header>
                        <Navbar.Brand>
                            <Link to="/">Chatting App</Link>
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                </Navbar>
                <Routes />
                <MessageList />
            </div>
        )
    }
 }
 
 export default App;