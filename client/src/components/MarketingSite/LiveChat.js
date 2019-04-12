import React from "react";
import './MarketingSite.css';
import './LiveChat.css';

const LiveChat = () => {
    let content = { marginTop: "130px" }
    // let padding = { paddingBottom: "50px" }
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-4" id="chat-text" style={content}>
                    <h2>Live Chat With a Stylist</h2>
                    <p>Get all the fashion advice you've ever wanted from the comfort of your home. With a premium account, you can access a live stylist to discuss in app purchases!</p>
                </div>
                <div className="col-md-4">
                    <img id="chat-image" src="images/stylist.jpg" alt= 'chat' />
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    )
}
export default LiveChat;
