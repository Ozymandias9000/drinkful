import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BeerCard.styl";

class BeerCard extends Component {
  render() {
    let { name, brewery, beerHref, breweryHref } = this.props.beer;

    if (!name || !brewery) return null;

    return (
      <div className="beer-card" tabIndex="0">
        <Link
          to={{
            pathname: `/beers${beerHref}`,
            state: { name, brewery, beerHref, breweryHref }
          }}
        >
          <div>
            <h4>{name}</h4>
            <h6>{brewery}</h6>
          </div>
        </Link>
      </div>
    );
  }
}

export default BeerCard;
