
import React, { Component } from "react";
import axios from 'axios';
import NavBar from '../NavBar';
import Intro from './Intro';
import PopularPins from './PopularPins';
import Quizzes from './Quizzes';
import EasyPurchases from './EasyPurchases';
import LiveChat from './LiveChat';
import GetStarted from './GetStarted';

class marketingSite extends Component {
    state = {
        loggedIn: false
    };
    render() {
        return (
            <div>
                <NavBar/>
                <Intro/>
                <PopularPins/>
                <Quizzes/>
                <EasyPurchases/>
                <LiveChat/>
                <GetStarted/>
            </div>
        );
    }
}

export default marketingSite;