import React from 'react';
import Stylist from './Stylist';
import axios from 'axios';
import $ from 'jquery';


class MessageNav extends React.Component {
    state = {
        email: 'sample@email.com',
        emails: [],
    }

    componentDidMount() {
        this.getEmails();
    }
    getEmails = () => {
        axios.get('/api/chat/stylist', {
        }).then((response) => {
            // console.log(response)
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
        console.log(filteredEmails)
        this.setState({emails: filteredEmails})
        for (let t = 0; t < filteredEmails.length; t++) {
            let button = $('<button>');
            button.attr('id', filteredEmails[t]);
            button.attr('value', filteredEmails[t]);
            button.append(filteredEmails[t]);
            button.addClass('btn')
            button.filter()
            // button.attr(onClick, {this.setEmail})
            $('.listOfEmails').append(button)
        }
        $('button').on('click', (event) => {
            event.preventDefault()
            console.log(event.target.value)
            this.setState({email: event.target.value}
                )
        })
    }
    
            

    render() {
        return (
            <div className='stylistPage'>
                <div className='listOfEmails'>
                    {/* append emails into buttons of a tags. onClick= {this.setEmail} //sets email to whatever email clicked...  */}
                </div>

                {/* <Stylist
                email= {this.state.email}
               /> */}
            </div>
        )
    }
}
export default MessageNav;