/*
* Program : MusicStoreListComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Service } from "../../services/service";
import HeaderComponent from "./header";
import { CheckBox } from "../../classes/checkBox";
require("./css/style.css");

export default class MusicStoreListComponent extends Component {
  constructor() {
    super();
    this.state.service = new Service();
  }
  state = {
    chargement: true,
    erreur: "",
    genres: null,
    albums: null,
    albumsSearch: null,
    checkBoxContainer: [
      new CheckBox("Nom", "Nom", "Nom", true),
      new CheckBox("Prix", "Prix", "Prix")
    ],
    service: null
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    this.state.service
      .get("/genres")
      .then(result => {
        this.state.service.get("/albums").then(result2 => {
          this.setState({
            chargement: false,
            erreur: false,
            genres: result.data,
            albums: result2.data,
            albumsSearch: result2.data
          });
        });
      })
      .catch(error => {
        console.error("erreur: ", error);
        this.setState({
          erreur: `${error}`,
          chargement: false
        });
      });
  };
  selectItem = event => {
    this.state.checkBoxContainer[event.target.id].selectItem(this);
    this.forceUpdate();
  };
  search = () => {
    const { checkBoxContainer, albumsSearch } = this.state;
    let data = [];
    for (let checkbox of checkBoxContainer) {
      if (checkbox.isChecked) {
        if (checkbox.value.toLowerCase() === "prix") {
          data = data.concat(
            albumsSearch.filter(value => value.prix === this.refs.search.value)
          );
        } else {
          data = data.concat(
            albumsSearch.filter(
              value =>
                value.titre
                  .toLowerCase()
                  .indexOf(this.refs.search.value.toLowerCase()) !== -1
            )
          );
        }
      }
    }
    this.setState({ albums: data });
  };

  render() {
    const {
      chargement,
      erreur,
      genres,
      albums,
      checkBoxContainer
    } = this.state;
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
            <div className="col-sm-10">
              <h3>
                {genres.map(
                  (value, key) =>
                    value.id == this.props.match.params.id ? (
                      <em key={key}>
                        <strong>{value.nom}</strong> Album
                      </em>
                    ) : (
                      ""
                    )
                )}
              </h3>
            </div>
            <div className="col-sm-2">
              <label className="label-form">Trouver</label>
              <input
                type="text"
                className="form-control"
                name="search"
                ref="search"
                onKeyUp={this.search}
              />
              <br />
              <div>
                {checkBoxContainer.map((checkbox, key) => (
                  <React.Fragment key={key}>
                    <div
                      className={checkbox.clsAttribut}
                      style={{ position: "relative" }}
                      onClick={this.selectItem}
                    >
                      <input
                        type="checkbox"
                        name={checkbox.name}
                        {...{ value: checkbox.value }}
                        style={{ position: "absolute", opacity: 0 }}
                      />
                      <ins
                        className="iCheck-helper"
                        {...{ id: key }}
                        style={{
                          position: "absolute",
                          top: 0,
                          left: "0%",
                          display: "block",
                          width: "100%",
                          height: "100%",
                          margin: 0,
                          padding: 0,
                          background:
                            "rgb(255, 255, 255) none repeat scroll 0% 0%",
                          border: "0px none",
                          opacity: 0
                        }}
                      />
                    </div>
                    &nbsp;
                    {checkbox.value}
                    &nbsp;
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <ul id="album-list">
            {albums.map(
              (value, key) =>
                value.genreId == this.props.match.params.id ? (
                  <li key={key}>
                    <Link to="/">
                      <img alt={value.titre} src={value.albumArtUrl} />
                      <span>{value.titre}</span>
                    </Link>
                  </li>
                ) : (
                  ""
                )
            )}
          </ul>
        </div>
      </React.Fragment>
    );
  }
}
