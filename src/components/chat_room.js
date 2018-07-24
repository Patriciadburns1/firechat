import React from 'react';
import db from '../hoc/db';
import MessageInput from './message_input'; 

const ChatRoom = props => {
    // console.log('chat room props', props);
    const messageElements = props.messages.map(msg => {
        return (
        <li key={msg.id} className="collection-item row">
            <div className='col s1'>
                <b style={{
                    color: msg.color
                }} >{msg.name}: </b>
            </div>
            <div className='col s11'>
                {msg.message}
            </div>
        </li>
        );
    });
    return (
        <div>
            <h1 className='center'> Chatroom</h1>
            <MessageInput send={props.sendMessage}/> 
            <ul className="collection">
                {messageElements}
            </ul> 
        </div>
    )
}

export default db(ChatRoom); 