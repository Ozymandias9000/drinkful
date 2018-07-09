import React, { Component } from "react";
import { Router, Route, Switch } from "react-router-dom";
import configureHistory from "./configureHistory";
import "./app.styl";
import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import Hearted from "./components/Hearted/Hearted";
import Detail from "./components/Detail/Detail";
import NoMatch from './components/NoMatch';
const history = configureHistory();

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="app">
          <Nav />
          <Switch>
            <Route path="/" component={Main} exact />
            <Route path="/beers/beer" component={Detail} />
            <Route path="/hearted" component={Hearted} exact />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
