/*
* Program : MusicStoreListComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Service } from "../../services/service";
import HeaderComponent from "./header";
import { LocalStorage } from "../../classes/localstorage";
import { ShoppingCart } from "../../classes/shoppingCart";
import CurrencyFormat from "react-currency-format";
require("./css/style.css");

export default class MusicStoreListComponent extends Component {
  constructor() {
    super();
    this.service = new Service();
    this.localstorage = new LocalStorage();
    this.acheter = this.acheter.bind(this);
  }
  state = {
    chargement: true,
    erreur: "",
    genres: null,
    albums: null,
    carts: []
  };
  componentDidMount() {
    this.loadData();
    if (this.localstorage.itemExist("cart")) {
      this.setState({ carts: this.localstorage.getItem("cart") });
    }
  }
  loadData = () => {
    this.service
      .get("/shoppingCartMusic/genre")
      .then(result => {
        let genres = result.data;
        if (Object.keys(genres).length > 0) {
          this.setState({
            genres: genres
          });
          return this.service.get("/shoppingCartMusic/album");
        }
      })
      .then(result => {
        let albums = result.data;
        if (Object.keys(albums).length > 0) {
          this.setState({
            chargement: false,
            erreur: false,
            albums: albums,
            albumsSearch: albums
          });
        }
      })
      .catch(error => {
        console.error("erreur: ", error);
        this.setState({
          erreur: `${error}`,
          chargement: false
        });
      });
  };

  acheter(event, albumId) {
    event.preventDefault();
    let album = [];
    let carts = [];
    this.service.get("/shoppingCartMusic/album/" + albumId).then(res => {
      album = res.data;
      if (album.length > 0) {
        if (this.localstorage.itemExist("cart")) {
          carts = this.localstorage.getItem("cart");
          let index = carts.findIndex(res => res.id === album[0].id);
          if (index !== -1) {
            carts[index].quantite += 1;
            carts[index].total += carts[index].quantite * carts[index].prix;
          } else {
            carts.push(
              new ShoppingCart(
                album[0].id,
                1,
                album[0].prix,
                album[0].titre,
                album[0].prix
              )
            );
          }
        } else {
          carts.push(
            new ShoppingCart(
              album[0].id,
              1,
              album[0].prix,
              album[0].titre,
              album[0].prix
            )
          );
        }
        this.localstorage.setItem("cart", carts);
        this.setState({ carts: carts });
      }
    });
  }
  render() {
    const { chargement, erreur, genres, albums, carts } = this.state;
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
        <section>
          <HeaderComponent myCart={carts} />
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel">
                  <div className="panel-heading hbuilt">
                    {genres.map(
                      (value, key) =>
                        value.id == this.props.match.params.id ? (
                          <em key={key}>
                            <strong>{value.nom}</strong> Album{" "}
                          </em>
                        ) : (
                          ""
                        )
                    )}
                  </div>
                  <div className="panel-body">
                    <ul id="album-list">
                      {albums.map(
                        (value, key) =>
                          value.genre_id == this.props.match.params.id ? (
                            <li key={key}>
                              <Link to={"/album/" + value.id}>
                                <div>
                                  <img alt={value.titre} src={value.photo} />
                                </div>
                                <div>
                                  <span>{value.titre}</span>
                                </div>
                              </Link>
                              <div>
                                Prix :{" "}
                                <CurrencyFormat
                                  value={value.prix}
                                  displayType={"text"}
                                  thousandSeparator={true}
                                  prefix={"$"}
                                />
                              </div>

                              <div>
                                <button
                                  type="submit"
                                  name="ok"
                                  className="btn btn-success"
                                  onClick={event =>
                                    this.acheter(event, value.id)
                                  }
                                >
                                  <span
                                    style={{
                                      fontWeight: "bold",
                                      padding: 3,
                                      fontSize: 12,
                                      color: "#fff"
                                    }}
                                  >
                                    Acheter
                                  </span>
                                </button>
                              </div>
                            </li>
                          ) : (
                            ""
                          )
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
