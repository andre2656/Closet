import React from 'react';
import Title from './Title'
import MessageList from './MessagesList'
import SendMessageForm from './SendMessageForm'

class Chat extends React.Component {
    state = {
        messages: '',
    }

    render() {
        return (
            <div className='chatHead'>
                <Title/>
                <MessageList 
                messages= {this.state.messages}
                />
                <SendMessageForm/>
            </div>
        )
    }
}
export default Chat;
