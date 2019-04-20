import React from 'react';
import Header from './MessageNav';
import SendMessageForm from './SendMessageForm';
import axios from 'axios'


class StylistPage extends React.Component {
  
    render() {
        return (
            <div className='stylistPage'>
                <Header/>
                <SendMessageForm
                email= {this.props.email}
                />
            </div>
        )
    }
}
export default StylistPage;
