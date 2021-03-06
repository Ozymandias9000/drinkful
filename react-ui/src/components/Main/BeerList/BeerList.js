import React, { Component } from "react";
import "./BeerList.styl";
import BeerCard from "./BeerCard/BeerCard";

class BeerList extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let { beers, mainState } = this.props;

    return (
      <div className="beer-list--container">
        {beers.map((beer, index) => (
          <BeerCard beer={beer} key={index} mainState={mainState} />
        ))}
      </div>
    );
  }
}

export default BeerList;
