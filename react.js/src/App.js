import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./components/home/index";
import HelloWorldComponent from "./components/helloworld/index";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <div id="header">
            <div className="color-line" />
            <div id="logo" class="light-version">
              <span>Dan Duc Dao</span>
            </div>
            <nav role="navigation">
              <div className="header-link hide-menu">
                <i className="fa fa-bars" />
              </div>
              <div className="small-logo">
                <span className="text-primary">Dan Duc Dao</span>
              </div>
            </nav>
          </div>
          <aside id="menu">
            <div id="navigation">
              <div className="profile-picture">
                <img
                  src="./assets/images/av1.png"
                  className="img-circle m-b"
                  alt="logo"
                />
              </div>
              <ul className="nav" id="side-menu">
                <li>
                  <Link to={"/"}>Home</Link>
                </li>
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
              </ul>
            </div>
          </aside>
          <div id="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel">
                  <div className="panel-body">
                    <Switch>
                      <Route exact path="/" component={HomeComponent} />
                      <Route
                        exact
                        path="/helloworld"
                        component={HelloWorldComponent}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </Router>
    );
  }
}
