import React from 'react';
import $ from 'jquery';

let InitialData= [{
    message: 'What can I help you with?',
    user: false, 
    id: 100,
    email: 'staf@staf.com'
}, {
        message: 'Chat is being loaded',
        user: false,
        id: 100,
        email: 'staf@staf.com'
    }

]
class MessageList extends React.Component {
state= {
    messages: [],
}
componentDidMount (){
    this.renderMessages();
}
componentWillReceiveProps = (props) => {
    this.setState({messages: []})
    this.setState({messages: this.props.messages},
        () => {
            console.log(this.state.messages)
            this.renderMessages();
         })
   
       
}
renderMessages = () => {
    let text = $('<li>');
    let emailDiv = $('<div>');
    let messageDiv = $('<div>');
        // text.empty();
        // emailDiv.empty();
        // messageDiv.empty();
        $('.message-list').empty();
    for (let i= 0; i < this.state.messages.length; i++){
        console.log(this.state.messages[i])
        
        emailDiv.text(this.state.messages[i].email);
        messageDiv.text(this.state.messages[i].message);


        text.append(messageDiv);
        text.append(emailDiv);

        if (!this.state.messages[i].user){
            text.attr('id', 'stylistText');
        } else if (this.state.messages[i]){
            text.attr('id', 'userText');
        }
        

        
        $('.message-list').append(text);

    }
}
    render() {
        return (
            <div>
                <ul className="message-list"></ul>
            </div>
            
        )
    }
}
export default MessageList;