import React, { Component } from "react";
import axios from 'axios';
import {Link} from 'react-router-dom';


const GetStarted = () => {
    let content = { marginTop: "80px" }
    let padding = { paddingBottom: "60px" }
    return (
        <div className="container">
            <div className="row" style={content}>
                <div className="col-md-2" />
                <div className="col-md-8">
                    <h2>Get Started Today</h2>
                    <p>A more fashionable closet is a few clicks away. Begin up for free to access recommendations built for you and love your wardrobe.</p>
                    <br />
                </div>
                <div className="col-md-2" />
            </div>
            <div className="row">
                <div className="col-md-2" />
                <div className="col-md-8">
                <Link className="get-started-now" to="/sign-up"><button type="button" className="btn btn-dark">Sign Up Today</button></Link>
                </div>
                <div className="col-md-2" style={padding}/>
            </div>
        </div>
    )
}

export default GetStarted;
