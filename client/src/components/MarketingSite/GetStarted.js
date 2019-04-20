import React from "react";
import {Link} from 'react-router-dom';


const GetStarted = () => {
    return (
        <div className="container">
            <div className="row" style={{marginTop: "80px"}}>
                <div className="col-md-1" />
                <div className="col-md-10">
                    <h2>Get Started Today</h2>
                    <p>A more fashionable closet is a few clicks away. Sign up for free to access recommendations built for you, and love your wardrobe.</p>
                    <br />
                </div>
                <div className="col-md-1" />
            </div>
            <div className="row" style={{marginBottom: "60px"}} >
                <div className="col-md-1" />
                <div className="col-md-12">
                    <Link className="get-started-now" to="/sign-up"><button type="button" className="btn btn-dark">Sign Up Today</button></Link>
                </div>
                <div className="col-md-1"/>
            </div>
        </div>
    )
}

export default GetStarted;
