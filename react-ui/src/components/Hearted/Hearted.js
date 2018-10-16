import React, { Component } from "react";
import BeerList from "../Main/BeerList/BeerList";

class Hearted extends Component {
  state = {
    heartedBeers: []
  };

  componentDidMount() {
    const heartedBeers = [];
    for (let i = 0; i < localStorage.length; i++) {
      let beerObj = JSON.parse(localStorage.key(i));
      heartedBeers.push(beerObj);
    }
    this.setState({ heartedBeers });
  }

  render() {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>Hearted Beers</h1>
        <div id="hearted-results">
          {<BeerList beers={this.state.heartedBeers} />}
        </div>
      </div>
    );
  }
}

export default Hearted;
