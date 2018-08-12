import React, { Component } from "react";
import "./App.css";
import HomeComponent from "./components/home/index";
import HelloWorldComponent from "./components/helloworld/index";
import MusicStoreListComponent from "./components/musicstore/index";
import { GenreService } from "./services/genre";
import { Route, Link, Switch, HashRouter, NavLink } from "react-router-dom";

export class App extends Component {
  state = {
    styleObject: {
      fontWeight: "bold",
      backgroundColor: "#32454D",
      color: "#ffffff"
    },
    erreur: "",
    genres: []
  };

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    let genreService = new GenreService();
    genreService.setPath("/genres");
    genreService
      .getRequest()
      .then(result => {
        this.setState({
          erreur: false,
          genres: result.data
        });
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
          Désolé! Une erreur s'est produite lors du chargement des données.{" "}
          <button onClick={this.loadData}>Try again</button>
        </p>
      );
    }
    return (
      <HashRouter>
        <React.Fragment>
          <div id="header">
            <div className="color-line" />
            <div id="logo" className="light-version">
              <span>Dan Duc Dao</span>
            </div>
            <nav>
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
                  <NavLink to={"/"}>Home</NavLink>
                </li>
                <li>
                  <a href="#">
                    <span className="nav-label">React.js</span>
                    <span className="fa arrow" />
                  </a>
                  <ul className="nav nav-second-level">
                    <li>
                      <NavLink
                        to={"/helloworld"}
                        activeStyle={this.state.styleObject}
                      >
                        Hello world
                      </NavLink>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="#">
                    <span className="nav-label">Shopping cart</span>
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
                      <Route
                        exact
                        path="/genre/:id"
                        component={MusicStoreListComponent}
                      />
                    </Switch>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </React.Fragment>
      </HashRouter>
    );
  }
}
