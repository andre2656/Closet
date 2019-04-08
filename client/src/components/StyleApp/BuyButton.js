import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { userInfo } from "os";

class BuyButton extends Component {
    state = {
        enableButton: false
    };

    enableButton = () => {
        const isPremium = User.Premium;
    }

    render() {
        return (
            <div>
                {isPremium
                    ? <img src="images/enabled.png" />
                    : <img src="images/disabled.png" />}
            </div>
        );
    }

};

export default BuyButton;