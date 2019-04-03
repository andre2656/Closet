import React, { Component } from "react";
import axios from 'axios';

const GetStarted = () => {
    let content = { marginTop: "80px" }
    return <div className="container">
        <div className="row">
            <div className="col-md-2" />
            <div className="col-md-8">
                <div className="row" style={content}>
                    <h2>Get Started Today</h2>
                    <p>A more fashionable closet is a few clicks away. Begin up for free to access recommendations built for you and love your wardrobe.</p>
                </div>
                <div className="row">
                <button type="button" className="col-md-5 btn btn-dark">Get started with a FREE account</button>
                <div className="col-md-2"/>
                <button type="button" className="col-md-5 btn btn-dark">Upgrade to Premium Styling</button>
                </div>
            </div>

            <div className="col-md-2" />
        </div>
    </div >
}

export default GetStarted