import React, { Component } from "react";
import "./App.css";
import HelloWorldComponent from "./components/helloWorld";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <Route>
          <Route path="/helloworld" component={HelloWorldComponent} />
        </Route>
      </Router>
    );
  }
}

export const NavLinkMenu = (
  <Router>
    <React.Fragment>
      <Route>
        <li>
          <Link to={"/"}>Home</Link>
        </li>
      </Route>
      <Route>
        <React.Fragment>
          <li>
            <a href="#">
              <span className="nav-label">React.js</span>
              <span className="fa arrow" />
            </a>
            <ul className="nav nav-second-level">
              <li>
                <Link to={"/helloworld"}>Hello world</Link>
              </li>
            </ul>
          </li>
        </React.Fragment>
      </Route>
    </React.Fragment>
  </Router>
);
