import React from 'react'
import loginController from "../../../controllers/LoginController"
import axios from 'axios'
import MessageList from './MessagesList'
import './Chat.css';

class SendMessageFrom extends React.Component {

    state = {
        user: true,
        email: '',
        message: '',
        messages: []
    }
    componentDidMount() {
        loginController.addUserChangedListener(this.setUser);
    }

    componentWillUnmount() {
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        this.setState({ email: user.user.email },
            () => {
                this.getMessages();
            });
    }

    messageChanged = (event) => {
        this.setState({ message: event.target.value });
    }

    submitClicked = () => { 
        this.sendMessage();
        this.setState({message: ''});
    }


    sendMessage = () => {
        console.log('send messgae');
        axios.post('/api/chat/send', {
            email: this.state.email,
            message: this.state.message,
            user: this.state.user
        }).then((response) => {
                this.setState({ messages: response.data })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    getMessages = () => {
        axios.get('/api/chat/receive/', {
            params: {
                email: this.state.email
            }
        }).then((response) => {
            this.setState({ messages: response.data })
        }).catch(function (error) {
            console.log(error);
        });

    }


    render() {
        return (
            <div>
                <MessageList messages={this.state.messages} />
                <div className= 'row col-md-12'>
                    <textarea id='chatInput' style={{ width: '80%', height: '100px' }} type="text" onChange={this.messageChanged} value={this.state.message} />
                    <button id= 'chatSubmit' onClick={this.submitClicked} type='submit' className="" style= {{backgroundImage: 'url(images/sendButton.jpg)', backgroundSize: '40px 40px', backgroundPosition: 'center center'}}></button>
                </div>
            </div>

        )
    }
}
export default SendMessageFrom;