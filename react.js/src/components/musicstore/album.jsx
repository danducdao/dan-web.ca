/*
* Program : AlbumComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import HeaderComponent from "./header";
import AddToCartComponent from "./addToCart";
import { Service } from "../../services/service";
import { LocalStorage } from "../../classes/localstorage";
import { Album } from "../../classes/album";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";

require("./css/style.css");

export default class AlbumComponent extends Component {
  state = {
    service: new Service(),
    localstorage: new LocalStorage(),
    myAlbum: new Album(),
    album: [],
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
    service
      .get("/shoppingCartMusic/album/" + this.props.match.params.id)
      .then(result => {
        let album = result.data;
        if (Object.keys(album).length > 0) {
          this.setState({
            album: result.data,
            erreur: false,
            chargement: false
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
    const { localstorage, album, myAlbum } = this.state;
    let cart = [];
    if (localstorage.itemExist("cart")) {
      cart = localstorage.getItem("cart");
      let cartFound = cart.filter(value => value.id === parseInt(album.id));
      if (cartFound.length > 0) {
        cart.map(value => {
          value.quantite =
            value.id === album.id ? (value.quantite += 1) : value.quantite;
          return value;
        });
      } else {
        this.setMyAlbum(myAlbum, album);
        cart.push(myAlbum);
      }
    } else {
      this.setMyAlbum(myAlbum, album);
      cart.push(myAlbum);
    }
    localstorage.setItem("cart", cart);
    this.setState({ cart: localstorage.getItem("cart") });
  };

  setMyAlbum(myAlbum, album) {
    myAlbum.id = album.id;
    myAlbum.prix = album.prix;
    myAlbum.titre = album.titre;
    myAlbum.quantite = 1;
  }

  render() {
    const { album, cart, erreur, chargement } = this.state;

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
                  {album["genre_nom"]}
                </p>
                <p>
                  <em>Artist : </em>
                  {album["artiste_nom"]}
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
                <Link
                  className="btn btn-success"
                  to={"/genre/" + album["genre_id"]}
                >
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
