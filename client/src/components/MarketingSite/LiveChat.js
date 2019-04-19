import React from "react";
import './MarketingSite.css';
import './LiveChat.css';

const LiveChat = () => {
    return (
        <div className="container flex-container">
            <div className="row">
                <div className="col-md-1" />
                <div className="col-md-5" id="chat-text" style={{marginTop: "130px"}}>
                    <h2>Live Chat With a Stylist</h2>
                    <p>Get all the fashion advice you've ever wanted from the comfort of your home with a premium account!</p>
                </div>
                <div className="col-md-5">
                    <img id="chat-image" src="images/stylist.jpg" alt= 'chat' />
                </div>
                <div className="col-md-1" />
            </div>
        </div>
    )
}
export default LiveChat;
