import React from 'react';
import axios from 'axios';
import MessageList from './MessageList';

class SendMessageFrom extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = {
            email: '',
            user: false,
            message: '',
            messages: []
        };
    }

    messageChanged = (event) => {
        this.setState({ message: event.target.value });
    }

    submitClicked = () => {
        this.sendMessage();
        this.setState({ message: '' });
    }
    componentDidUpdate = (prevProps) => {
        if (prevProps.email !== this.props.email) {
            this.setState({ email: this.props.email },
                () => {
                    console.log(this.state.email)
                    this.getMessages()
                })
        }
    }

    sendMessage = () => {
        console.log('send messgae');
        axios.post('/api/chat/send', {
            email: this.state.email,
            message: this.state.message,
            user: this.state.user
        }).then((response) => {
            this.setState({ messages: response.data });
            this.setState({ message: '' })
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
            <div style= {{ marginLeft: '20%', width: '80%' }}>
                <MessageList messages={this.state.messages}/>
                <div className='row col-md-12' >
                    <textarea id='chatInput' style={{ width: '80%', height: '100px' }} type="text" onChange={this.messageChanged} value={this.state.message} />
                    <a onClick={this.submitClicked} type='submit' className="" style={{ width: '0px', height: '0px'}}><label id='chatSubmit' style={{ backgroundImage: 'url(images/sendButton.jpg)', backgroundSize: '40px 40px', backgroundPosition: 'center center' }}></label></a>
                </div>
            </div>
        )
    }
}
export default SendMessageFrom;