/*
* Program : AddToCartComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { LocalStorage } from "../../classes/localstorage";

export default class AddToCartComponent extends Component {
  state = {
    NumberColStyle: { textAlign: "right", width: 100 },
    thStyle: { textAlign: "center" },
    localstorage: new LocalStorage(),
    carts: []
  };
  removeItem(event) {
    event.preventDefault();
    const { localstorage } = this.state;
    if (localstorage.itemExist("cart")) {
      let carts = localstorage
        .getItem("cart")
        .filter(value => value.id !== parseInt(event.target.id));
      localstorage.setItem("cart", carts);
      this.setState({ carts: carts });
      //supprimer le panier
      if (carts.length === 0) localstorage.removeItem("cart");
    }
  }
  componentDidMount() {
    this.setState({ carts: this.props.myCart });
  }
  render() {
    const { NumberColStyle, thStyle, carts, localstorage } = this.state;
    let myCarts = [];
    if (localstorage.itemExist("cart")) {
      myCarts = localstorage.getItem("cart");
    } else {
      myCarts = carts;
    }
    let cart;
    if (myCarts.length > 0) {
      cart = (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th />
              <th style={thStyle}>Nom</th>
              <th style={thStyle}>Quantité</th>
              <th style={thStyle}>Prix</th>
            </tr>
          </thead>
          <tbody>
            {myCarts.map((value, key) => (
              <tr key={key}>
                <td style={{ width: 40 }}>
                  <Link
                    {...{ id: value.id }}
                    to="#"
                    onClick={e => {
                      if (
                        window.confirm(
                          "Êtes-vous sûre de vouloir supprimer cet item?"
                        )
                      )
                        this.removeItem(e);
                    }}
                  >
                    supprimer
                  </Link>
                </td>
                <td>{value.titre}</td>
                <td style={NumberColStyle}>{value.quantite}</td>
                <td style={NumberColStyle}>
                  <CurrencyFormat
                    value={value.prix}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      cart = <span style={{ color: "red" }}>Votre panier est vide</span>;
    }
    return cart;
  }
}
