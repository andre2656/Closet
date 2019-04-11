import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Payment.css';

class Payment extends Component {
    state = {
        cardholderName: '',
        cvv: '',
        cardNumber: '',
        month: '',
        year: ''
    };

    handleCardholderName = (event) => {
        this.setState({ cardholderName: event.target.value })
    }
    handleCvv = (event) => {
        this.setState({ cvv: event.target.value })
    }
    handleCardNumber = (event) => {
        this.setState({ cardNumber: event.target.value })
    }
    handleMonth = (event) => {
        this.setState({ month: event.target.value })
    }
    handleYear = (event) => {
        this.setState({ year: event.target.value })
    }

    submitPayment() {
        console.log("submitting payment");
        axios.post('api/pay/payments', {
            cardholderName: this.state.cardholderName,
            cvv: this.state.cvv,
            cardNumber: this.state.cardNumber,
            month: this.state.month,
            year: this.state.year,
        })
            .then(function (response) {
                console.log(response);
                window.location.pathname="/settings";
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    InputValidation = (event) => {
        console.log(this.state);
        event.preventDefault();
        if (this.state.cardholderName === '' || this.state.cvv === '' || this.state.cardNumber === '' || this.state.month === '' || this.state.year === '') {
            alert("Please fill out all fields before submitting.");
        } else {
            console.log("submitting payment details");
            this.submitPayment();
        }
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2 className="col-md-12">Confirm Purchase</h2>
                </div>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-4">
                        <input type="email" className="form-control payment-input" id="name" placeholder="Cardholder Name" onChange={this.handleCardholderName}></input>
                    </div>
                    <div className="col-md-2">
                        <input type="text" className="form-control payment-input" id="cvv" placeholder="CVV" onChange={this.handleCvv}></input>
                    </div>
                    <div className="col-md-3" />
                </div>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-6">
                        <input type="password" className="form-control payment-input" id="number" placeholder="Card Number" onChange={this.handleCardNumber}></input>
                    </div>
                    <div className="col-md-3" />
                </div>
                <div className="row">
                    <div className="col-md-3" />
                    <div className="col-md-1">
                        <input type="text" className="form-control payment-input" id="month" placeholder="MM" onChange={this.handleMonth}></input>
                    </div>
                    <div className="col-md-1">
                        <input type="text" className="form-control payment-input" id="year" placeholder="YY" onChange={this.handleYear}></input>
                    </div>
                    <div className="col-md-1" />
                    <img className="col-md-1" className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg" width={65} height={37} />
                    <img className="col-md-1" className="card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" width={55} height={39} />
                    <img className="col-md-1" className="card-image" src="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png" width={65} height={50} />
                    <div className="col-md-3" />
                </div>
                <div className="row">
                    <div className="col-md-8" />
                    <Link className="sign-up-for-free col-md-1" to="/settings"><button type="button" className="btn btn-dark" id="payment-btn" onClick={this.InputValidation}>Submit</button></Link>
                </div>
            </div>
        )
    }
}

export default Payment;