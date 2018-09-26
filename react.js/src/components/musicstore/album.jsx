/*
* Program : AlbumComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import HeaderComponent from "./header";
import { Service } from "../../services/service";
import { LocalStorage } from "../../classes/localstorage";
import { Album } from "../../classes/album";
import CurrencyFormat from "react-currency-format";

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
        if (album.length > 0) {
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
  render() {
    const { album, erreur, chargement } = this.state;

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
          <HeaderComponent myCart={""} />
          <div className="content">
            <div className="row">
              <div className="col-lg-12">
                <div className="hpanel">
                  <div className="panel-body">
                    <h2>{album[0]["titre"]}</h2>
                    <p>
                      <img alt={album[0]["titre"]} src={album[0]["photo"]} />
                    </p>
                    <div id="album-details">
                      <p>
                        <em>Genre : </em>
                        {album[0]["genre_nom"]}
                      </p>
                      <p>
                        <em>Artist : </em>
                        {album[0]["artiste_nom"]}
                      </p>
                      <p>
                        <em>Price : </em>
                        <CurrencyFormat
                          value={album[0]["prix"]}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </p>
                    </div>
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
