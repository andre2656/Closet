import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { userInfo } from "os";

class BuyButton extends Component {
    state = {
        enableButton: false
    };

    enableButton = () => {
        const isPremium = this.User.premium;
    }

    render() {
        return (
            <div>
                {isPremium
                    ? <img src="images/enabled-buy-button.png" />
                    : <img src="images/disabled-buy-button.png" />}
            </div>
        );
    }

};

export default BuyButton;