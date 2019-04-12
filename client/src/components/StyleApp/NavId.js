import React, { Component } from "react";
import { Link } from 'react-router-dom';
import './NavId.css';


class NavId extends Component {
    state = {
        loggedIn: true
      }

      logout = event => {
        this.setState({ loggedIn: false });
      }

    render() {
        return (
            <div>
                <div className='row' id="navBar">
                    <div className='col-md-5' id="title"><h2>The Closet</h2></div>
                    <div className="col-md-1"/>
                    <div className='col-md-3' id="welcome-text">Welcome {}</div>
                    <Link className="sign-out" to="/"><button type="button" className="btn btn-light" id="signout" onClick={this.logout} value="Log out">Log out</button></Link>
                    <div className='col-md-1' />
                </div>
            </div>
        );
    }
};

export default NavId;