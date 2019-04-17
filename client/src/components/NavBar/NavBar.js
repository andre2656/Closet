import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import './NavBar.css';
import loginController from '../../controllers/LoginController';

class NavBar extends Component {
  state = {
    email: "",
    password: "",
    error: null,
    loggedIn: false,
    user: null
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
      alert("Missing credentials, cannot log in.");
    } else {
      console.log("Trying to log in");
    }
  }

  render() {
    if (this.state.loggedIn) {
      return <Redirect to="/app" />;
    }
    return (
      <div>
        <form onSubmit={this.login}>
          <div className="form-group" id="sign-up-form">
            <div className="row">
              <div className="col-md-7" />
              <div className="col-md-1.5"><input type="email" className="form-control login-input" id="login-email" placeholder="Email" name="email" onChange={this.inputChanged} /></div>
              <div className="col-md-1.5"><input type="password" className="form-control login-input" id="login-password" placeholder="Password" name="password" onChange={this.inputChanged} /></div>
              <button type="button" id="btn-id" className="btn btn-dark" onClick={this.login} value="Login">Sign in</button>
              {this.state.error && <div>{alert(this.state.error)}</div>}
              <div className="col-md-2" />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default withRouter(NavBar);