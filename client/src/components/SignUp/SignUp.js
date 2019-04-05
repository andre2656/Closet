import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import { Link } from 'react-router-dom';
import './SignUp.css';


class SignUp extends Component {
    state = {
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    };
    render() {
        return (
            <div>
                <NavBar />
                <div className="container">
                    <div className="row">
                        <div className="col-md-2" />
                        <div className="col-md-8">
                            <h2>Get Started for Free or Level Up With Premium</h2>
                            <p>With a free Closet account, you can take quizzes and access personalized fashion pins to help cultivate your perfect look. With premium, you enjoy all the great features of a free account, but with access to a stylist who's available to chat at any time along with buy-now buttons to make in-app purchases!</p>
                            <br />
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label className="sign-up-label" for="firstName">First Name</label>
                                    <input type="text" className="form-control sign-up-input" id="firstName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label className="sign-up-label" for="lastName">Last Name</label>
                                    <input type="text" className="form-control sign-up-input" id="lastName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label className="sign-up-label" for="email">Email</label>
                                    <input type="email" className="form-control sign-up-input" id="email" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label className="sign-up-label" for="password">Password</label>
                                    <input type="password" className="form-control sign-up-input" id="password" placeholder="" />
                                </div>
                                <div className="col-md-2" />
                                <br />
                                <div className="row">
                                    <div className="col-md-2" />
                                    <div className="col-md-4"><Link className="sign-up-for-free" to="/settings"><button type="button" className="btn btn-dark sign-up-button">Sign Up for Free</button></Link></div>
                                    <div className="col-md-4"><Link className="unlock-premium" to="/payment"><button type="button" className="btn btn-dark sign-up-button">Unlock Premium</button></Link></div>
                                    <div className="col-md-2" />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
};

export default SignUp;