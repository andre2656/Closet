import React from 'react';
import axios from 'axios';
import MessageList from './MessageList';

class SendMessageFrom extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            email: props.email,
            user: false,
            message: '',
            messages: []
        };
    }
    componentDidMount() {
        this.getMessages();
    }

    messageChanged = (event) => {
        this.setState({ message: event.target.value });
    }

    submitClicked = () => {
        this.sendMessage();
        this.setState({ message: '' });
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
                <MessageList
                    messages={this.state.messages}
                />
                <div className='col-md-12'>
                    <input id='chatInput' style={{ marginRight: "5px" }} type="text" onChange={this.messageChanged} value={this.state.message} />
                    <button onClick={this.submitClicked} type='submit' className="btn btn-dark btn-file">Send</button>
                </div>

            </div>

        )
    }
}
export default SendMessageFrom;