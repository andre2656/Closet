import React, { Component } from "react";
import { Link } from 'react-router-dom';
import { userInfo } from "os";

class BuyButton extends Component {
  EnabledButton = (props) => {
    return <img src="images/enabled-buy-button.png" />
  }

  DisabledButton = (props) => {
      return <img src="images/disabled-buy-button.png" />
  }

  ButtonType = (props) => {
      const isPremium = props.User.premium;
      if (isPremium) {
          return <EnabledButton/>
      }
        return <DisabledButton/>
  }

    render() {
        return (
            <div>
                <ButtonType/>
            </div>
        );
    }

};

export default BuyButton;