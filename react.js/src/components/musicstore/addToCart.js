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
    const { localstorage, carts } = this.state;
    if (localstorage.itemExist("cart")) {
      let carts = localstorage
        .getItem("cart")
        .filter(value => value.id !== parseInt(event.target.id));
      localstorage.setItem("cart", carts);
      this.setState({ carts: carts });
    }
  }
  componentDidMount() {
    this.setState({ carts: this.props.myCart });
  }
  render() {
    const { NumberColStyle, thStyle, carts } = this.state;
    return (
      <React.Fragment>
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
            {carts.map((value, key) => (
              <tr key={key}>
                <td>{value.id}</td>
                <td style={{ width: 40 }}>
                  <Link
                    {...{ id: value.id }}
                    to="#"
                    onClick={e => {
                      if (
                        window.confirm(
                          "Are you sure you wish to delete this item?"
                        )
                      )
                        this.removeItem(e);
                    }}
                  >
                    supprimer
                  </Link>
                </td>
                <td>{value.titre}</td>
                <td style={NumberColStyle}>1</td>
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
      </React.Fragment>
    );
  }
}
