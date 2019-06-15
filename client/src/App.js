import React, { Component } from 'react';
import axios from 'axios';
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
            <>
                <MessageList />
                <button onClick={this.getUser}>Submit</button>
            </>
        )
    }
 }
 
 export default App