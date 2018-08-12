/*
* Program : HomeComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GenreService } from "../../services/genre";
import { AlbumService } from "../../services/album";
import HeaderComponent from "./header";

require("./css/style.css");

export default class MusicStoreListComponent extends Component {
  state = {
    chargement: true,
    erreur: "",
    genres: null,
    albums: null
  };
  componentDidMount() {
    this.loadData();
  }
  loadData = () => {
    let genreService = new GenreService();
    let albumService = new AlbumService();
    genreService.setPath("/genres");
    genreService
      .getRequest()
      .then(result => {
        albumService.setPath("/albums");
        albumService.getRequest().then(result2 => {
          this.setState({
            chargement: false,
            erreur: false,
            genres: result.data,
            albums: result2.data
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

  render() {
    const { chargement, erreur, genres, albums } = this.state;
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
          <h3>
            {genres.map(
              (value, key) =>
                value.id == this.props.match.params.id ? (
                  <em key={key}>{value.nom} Album</em>
                ) : (
                  ""
                )
            )}
          </h3>
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
