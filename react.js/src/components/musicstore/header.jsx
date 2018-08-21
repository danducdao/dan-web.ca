import React, { Component } from "react";
import { Link } from "react-router-dom";
require("./css/style.css");

export default class HeaderComponent extends Component {
  render() {
    return (
      <div id="header">
        <h1>
          <Link to="/">BOUTIQUE DE MUSIC</Link>
        </h1>
        <ul id="navlist">
          <li className="first">
            <a href="#" id="current">
              Home
            </a>
          </li>
          <li>
            <a href="#">Store</a>
          </li>
          <li />
          <li>
            <a href="#">Admin</a>
          </li>
        </ul>
      </div>
    );
  }
}
