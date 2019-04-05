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
      <div>

        <form className="px-4 py-3">
          <div className="form-group">
            <div className="row">
              <div className="col-md-8" />
              <div className="col-md-1"><input type="email" className="form-control" id="login-email" placeholder="Email" /></div>
              <div className="col-md-1"><input type="password" className="form-control" id="login-password" placeholder="Password" /></div>
              <Link className="sign-in" to="/app"><button type="button" className="btn btn-dark">Sign in</button></Link>
              <div className="col-md-2" />
            </div>
          </div>
        </form>
      </div>
    );
  }
};

export default NavBar;