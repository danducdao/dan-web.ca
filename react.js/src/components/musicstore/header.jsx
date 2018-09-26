/*
* Program : Header Component
* Écrit par : Dan Duc Dao
*/

import React from "react";
import { Link } from "react-router-dom";
require("./css/style.css");

const header = props => {
  let myCart =
    props.myCart.length > 0 ? (
      <a href="#" className="showNumItem">
        {props.myCart.length} item(s)
      </a>
    ) : (
      ""
    );
  return (
    <div className="normalheader">
      <div className="hpanel">
        <div className="panel-body">
          <div id="header">
            <h1>BOUTIQUE DE MUSIC</h1>
            <ul id="navlist">
              <li>
                <a href="#">Admin</a>
              </li>
              <li>{myCart}</li>
              {myCart ? (
                <li>
                  <Link to="/checkout">checkout</Link>
                </li>
              ) : (
                ""
              )}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default header;
