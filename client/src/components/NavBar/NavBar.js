import React, { Component } from "react";
import { Link, Redirect, withRouter } from 'react-router-dom';
import './NavBar.css';
import loginController from '../../controllers/LoginController';


class NavBar extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    loggedIn: false
  }
  login = (e) => {
    e.preventDefault();

    loginController.login(this.state.email, this.state.password, (err, user) => {
    
      if (err) {
        this.setState({ error: err });
      } else {
        this.props.history.push("/app");
      }
    });
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  InputValidation = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.email === '' || this.state.password === '') {
      alert("Please fill out your email and password to log in.");
    } else {
      console.log("Trying to log in");
      // this.SignIn();
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/app" />;
    }
    return (
      <form onSubmit= {this.login}>
        <div className="form-group" id="sign-up-form">
          <div className="row">
            <div className="col-md-7" />
            <div className="col-md-1.5"><input type="email" className="form-control login-input" id="login-email" placeholder="Email" name="email" onChange={this.inputChanged} /></div>
            <div className="col-md-1.5"><input type="password" className="form-control login-input" id="login-password" placeholder="Password" name="password" onChange={this.inputChanged} /></div>
            <Link className="sign-in" ><button type="button" id="btn-id" className="btn btn-dark" onClick={this.login} value="Login">Sign in</button></Link>
            {this.state.error && <div>{this.state.error}</div>}
            <div className="col-md-2" />
          </div>
        </div>
      </form>

    );
  }
};

export default withRouter(NavBar);