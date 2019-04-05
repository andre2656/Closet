import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavBar.css';


class NavBar extends Component {
  state = {
    Email: '',
    Password: ''
  };
  render() {
    return (
      <form>
        <div className="form-group" id="sign-up-form">
          <div className="row">
            <div className="col-md-7" />
            <div className="col-md-1.5"><input type="email" className="form-control login-input" id="login-email" placeholder="Email" /></div>
            <div className="col-md-1.5"><input type="password" className="form-control login-input" id="login-password" placeholder="Password" /></div>
            <Link className="sign-in" to="/app"><button type="button" id="btn-id" className="btn btn-dark">Sign in</button></Link>
            <div className="col-md-2" />
          </div>
        </div>
      </form>

    );
  }
};

export default NavBar;