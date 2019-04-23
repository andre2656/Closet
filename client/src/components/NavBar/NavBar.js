import React, { Component } from "react";
import { Redirect, withRouter } from 'react-router-dom';
import './NavBar.css';
import loginController from '../../controllers/LoginController';
import { Modal } from 'react-bootstrap';

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
        this.handleShow()
      } else {
        this.props.history.push("/app");
      }
    });
  }

  inputChanged = event => {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleClose = () => {
    this.setState({ show: false });
  }
  handleShow = () => {
    this.setState({ show: true });
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
              <div className="col-md-2" />
            </div>
          </div>
        </form>
        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Body>
              <div>
                <h5 className='row'>Missing or invalid credentials. Cannot log in.</h5>
              </div>
            </Modal.Body>
          </Modal.Header>
        </Modal>
      </div>
    );
  }
};

export default withRouter(NavBar);