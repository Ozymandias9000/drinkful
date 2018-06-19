import React, { Component } from "react";
import "./BeerCard.styl";

class BeerCard extends Component {
  render() {
    let { name, brewery, beerHref, breweryHref } = this.props.beer;
    const { fetchOneBeer } = this.props;

    if (!name || !brewery) return null;

    return (
      <div
        className="beer-card"
        tabIndex="0"
        onClick={() => fetchOneBeer(beerHref)}
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
          <h4>
            {/* <a
              href={`https://www.beeradvocate.com` + beerHref}
              target="_blank"
              rel="noopener noreferrer"
            > */}
            {name}
            {/* </a>{" "} */}
          </h4>
          <h6>
            {/* <a
              href={`https://www.beeradvocate.com` + breweryHref}
              target="_blank"
              rel="noopener noreferrer"
            > */}
            {brewery}
            {/* </a> */}
          </h6>
          {/* <p>ABV: {abv}%</p>
          <p>IBU : {ibu}</p> */}
        </div>
      </div>
    );
  }
}

export default BeerCard;
