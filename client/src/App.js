import React, { Component } from 'react';
import axios from 'axios';

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
                <button onClick={this.getUser}>Submit</button>
            </>
        )
    }
 }
 
 export default App