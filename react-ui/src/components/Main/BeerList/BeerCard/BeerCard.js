import React, { Component } from "react";
import "./BeerCard.styl";

class BeerCard extends Component {
  render() {
    let { name, tagline, image_url, description, abv, ibu } = this.props.beer;
    return (
      <div className="beer-card" tabIndex="0">
        <img
          src={image_url}
          alt="beer"
          style={{
            height: 200 + "px",
            width: "auto",
            paddingRight: 20 + "px"
          }}
        />
        <div>
          <h4>{name}</h4>
          <h5>{tagline}</h5>
          <p>ABV: {abv}%</p>
          <p>IBU : {ibu}</p>
        </div>
      </div>
    );
  }
}

export default BeerCard;
