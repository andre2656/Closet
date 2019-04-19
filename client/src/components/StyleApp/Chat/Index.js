import React from 'react';
import Title from './Title'
import SendMessageForm from './SendMessageForm'

class Chat extends React.Component {
    state = {
        messages: '',
    }

    render() {
        return (
            <div className='chatHead'>
                <Title/>
                <SendMessageForm/>
            </div>
        )
    }
}
export default Chat;
