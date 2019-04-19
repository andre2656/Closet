import React from 'react';
import Stylist from './Stylist';
import axios from 'axios';
import $ from 'jquery';


class MessageNav extends React.Component {
    state = {
        email: '',
        emails: [],
    }
    
    componentDidMount(){
        this.getEmails();
    }
    getEmails = () => {
        axios.get('/api/chat/stylist',{
        }).then((response) => {
            console.log(response)
            this.setState({ emails: response.data });
            this.appendEmails();
        }).catch(function (error) {
            console.log(error);
        });
    }

    appendEmails = () => {
        $('.listOFEmail').empty();
        for (let i= 0; i < this.state.emails.length; i++){
            let button= $('<button>');
            button.attr('id', this.state.emails[i]);
            button.attr('value', this.state.emails[i]);
            button.append(this.state.emails[i]);
            button.addClass('btn')
            button.attr('onClick', this.setEmail)
            $('.listOfEmails').append(button)
        }
    }
    setEmail = (event) => {
        this.setState({email: event.target.value})
    }
    
    render() {
        return (
            <div className='stylistPage'>
                <div className= 'listOfEmails'>
                 {/* append emails into buttons of a tags. onClick= {this.setEmail} //sets email to whatever email clicked...  */}
                </div>

               <Stylist
                email= {this.state.email}
               />
            </div>
        )
    }
}
export default MessageNav;