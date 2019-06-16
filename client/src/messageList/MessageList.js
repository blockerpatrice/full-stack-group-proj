import React, { Component } from 'react';
import './stylesmessagelist.css';

const DUMMY_DATA = [
    {
        senderId: 'Perborgen',
        text: "What's up?"
    },
    {
        senderId: 'Janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'Perborgen',
        text: 'Good to hear! I am great as well'
    }
]

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    render() {
        return (
            <div className="message-list">
                {DUMMY_DATA.map((message, index) => {
                    return (
                        <div className="message">
                            <div className="message-username">{message.senderId}:</div>
                            <div className="message-text">{message.text}</div>
                        </div>
                    )
                })}
            </div>
        )
    }
}
 
export default MessageList;
