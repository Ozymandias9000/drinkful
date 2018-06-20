import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./app.styl";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Hearted from "./components/Hearted/Hearted";
import Detail from "./components/Detail/Detail";
require("dotenv").config({ path: "../.env" });

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/beers/beer" component={Detail} />
            <Route path="/hearted" component={Hearted} exact />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
