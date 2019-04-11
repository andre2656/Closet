import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from "./logo.svg";
import './App.css'
import MarketingSite from "./components/MarketingSite/MarketingSite"
import SignUp from './components/SignUp/SignUp';
import StyleApp from './components/StyleApp/StyleApp';
import SettingsForm from './components/StyleApp/SettingsForm/SettingsForm';
import Payment from './components/SignUp/Payment';
import Pinterest from './components/Pinterest/Pinterest';
import IconQuiz from './components/Quizzes/IconQuiz/IconQuiz';
import FashionStyleQuiz from './components/Quizzes/FashionStyleQuiz/FashionStyleQuiz'
import loginController from "./controllers/LoginController"

class App extends Component {

  state = { user: null }

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
      <Router>
        <div>
          <Route exact path="/" component={MarketingSite} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/settings" component={SettingsForm} />
          <Route exact path="/app" component={StyleApp} />
          <Route exact path="/pinterest" component={Pinterest} />
          <Route exact path="/iconq" component={IconQuiz} />
          <Route exact path="/fsq" component={FashionStyleQuiz} />
        </div>
      </Router>
    );
  }
}

export default App;