import React, { Component } from "react";
import "./Nav.styl";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <h1>Drinkful</h1>
        <div>
          <p>Log In</p>
          <p>Sign Up</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
