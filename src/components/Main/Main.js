import React, { Component } from "react";
import "./Main.styl";
import BeerList from "./BeerList/BeerList";
import Search from "./Search/Search";
import Loading from "../Loading/Loading";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchInput: "",
      loading: true,
      beers: [
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        },
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        },
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        },
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        },
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        },
        {
          name: "Big 'ld Ale!",
          image_url: "https://images.punkapi.com/v2/42.png",
          id: "1",
          tagline: "Explict Imperial Ale. Boom!",
          description:
            "Pounding a triple payload of the biggest North American hops humanity has devised, braced by a backbone of caramel malt, this beer is deep, astringent and resinous, pushing to the extremes of lupulin thresholds. There’s nothing inscrutable going on; no mystery in the backstory. It doesn’t seek to be understood. A beer incapable of empathy; only hop overload.",
          abv: 9.2,
          ibu: 123
        }
      ],
      error: null
    };
  }

  componentDidMount() {
    this.setState({ loading: false });
  }

  async fetchBeers(e) {
    e.preventDefault();
    this.setState({ loading: true });

    // change URL to REACT_APP_API_BASE before build
    // fetch(
    //   `https://api.punkapi.com/v2/beers?beer_name=${
    //     this.state.searchInput
    //   }&per_page=6`
    // )
    //   .then(res => res.json())
    //   .then(data => this.setState({ beers: data, loading: false }))
    //   .catch(error => {
    //     console.log("Error", error);
    //     this.setState({
    //       error: error.errorMessage,
    //       loading: false
    //     });
    //   });
  }

  updateSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { loading, beers } = this.state;
    if (loading) {
      return (
        <div className="loading--container">
          <Loading />
        </div>
      );
    }

    return (
      <main className="main--container">
        <Search
          updateSearchInput={this.updateSearchInput.bind(this)}
          fetchBeers={this.fetchBeers.bind(this)}
        />
        <BeerList beers={beers} />
      </main>
    );
  }
}

export default Main;
