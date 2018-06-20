import React, { Component } from "react";
import "./Hearted.styl";

class Hearted extends Component {
  render() {
    return (
      <div>
        <h1>Hearts</h1>
        {console.log(localStorage.key(1))}
      </div>
    );
  }
}

export default Hearted;
