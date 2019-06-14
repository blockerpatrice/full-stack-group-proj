import React, { Component } from 'react';

const DUMMY_DATA = [
    {
        senderId: 'perborgen',
        text: "What's up?"
    },
    {
        senderId: 'janedoe',
        text: 'Great! How about you?'
    },
    {
        senderId: 'perborgen',
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
                        <>
                            <div>{message.senderId}</div>
                            <div>{message.text}</div>
                        </>
                    )
                })}
            </div>
        )
    }
}
 
export default MessageList;