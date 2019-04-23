import React from 'react';
import SendMessageForm from './SendMessageForm';

class Chat extends React.Component {
    state = {
        messages: '',
    }

    render() {
        return (
            <div className='chatHead'>
                <SendMessageForm/>
            </div>
        )
    }
}
export default Chat;
