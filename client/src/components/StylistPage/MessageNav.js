import React from 'react';
import axios from 'axios';
import $ from 'jquery';
import SendMessageForm from './SendMessageForm';

class MessageNav extends React.Component {
    state = {
        email: 'sample@email.com',
        emails: [],
        filteredEmails: [],
    }

    componentDidMount() {
        this.getEmails();
    }
    getEmails = () => {
        axios.get('/api/chat/stylist', {
        }).then((response) => {
            this.setState({ emails: response.data },
                () => {
                    this.appendEmails();
                });

        }).catch(function (error) {
            console.log(error);
        });
    }

    appendEmails = () => {
        //     $('.listOFEmail').empty();
        let emailsArray = []
        for (let i = 0; i < this.state.emails.length; i++) {
            emailsArray.push(this.state.emails[i].email);
        }

        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        let filteredEmails = emailsArray.filter(onlyUnique)
        this.setState({ filteredEmails: filteredEmails })

        for (let t = 0; t < filteredEmails.length; t++) {
            let button = $('<button>');
            button.attr('id', filteredEmails[t]);
            button.attr('value', filteredEmails[t]);
            button.append(filteredEmails[t]);
            button.addClass('btn');
            button.filter();
            button.attr('id', 'buttons')
            // button.attr(onClick, {this.setEmail})
            $('.listOfEmails').append(button)
        }
        $('button').click((event) => {
            this.setState({ email: event.target.value },
                () => {
                    this.getMessages()
                })
        })
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
                <div className='stylistPage'>
                    <div className='listOfEmails'></div>
                    <SendMessageForm
                        email={this.state.email}/>
                </div>
            </div>

        )
    }
}
export default MessageNav;