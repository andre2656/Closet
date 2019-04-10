import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { userInfo } from "os";

let EnabledButton = (props) => {
    return <img src="images/enabled-buy-button.png" />
}

let DisabledButton = (props) => {
    return <img src="images/disabled-buy-button.png" />
}

let ButtonType = (props) => {
    isPremium ? <EnabledButton /> : <DisabledButton />
}

class BuyButton extends Component {
    render(props) {
        return (
            <div>
                <ButtonType isPremium={props.User.premium} />
            </div>
        );
    }

};

export default BuyButton;