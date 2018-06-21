import React, { Component } from "react";
import "./Detail.styl";
import Loading from "../Loading/Loading";

class Detail extends Component {
  constructor(props) {
    super(props);
    const { beerHref, brewery, breweryHref, name } = this.props.location.state;
    this.state = {
      loading: false,
      name,
      brewery,
      beerHref,
      breweryHref,
      avgScore: "",
      imgSrc: "",
      abv: "",
      style: "",
      description: ""
    };
  }

  componentDidMount() {
    const { beerHref } = this.state;
    this.fetchOneBeer(beerHref);
  }

  async fetchOneBeer(href) {
    // SET TRUE
    this.setState({ loading: true });
    // change URL to REACT_APP_API_BASE before build
    fetch(`/beers${href}`, {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(beer => {
        const { avgScore, imgSrc, style } = beer;
        this.setState({
          ...this.state,
          style,
          imgSrc,
          avgScore,
          loading: false
        });
      })
      .catch(error => {
        console.log("Error", error);
        this.setState({
          error: error.errorMessage,
          loading: false
        });
      });
  }

  render() {
    const {
      name,
      brewery,
      beerHref,
      breweryHref,
      avgScore,
      imgSrc,
      style,
      loading
    } = this.state;

    if (loading) {
      return (
        <div className="loading--container">
          <Loading />
        </div>
      );
    }

    return (
      <main>
        <div className="detail--container">
          <div className="detail--innerbox">
            <img src={imgSrc} alt="beer" />
            <div className="detail--textbox">
              <h4>
                <a
                  href={`https://beeradvocate.com${beerHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {name}
                </a>
              </h4>
              <h5>
                <a
                  href={`https://beeradvocate.com${breweryHref}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {brewery}
                </a>
              </h5>
              <h6>{style}</h6>
              <h6>{avgScore} out of 5 - BeerAdvocate</h6>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

export default Detail;
