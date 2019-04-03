import React, { Component } from "react";
import axios from 'axios';

/**
 * Displays a random motivatioal quote from our API
 */
class MotivationalQuote extends Component {
  state = {
    quotes: [],
    chosenQuote: "",
    displayedQuote: ""
  };

  /**
   * Picks a random quote and displays it
   */
  pickQuote = () => {
    const numQuotes = this.state.quotes.length;
    const randomQuoteIndex = Math.floor(Math.random() * numQuotes);

    this.setState({
      chosenQuote: this.state.quotes[randomQuoteIndex].quote
    });

    this.animateQuote(50);
  }

  /**
   * Animates the quote into view one character at a time
   */
  animateQuote = (delay) => {
    for (let i = 0; i <= this.state.chosenQuote.length; i++) {
      setTimeout(() => {
        this.setState({ displayedQuote: this.state.chosenQuote.slice(0, i) });
      }, delay * i);
    }
  }

  /**
   * When the component is very first displayed on the webpage
   */
  componentDidMount() {
    axios.get("/api/motivation")
      .then(response => {
        this.setState({ quotes: response.data });

        // Pick a random quote and set the timer to pick another one later
        this.pickQuote();
        setInterval(this.pickQuote, 5000);
      });
  }

  /**
   * Called when the component is first displayed, and when the props or state changes
   */
  render() {
    return (
      <span>
        {this.state.displayedQuote}
      </span>
    );
  }
}

export default MotivationalQuote;