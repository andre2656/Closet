import React from 'react'
import loginController from "../../../controllers/LoginController"
import axios from 'axios'
import MessageList from './MessagesList'

class SendMessageFrom extends React.Component {

    state = {
        user: true,
        email: '',
        message: '',
        messages: []
    }
    componentDidMount() {
        loginController.addUserChangedListener(this.setUser);
        loginController.recheckLogin();
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
        this.getMessages();
    }


    sendMessage = () => {
        axios.post('/api/chat/send', {
            email: this.state.email,
            message: this.state.message,
            user: this.state.user
        })
            .then((response) => {
                console.log(response);
                this.getMessages();
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
                <MessageList
                    messages={this.state.messages}
                />
                <input id='chatInput' style={{ marginRight: "5px" }} type="text" onChange={this.messageChanged} value={this.state.message} />
                <button onClick={this.submitClicked} type='submit' className="btn btn-dark btn-file">Send</button>
            </div>

        )
    }
}
export default SendMessageFrom;