import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./components/home/index";
import HelloWorldComponent from "./components/helloworld/index";
import MusicStoreListComponent from "./components/musicstore/index";
import CheckoutComponent from "./components/musicstore/checkout";
import AlbumComponent from "./components/musicstore/album";
import { Service } from "./services/service";
import { Route, Switch, HashRouter, NavLink } from "react-router-dom";

export class App extends Component {
  constructor() {
    super();
    this.state.service = new Service();
  }
  state = {
    styleObject: {
      fontWeight: "bold",
      backgroundColor: "#32454D",
      color: "#ffffff"
    },
    erreur: "",
    genres: [],
    service: null
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    this.state.service
      .get("/shoppingCartMusic/genre")
      .then(result => {
        let genres = result.data;
        if (Object.keys(genres).length > 0) {
          this.setState({
            erreur: false,
            genres: genres
          });
        }
      })
      .catch(error => {
        console.error("erreur: ", error);
        this.setState({
          erreur: `${error}`
        });
      });
  };

  render() {
    const { erreur, genres } = this.state;
    if (erreur) {
      return (
        <p>
          Une erreur s'est produite lors du chargement des données.{" "}
          <button onClick={this.loadData}>Veuillez réessayer</button>
        </p>
      );
    }
    return (
      <HashRouter>
        <React.Fragment>
          <div id="header">
            <div className="color-line" />
            <div id="logo" className="light-version">
              <span>React.js - Exemple</span>
            </div>
            <nav role="navigation">
              <div className="header-link hide-menu">
                <i className="fa fa-bars" />
              </div>
              <div className="small-logo">
                <span className="text-primary">React.js - Exemple</span>
              </div>
            </nav>
          </div>
          <aside id="menu">
            <div id="navigation">
              <div className="profile-picture">
                <a href="index.html">
                  <img
                    src="../assets/images/logo.jpg"
                    className="img-circle m-b"
                    alt="logo"
                    width="100"
                    height="100"
                  />
                </a>
              </div>
              <ul className="nav" id="side-menu">
                <li>
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <NavLink
                    to={"/helloworld"}
                    activeStyle={this.state.styleObject}
                  >
                    Hello world
                  </NavLink>
                </li>
                <li>
                  <a href="#">
                    <span className="nav-label">Music store</span>
                    <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-second-level">
                    {genres.map((value, key) => (
                      <li key={key}>
                        <NavLink
                          to={"/genre/" + value.id}
                          replace
                          activeStyle={this.state.styleObject}
                        >
                          {value.nom}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </li>
              </ul>
            </div>
          </aside>
          <div id="wrapper">
            <div className="p-lg">
              <div className="content" data-child="row">
                <Switch>
                  <Route exact path="/" component={HomeComponent} />
                  <Route
                    exact
                    path="/helloworld"
                    component={HelloWorldComponent}
                  />
                  <Route exact path="/album/:id" component={AlbumComponent} />
                  <Route
                    exact
                    path="/genre/:id"
                    component={MusicStoreListComponent}
                  />
                  <Route exact path="/checkout" component={CheckoutComponent} />
                </Switch>
              </div>
            </div>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}
