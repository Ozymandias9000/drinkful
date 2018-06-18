import React, { Component } from "react";
import "./BeerList.styl";
import BeerCard from "./BeerCard/BeerCard";

class BeerList extends Component {
  render() {
    let { beers } = this.props;

    if (!beers) {
      return <p>Nothing to show!</p>;
    }

    return (
      <div className="beer-list--container">
        {beers.map((beer, index) => <BeerCard beer={beer} key={index} />)}
      </div>
    );
  }
}

export default BeerList;
