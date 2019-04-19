import React from 'react';
import Header from './MessageNav';
import SendMessageForm from './SendMessageForm';
import axios from 'axios'


class StylistPage extends React.Component {
    constructor(props) {
        super(props);
        // Don't call this.setState() here!
        this.state = { 
            email: this.props.email,
        };
    }
    render() {
        return (
            <div className='stylistPage'>
                <Header/>
                <SendMessageForm
                email= {this.state.email}
                />
            </div>
        )
    }
}
export default StylistPage;
