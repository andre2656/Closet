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
        this.setState({ messages: this.props.messages },
            () => {
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
        let emailText = $('<p>');
        let messageDiv = $('<div>');
        // console.log(this.state.messages[i]);
        
        
        userMessage.text(this.state.messages[i].message);

        
        
        if (!this.state.messages[i].user){
            emailText.text('Your Stylist');
            userMessage.attr('id', 'stylistText');
            emailText.attr('id', 'emailStylistText');
        } else if (this.state.messages[i].user){
            emailText.text(this.state.messages[i].email);
            userMessage.attr('id', 'userText');
            emailText.attr('id', 'emailUserText');
        }
       
        messageDiv.addClass('col-md-12');
        messageDiv.append(userMessage);
        messageDiv.append(emailText);
        
       
        let messageList = $('#message-list')
        messageList.append(messageDiv);
        $("#message-list").scrollTop($("#message-list")[0].scrollHeight);
    }
}
    render() {
        return (
            <div id='message-list' ></div>
        )
    }
}
export default MessageList;