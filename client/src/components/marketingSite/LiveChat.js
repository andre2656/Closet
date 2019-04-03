import React, { Component } from "react";
import axios from 'axios';
import './MarketingSite.css';

const LiveChat = () => {
    let content = { marginTop: "70px" }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-4" style={content}>
                    <h2>Live Chat With a Stylist</h2>
                    <p>Get all the fashion advice you've ever wanted from the comfort of your home. With a premium account, you can access a live stylist to discuss in app purchases!</p>
                </div>
                <div className="col-md-4">
                    <img id="chat-image" src="images/LiveChat.jpg" />
                </div>
                <div className="col-md-2" />
            </div>
        </div>
    )
}

export default LiveChat;