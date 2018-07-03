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
      beers: [],
      error: null
    };
    this.updateSearchInput = this.updateSearchInput.bind(this);
    this.fetchBeers = this.fetchBeers.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.setState({ loading: false });
    if (this.props.location.state) {
      this.setState({
        beers: this.props.location.state.beers
      });
    }
  }

  componentDidUpdate() {

  }

  // TODO: make async
  fetchBeers() {
    this.setState({ loading: true, error: null });

    fetch("/beers", {
      headers: {
        "content-type": "application/json"
      },
      method: "POST",
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(beers => {
        if (beers.length === 0) {
          throw new Error('No results found!')
        } else {
          this.setState({ beers, loading: false });
        }
      })
      .catch(error => {
        console.log("Error", error);
        this.setState({
          error,
          loading: false
        });
      });
  }

  updateSearchInput(e) {
    this.setState({ searchInput: e.target.value });
  }

  render() {
    const { loading, beers, error } = this.state;
    if (loading) {
      return (
        <div className="loading--container">
          <Loading />
        </div>
      );
    }

    if (error) {
      return (
        <main className="main--container">
          <Search
            updateSearchInput={this.updateSearchInput}
            fetchBeers={this.fetchBeers}
          />
          <p>No results found!</p>
        </main>
      );
    }

    return (
      <main className="main--container">
        <Search
          updateSearchInput={this.updateSearchInput}
          fetchBeers={this.fetchBeers}
        />
        <BeerList beers={beers} mainState={this.state} />
      </main>
    );
  }
}

export default Main;
