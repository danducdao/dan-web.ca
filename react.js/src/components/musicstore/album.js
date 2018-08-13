/*
* Program : AlbumComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import HeaderComponent from "./header";
import AddToCartComponent from "./addToCart";
import { Service } from "../../services/service";
import { LocalStorage } from "../../classes/localstorage";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

require("./css/style.css");

export default class AlbumComponent extends Component {
  state = {
    service: new Service(),
    localstorage: new LocalStorage(),
    album: [],
    genre: [],
    artiste: [],
    cart: [],
    erreur: true,
    chargement: true
  };

  componentDidMount() {
    this.loadData();
    if (this.state.localstorage.itemExist("cart")) {
      this.setState({ cart: this.state.localstorage.getItem("cart") });
    }
  }

  loadData = () => {
    const { service } = this.state;
    let artisteId = "";
    service
      .get("/albumsDetail/" + this.props.match.params.id)
      .then(res => {
        if (res.status === 200 && res.data) {
          this.setState({
            album: res.data,
            erreur: false,
            chargement: false
          });
          artisteId = res.data.artisteId;
          return service.get("/genres/" + res.data.genreId);
        }
      })
      .then(res => {
        if (res.status === 200 && res.data) {
          this.setState({
            genre: res.data
          });
        }
        return service.get("/artistes/" + artisteId);
      })
      .then(res => {
        if (res.status === 200 && res.data) {
          this.setState({
            artiste: res.data
          });
        }
      })
      .catch(error => {
        console.error("erreur: ", error);
        this.setState({
          erreur: true,
          chargement: false
        });
      });
  };

  addToCart = () => {
    const { localstorage, album } = this.state;
    let cart = [];
    if (localstorage.itemExist("cart")) {
      cart = cart.concat(localstorage.getItem("cart"));
    }
    cart.push(album);
    localstorage.setItem("cart", cart);
    this.setState({ cart: localstorage.getItem("cart") });
  };

  render() {
    const { album, genre, artiste, cart, erreur, chargement } = this.state;

    if (chargement) {
      return <p>Chargement ...</p>;
    }

    if (erreur) {
      return (
        <p>
          Désolé! Une erreur s'est produite lors du chargement des données.{" "}
          <button onClick={this.loadData}>Try again</button>
        </p>
      );
    }
    return (
      <React.Fragment>
        <HeaderComponent />
        <div id="main">
          <div className="row">
            <div className="col-md-3">
              <h2>{album["titre"]}</h2>
              <p>
                <img alt={album["titre"]} src={album["albumArtUrl"]} />
              </p>
              <div id="album-details">
                <p>
                  <em>Genre : </em>
                  {genre.nom}
                </p>
                <p>
                  <em>Artist : </em>
                  {artiste.nom}
                </p>
                <p>
                  <em>Price : </em>
                  <CurrencyFormat
                    value={album["prix"]}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </p>
              </div>
              <div>
                <br />
                <button className="btn btn-success" onClick={this.addToCart}>
                  <i
                    className="fa fa-check-square-o"
                    style={{ fontSize: 24, float: "left" }}
                  />
                  <span
                    style={{ marginLeft: 5, fontWeight: "bold", fontSize: 18 }}
                  >
                    Ajouter au panier
                  </span>
                </button>
                &nbsp;
                <Link className="btn btn-success" to={"/genre/" + genre.id}>
                  <i
                    className="fa fa-backward"
                    style={{ fontSize: 24, float: "left" }}
                  />
                  <span
                    style={{ marginLeft: 5, fontWeight: "bold", fontSize: 18 }}
                  >
                    BACK
                  </span>
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="hpanel hblue col-md-6">
                <div className="panel-heading hbuilt">
                  <strong>Votre panier</strong>
                </div>
                <div className="panel-body">
                  <AddToCartComponent myCart={cart} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
