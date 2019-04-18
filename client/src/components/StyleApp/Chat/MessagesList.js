import React from 'react';


class MessageList extends React.Component {
    render() {
        return (
            <div>
                <ul className="message-list">
                    {/* {this.props.messages.map(message => {
                        return (
                            <li key={message.senderId}>
                                <div>
                                    {message.senderId}
                                </div>
                                <div>
                                    {message.text}
                                </div>
                            </li>
                        )
                    })} */}
                    <br/>
                    <br />
                    <br />
                    <br />
                    <p> Body will be Displayed here </p>
                    <br />
                    <br />
                    <br />
                    <br />
                </ul>
            </div>
            
        )
    }
}
export default MessageList;