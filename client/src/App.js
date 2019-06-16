import React, { Component } from 'react';
import axios from 'axios';
<<<<<<< HEAD
import MyNavbar from './navbar/MyNavbar.js';
import Routes from './routes/Routes.js';
=======
>>>>>>> master
import MessageList from './messageList/MessageList.js';

class App extends Component {
    constructor() {
        super()
        this.state = {
            username: '', 
            password: '', 
            chat: ''
        }
    }

    getUser() {
        axios.get("/chat-app").then(response => {
            console.log(response.data)
        })
    }

    render() {
        return(
            <div className="app-container">
                <MyNavbar />
                <Routes />
            </div>
        )
    }
 }
 
 export default App;