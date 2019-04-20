import React from 'react';
import $ from 'jquery';
import './Chat.css';

class MessageList extends React.Component {

    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { messages: [] };
    }

componentDidMount (){
    this.renderMessages();
}

componentDidUpdate = (prevProps) => {
    if (prevProps.messages.length !== this.props.messages.length){
        console.log('component did update')
        this.setState({ messages: this.props.messages },
            () => {
                console.log(this.state.messages)
                this.renderMessages();
            })  
    }
}


renderMessages = () => {
    
        // text.empty();
        // emailDiv.empty();
        // messageDiv.empty();
        $('#message-list').empty();
    for (let i= 0; i < this.state.messages.length; i++){
       
        let userMessage = $('<p>');
        let emailDiv = $('<div>');
        let messageDiv = $('<div>');
        // console.log(this.state.messages[i]);
        
        emailDiv.text(this.state.messages[i].email);
        messageDiv.text(this.state.messages[i].message);

        userMessage.addClass('col-md-12');
        userMessage.append(messageDiv);
        userMessage.append(emailDiv);

        if (!this.state.messages[i].user){
            userMessage.attr('id', 'stylistText');
        } else if (this.state.messages[i].user){
            userMessage.attr('id', '40userText');
        }
        

        
        $('#message-list').append(userMessage);

    }
}
    render() {
        return (
            <div id='message-list' >
                
            </div>
            
        )
    }
}
export default MessageList;