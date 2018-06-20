import React, { Component } from "react";
import "./Nav.styl";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav className="nav">
        <Link to="/" className="title">
          <h1>Drinkful</h1>
        </Link>
        <div>
          <p>
            <Link to="/hearted" class="heart-link">
              Hearts
            </Link>
          </p>
          <p>Log In</p>
          <p>Sign Up</p>
        </div>
      </nav>
    );
  }
}

export default Nav;
