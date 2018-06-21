import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./BeerCard.styl";

class BeerCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isHearted: false,
      hollowUrl:
        "https://upload.wikimedia.org/wikipedia/commons/5/52/Heart_icon_red_hollow.svg",
      fullUrl:
        "https://upload.wikimedia.org/wikipedia/commons/4/42/Love_Heart_SVG.svg"
    };
  }

  componentDidMount() {
    const beer = JSON.stringify(this.props.beer);
    localStorage[`${beer}`] === "hearted" ? this.heartBeer() : false;
  }

  heartBeer = () => {
    this.setState(
      prevState => ({
        isHearted: !prevState.isHearted
      }),
      // Executed as callback to await pending setState update
      () => {
        this.state.isHearted
          ? localStorage.setItem(JSON.stringify(this.props.beer), "hearted")
          : localStorage.removeItem(JSON.stringify(this.props.beer));
      }
    );
  };

  render() {
    const { name, brewery, beerHref, breweryHref } = this.props.beer;
    const { mainState } = this.props;

    if (!name || !brewery) return null;

    return (
      <div className="beer-card" tabIndex="0">
        <img
          src={this.state.isHearted ? this.state.fullUrl : this.state.hollowUrl}
          alt="heart"
          onClick={this.heartBeer}
        />
        <Link
          to={{
            pathname: `/beers${beerHref}`,
            state: { name, brewery, beerHref, breweryHref, mainState }
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
