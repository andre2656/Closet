
import React, { Component } from "react";
import NavBar from '../NavBar/NavBar';
import Intro from './Intro';
import PopularPins from './PopularPins';
import Quizzes from './Quizzes';
import EasyPurchases from './EasyPurchases';
import LiveChat from './LiveChat';
import GetStarted from './GetStarted';
import './MarketingSite.css';

class MarketingSite extends Component {
    state = {
        loggedIn: false
    };
    render() {
        return (
            <div>
                <NavBar />
                <Intro />
                <PopularPins />
                <Quizzes />
                <EasyPurchases />
                <LiveChat />
                <GetStarted />
            </div>
        );
    }
}

export default MarketingSite;