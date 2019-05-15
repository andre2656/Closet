import React, { Component } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Payment.css';
import loginController from "../../controllers/LoginController"
import { Modal } from 'react-bootstrap';


class Payment extends Component {
    state = {
        email: '',
        cardholderName: '',
        cvv: '',
        cardNumber: '',
        month: '',
        year: ''
    };

    componentDidMount() {
        console.log("componentDidMount");
        loginController.addUserChangedListener(this.setUser);
        loginController.recheckLogin();
    }

    componentWillUnmount() {
        console.log("WillUnmount");
        loginController.removeUserChangedListener(this.setUser);
    }

    setUser = (user) => {
        this.setState({ email: user.user.email });
    }

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
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }


    submitPayment() {
        console.log("submitting payment");
        axios.post('api/pay/payments', {
            email: this.state.email,
            cardholderName: this.state.cardholderName,
            cvv: this.state.cvv,
            cardNumber: this.state.cardNumber,
            month: this.state.month,
            year: this.state.year,
        })
            .then((response) => {
                this.checkPage(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    checkPage = (response) => {
        axios.get('/api/set/ethnicity', {
            params: {
                email: this.state.email
            }
        }).then(settings => {
            console.log(settings)
            if (settings.data === null) {
                window.location.pathname = "/settings";
            } else {
                window.location.pathname = "/app";
            }
        })
    }

    InputValidation = (event) => {
        console.log(this.state);
        event.preventDefault();
        if (this.state.cardholderName === '' || this.state.cvv === '' || this.state.cardNumber === '' || this.state.month === '' || this.state.year === '') {
            this.handleShow();
        } else {
            this.submitPayment();
        }
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <h2 className="col-md-12">Confirm Purchase</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-4">
                            <input type="name" className="form-control payment-input" id="name" placeholder="Cardholder Name" onChange={this.handleCardholderName}></input>
                        </div>
                        <div className="col-md-2">
                            <input type="text" className="form-control payment-input" id="cvv" placeholder="CVV" onChange={this.handleCvv}></input>
                        </div>
                        <div className="col-md-3" />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-6">
                            <input type="password" className="form-control payment-input" id="number" placeholder="Card Number" onChange={this.handleCardNumber}></input>
                        </div>
                        <div className="col-md-3" />
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-3" />
                        <div className="col-md-1">
                            <input type="text" className="form-control payment-input" id="month" placeholder="MM" onChange={this.handleMonth}></input>
                        </div>
                        <div className="col-md-1">
                            <input type="text" className="form-control payment-input" id="year" placeholder="YY" onChange={this.handleYear}></input>
                        </div>
                        <div className="col-md-1" />

                        <img className="col-md-1 card-image" id="visa" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Former_Visa_%28company%29_logo.svg" width={60} height={37} alt='Visa' />
                        <img className="col-md-1 card-image" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" width={45} height={39} alt='Mastercard' />
                        <img className="col-md-1 card-image" src="https://cdn2.iconfinder.com/data/icons/credit-cards-6/156/american_express-512.png" width={60} height={50} alt='American-Express' />
                        <div className="col-md-3" />

                    </div>
                    <div className="row">
                        <div className="col-md-8" />
                        <Link className="sign-up-for-free col-md-1" to="/settings"><button type="button" className="btn btn-dark" id="payment-btn" onClick={this.InputValidation}>Submit</button></Link>
                    </div>
                </div>
                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Body>
                            <div>
                                <h5 className='row'>Please fill out all fields before submitting.</h5>
                            </div>
                        </Modal.Body>
                    </Modal.Header>
                </Modal>
            </div>
        )
    }
}

export default Payment;