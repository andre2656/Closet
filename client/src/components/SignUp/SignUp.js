import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import './SignUp.css';
import { Modal } from 'react-bootstrap';
import validator from 'validator';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        premium: false
    };

    firstNameChanged = (event) => {
        this.setState({ firstName: event.target.value });
    };
    lastNameChanged = (event) => {
        this.setState({ lastName: event.target.value });
    };
    emailChanged = (event) => {
        this.setState({ email: event.target.value });
    }
    passwordChanged = (event) => {
        this.setState({ password: event.target.value });
    }
    handleClose = () => {
        this.setState({ show: false });
    }
    handleShow = () => {
        this.setState({ show: true });
    }
    handleClick = () => {
        if (this.isFormValid()) {
            this.setState({
                premium: false
            },
                this.createAccount
            )
            
        } else {
            this.handleShow();
        }
    }
    handlePremiumClick = () => {
        if (this.isFormValid()) {
            this.setState({
                premium: false
            },
            () => {
                console.log(this.state.premium);
                this.createAccount();
            }
            );
            
            
        } else {
            this.handleShow();
        }
    }
    createAccount() {
        axios.post('api/Users/sign-up', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            password: this.state.password,
            premium: this.state.premium
        })
            .then((response) => {
                console.log(response);
                if (this.state.premium) {
                    window.location.pathname = "/payment";
                }else{
                    window.location.pathname = "/settings";
                }
               
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    isFormValid = () => {
        if (this.state.firstName === '' || this.state.lastName === '' ||  this.state.email === '' || !validator.isEmail(this.state.email) || this.state.password === '') {
            return false;
        } else {
            return true;
        }
    }
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <h2>Get Started for Free or Level Up With Premium</h2>
                            <p>With a free Closet account, you can take quizzes, shop from a photo and access personalized fashion pins to help cultivate your perfect look. With premium, you enjoy all the great features of a free account, but with access to a stylist who's available to chat at any time!</p>
                            <br />
                            <form>
                                <div className="form-group row">
                                    <label name="firstName" className="col-sm-3 col-form-label">First Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="firstName" placeholder="" onChange={this.firstNameChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="lastName" className="col-sm-3 col-form-label" >Last Name</label>
                                    <div className="col-sm-9">
                                        <input type="text" className="form-control" id="lastName" placeholder="" onChange={this.lastNameChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="email" className="col-sm-3 col-form-label">Email</label>
                                    <div className="col-sm-9">
                                        <input type="email" className="form-control" id="email" placeholder="" onChange={this.emailChanged} />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <label name="password" className="col-sm-3 col-form-label">Password</label>
                                    <div className="col-sm-9">
                                        <input type="password" className="form-control" id="password" placeholder="" onChange={this.passwordChanged} />
                                    </div>
                                </div>
                                <div className="col-md-2" />
                                <br />
                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="col-md-4"><button type="button" onClick={this.handleClick} className="btn btn-dark sign-up-button">Sign Up for Free</button></div>
                                    <div className="col-md-4"><button type="button" onClick={this.handlePremiumClick} className="btn btn-dark sign-up-button">Unlock Premium</button></div>
                                    <div className="col-md-2" />
                                </div>
                            </form>
                            <Modal show={this.state.show} onHide={this.handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Body>
                                        <div>
                                            <h5 className='row'>Please fill out all fields and provide a valid email address.</h5>
                                        </div>
                                    </Modal.Body>
                                </Modal.Header>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};
export default SignUp;