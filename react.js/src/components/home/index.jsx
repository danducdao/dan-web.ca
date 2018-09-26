/*
* Program : HomeComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import Tuto from "../../classes/tuto";
import youtubeEmbedUrls from "../../inc/tutoriel";

export default class HomeComponent extends Component {
  state = {
    tutoriels: {}
  };
  componentWillMount() {
    var i = 0;
    this.setState({
      tutoriels: {
        Reactjs: new Tuto(youtubeEmbedUrls()[i]),
        Reactjs2: new Tuto(youtubeEmbedUrls()[++i])
      }
    });
  }
  previous = event => {
    if (event.target.id === "Reactjs") this.state.tutoriels.Reactjs.previous();
    else if (event.target.id === "Reactjs2")
      this.state.tutoriels.Reactjs2.previous();
    this.forceUpdate();
  };
  next = event => {
    if (event.target.id === "Reactjs") this.state.tutoriels.Reactjs.next();
    else if (event.target.id === "Reactjs2")
      this.state.tutoriels.Reactjs2.next();
    this.forceUpdate();
  };
  selectedItem = event => {
    let selectedValue = event.target.value;
    if (event.target.id === "selReactjs") {
      this.state.tutoriels.Reactjs.itemSelected = selectedValue;
      this.state.tutoriels.Reactjs.selectedItem();
    } else if (event.target.id === "selReactjs2") {
      this.state.tutoriels.Reactjs2.itemSelected = selectedValue;
      this.state.tutoriels.Reactjs2.selectedItem();
    }
    this.forceUpdate();
  };
  render() {
    let tutoriels = this.state.tutoriels;
    return (
      <section>
        <div className="content">
          <div className="row">
            <div className="col-lg-4">
              <div className="hpanel hgreen">
                <div className="panel-heading hbuilt">
                  <div className="panel-tools">
                    <a className="showhide">
                      <i className="fa fa-chevron-up" />
                    </a>
                  </div>
                  React Tutorial with Examples
                </div>
                <div className="panel-body">
                  <p>
                    <label className="col-sm-2 control-label">Vidéo:</label>
                    <select
                      name="titre"
                      id="selReactjs"
                      onChange={this.selectedItem}
                    >
                      {tutoriels.Reactjs.listItem().map((value, key) => (
                        <option value={key} key={key}>
                          {value.titre}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <iframe
                      style={{ width: "100%" }}
                      height="315"
                      src={tutoriels.Reactjs.url}
                      allow="autoplay; encrypted-media"
                    />
                  </p>
                  <p
                    style={{
                      "min-height": "50px",
                      padding: "10px",
                      "font-weight": "bold",
                      "font-size": "18px",
                      "text-align": "center",
                      border: "1px solid #ccc"
                    }}
                  >
                    <span>
                      {tutoriels.Reactjs.count} - {tutoriels.Reactjs.titre}
                    </span>
                  </p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary previous"
                      style={{ float: "left" }}
                      id="Reactjs"
                      onClick={this.previous}
                    >
                      Précédent
                    </button>
                    &nbsp;
                    <button
                      type="button"
                      className="btn btn-primary next"
                      style={{ float: "right" }}
                      id="Reactjs"
                      onClick={this.next}
                    >
                      Suivant
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="hpanel hgreen">
                <div className="panel-heading hbuilt">
                  <div className="panel-tools">
                    <a className="showhide">
                      <i className="fa fa-chevron-up" />
                    </a>
                  </div>
                  React Tutorials
                </div>
                <div className="panel-body">
                  <p>
                    <label className="col-sm-2 control-label">Vidéo:</label>
                    <select
                      name="titre"
                      id="selReactjs2"
                      onChange={this.selectedItem}
                    >
                      {tutoriels.Reactjs2.listItem().map((value, key) => (
                        <option value={key} key={key}>
                          {value.titre}
                        </option>
                      ))}
                    </select>
                  </p>
                  <p>
                    <iframe
                      style={{ width: "100%" }}
                      height="315"
                      src={tutoriels.Reactjs2.url}
                      allow="autoplay; encrypted-media"
                    />
                  </p>
                  <p
                    style={{
                      "min-height": "50px",
                      padding: "10px",
                      "font-weight": "bold",
                      "font-size": "18px",
                      "text-align": "center",
                      border: "1px solid #ccc"
                    }}
                  >
                    <span>
                      {tutoriels.Reactjs2.count} - {tutoriels.Reactjs2.titre}
                    </span>
                  </p>
                  <p>
                    <button
                      type="button"
                      className="btn btn-primary previous"
                      id="Reactjs2"
                      style={{ float: "left" }}
                      onClick={this.previous}
                    >
                      Précédent
                    </button>
                    <button
                      type="button"
                      className="btn btn-primary next"
                      style={{ float: "right" }}
                      id="Reactjs2"
                      onClick={this.next}
                    >
                      Suivant
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
