import React, { Component } from "react";
import "./Search.styl";

class Search extends Component {
  render() {
    const { fetchBeers, updateSearchInput } = this.props;
    return (
      <div className="search--box">
        <form onSubmit={fetchBeers}>
          <input
            type="text"
            placeholder="Search for beer!"
            id="search--input"
            name="search--input"
            onChange={updateSearchInput}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}

export default Search;
