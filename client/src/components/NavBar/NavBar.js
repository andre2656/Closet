import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
  state = {
    email: '',
    password: ''
  };

  handleEmail = (event) => {
    this.setState({ email: event.target.value })
  }
  handlePassword = (event) => {
    this.setState({ password: event.target.value })
  }

  // SignIn() {
  //   console.log("logging in");
  //   axios.post('api/set/log-in', {
  //     email: this.state.email,
  //     password: this.state.password
  //   })
  //     .then(function (response) {
  //       console.log(response);
  //       window.location.pathname = "/app";
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     });
  // }

  InputValidation = (event) => {
    console.log(this.state);
    event.preventDefault();
    if (this.state.email == '' || this.state.password == '') {
      alert("Please fill out your email and password to log in.");
    } else {
      console.log("Trying to log in");
      // this.SignIn();
    }
  }

  render() {
    return (
      <form>
        <div className="form-group" id="sign-up-form">
          <div className="row">
            <div className="col-md-7" />
            <div className="col-md-1.5"><input type="email" className="form-control login-input" id="login-email" placeholder="Email"  onChange={this.handleEmail}/></div>
            <div className="col-md-1.5"><input type="password" className="form-control login-input" id="login-password" placeholder="Password"  onChange={this.handlePassword}/></div>
            <Link className="sign-in" to="/app"><button type="button" id="btn-id" className="btn btn-dark" onClick={this.InputValidation}>Sign in</button></Link>
            <div className="col-md-2" />
          </div>
        </div>
      </form>

    );
  }
};

export default NavBar;