import React, { Component } from "react";
import logo from "./logo.svg";
import MarketingSite from "./components/MarketingSite/MarketingSite"
import "./App.css";

/**
 * The main App component that holds our whole React app
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        <MarketingSite/>
      </div>
    );
  }
}

export default App;