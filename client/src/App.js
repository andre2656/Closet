import React, { Component } from "react";
import MotivationalQuote from "./components/MotivationalQuote";
import logo from "./logo.svg";
import "./App.css";

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>YOU'RE GONNA TURN THIS BAREBONES BOILERPLATE INTO SOMETHING AMAZING!</h2>
        </div>
        <p className="App-intro">
          <MotivationalQuote />
        </p>
      </div>
    );
  }
}

export default App;