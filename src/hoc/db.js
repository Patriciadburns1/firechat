import React, { Component } from 'react';
import firebase from '../firebase';
import { connect } from 'react-redux';
import { updateChatMessages } from '../actions';


export default (WrappedComponent) => {
    class Db extends Component {
        dbRef = firebase.collection('chat-log')

        componentDidMount() {
           this.dbRef.orderBy('timestamp').onSnapshot(this.props.updateChatMessages);
        }
        sendMessage = (msg) => {
            console.log('from db hoc', msg); 
            const newMsg ={
                name: 'Jake',
                message: msg,
                timestamp: new Date().getTime()
            }; 
            this.dbRef.add(newMsg); 
        }

        render() {
            return <WrappedComponent {...this.props} sendMessage={this.sendMessage}/>;
        }
    }
    function mapStateToProps(state) {
        return {
            messages: state.chat.messages
        }
    }
    return connect(mapStateToProps, { updateChatMessages })(Db);
}
