import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../NavBar/NavBar';
import {Link} from 'react-router-dom';


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
                        <div className="col-md-4">
                            <h2>Get Started for Free</h2>
                            <p>See clothes as if you tried them on in person! Shop with more confidence and deal with fewer returns.</p>
                            <form class="px-4 py-3">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="" />
                                </div>
                                <Link className="sign-up-for-free" to="/app"><button type="button" className="btn btn-dark">Sign Up for Free</button></Link>
                            </form>
                        </div>

                        <div className="col-md-4">
                            <h2>Level Up With Premium</h2>
                            <p>Get all the same features as a free account, but with access to a stylist who's available to chat at any time!</p>
                            <form class="px-4 py-3">
                                <div class="form-group">
                                    <label for="firstName">First Name</label>
                                    <input type="text" class="form-control" id="firstName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="lastName">Last Name</label>
                                    <input type="text" class="form-control" id="lastName" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="email">Email</label>
                                    <input type="email" class="form-control" id="email" placeholder="" />
                                </div>
                                <div class="form-group">
                                    <label for="password">Password</label>
                                    <input type="password" class="form-control" id="password" placeholder="" />
                                </div>
                                <Link className="unlock-premium" to="/payment"><button type="button" className="btn btn-dark">Unlock Premium</button></Link>
                            </form>
                        </div>
                        <div className="col-md-2" />
                    </div>
                </div>
            </div>
        );
    }
};

export default SignUp;