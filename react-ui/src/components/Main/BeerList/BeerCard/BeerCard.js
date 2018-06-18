import React, { Component } from "react";
import "./BeerCard.styl";

class BeerCard extends Component {
  render() {
    let { name, brewery, href } = this.props.beer;
    if (!name || !brewery) return null;

    return (
      <div className="beer-card" tabIndex="0">
        <a
          href={`https://www.beeradvocate.com` + href}
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <img
          src={image_url}
          alt="beer"
          style={{
            height: 200 + "px",
            width: "auto",
            paddingRight: 20 + "px"
          }}
        /> */}
          <div>
            <h4>{name}</h4>
            <h6>{brewery}</h6>
            {/* <p>ABV: {abv}%</p>
          <p>IBU : {ibu}</p> */}
          </div>
        </a>
      </div>
    );
  }
}

export default BeerCard;
