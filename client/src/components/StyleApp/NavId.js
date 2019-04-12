import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';
import loginController from "../../controllers/LoginController"


class NavId extends Component {
    state = {
        user: '',
        loggedIn: true
      }

      logout = event => {
        this.setState({ loggedIn: false });
      }

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
        console.log("setUser", user);
        this.setState({ user: user });
    }

    render() {
        return (
            <div>
                <div className='row' id="navBar">
                    <div className='col-md-5' id="title"><h2>The Closet</h2></div>
                    <div className="col-md-1"/>
                    <div className='col-md-3' id="welcome-text">Welcome { this.state.user ? <div>User: {this.state.user.username}</div> : null }</div>
                    <Link className="sign-out" to="/"><button type="button" className="btn btn-light" id="signout" onClick={this.logout} value="Log out">Log out</button></Link>
                    <div className='col-md-1' />
                </div>
            </div>
        );
    }
};

export default NavId;