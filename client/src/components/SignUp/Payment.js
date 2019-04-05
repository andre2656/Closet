import React, { Component } from "react";
import axios from 'axios';


const Payment = () => {
    let padding = { paddingBottom: "30px" }
    let content = { marginTop: "70px" }
    return (
        <div className="container">
            <div className="row" style={padding}>
                <h1 className="col-md-12">
                Confirm purchase
                </h1>
            </div>
            <div className="row" style={padding}>
                <div className="col-md-3"/>
                <div className="col-md-4">
                <input type="email" className="form-control" placeholder="Cardholder Name" />
                </div>
                <div className="col-md-2">
                <input type="password" className="form-control" placeholder="CVV" />
                </div>
                <div className="col-md-3"/>                
            </div>
            <div className="row" style={padding}>
                <div className="col-md-3"/>
                <div className="col-md-6">
                <input type="password" className="form-control" placeholder="Card Number" />
                </div>
                <div className="col-md-3"/>                
            </div>
            <div className="row" style={padding}>
                <div className="col-md-3"/>
                <div className="col-md-1">
                <input type="email" className="form-control" placeholder="MM" />
                </div>
                <div className="col-md-1">
                <input type="password" className="form-control" placeholder="YY" />
                </div>
                <div className="col-md-1"/>   
                <img className="col-md-1" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg" width={70} height={37}/>
                <img className="col-md-1" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" width={40} height={39}/>
                <img className="col-md-1" src="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png" width={70} height={50}/>
                <div className="col-md-3"/>                
            </div>
            <div className="row" >
                 <div className="col-md-8"/>
                <button className="col-md-1" type="submit" className="btn btn-dark">Submit</button>
            </div>
            
        </div>
    )
}

export default Payment;