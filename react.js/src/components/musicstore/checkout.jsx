/*
* Program : AddToCartComponent
* Écrit par : Dan Duc Dao
*/

import React, { Component } from "react";
import CurrencyFormat from "react-currency-format";
import { Link } from "react-router-dom";
import { LocalStorage } from "../../classes/localstorage";
import HeaderComponent from "./header";

export default class AddToCartComponent extends Component {
  constructor() {
    super();
    this.localstorage = new LocalStorage();

    this.state = {
      thStyle: { textAlign: "center" },
      genreId: "",
      carts: [],
      TPS: 9.15,
      TVQ: 7.13
    };
    this.calcTotal = this.calcTotal.bind(this);
  }
  removeItem(event, cartId) {
    event.preventDefault();
    if (this.localstorage.itemExist("cart")) {
      let carts = this.localstorage
        .getItem("cart")
        .filter(value => value.id !== parseInt(cartId));
      this.localstorage.setItem("cart", carts);
      this.setState({ carts: carts });
      if (carts.length === 0) this.localstorage.removeItem("cart");
    }
  }
  calcTotal() {
    var total = 0;
    var len = this.state.carts.length;
    for (var i = 0; i < len; i++) {
      total += parseFloat(this.state.carts[i].total);
    }
    return total;
  }
  Total = () => {
    return this.calcTotal();
  };
  GrandeTotal = () => {
    return (
      parseFloat(this.calcTotal()) +
      parseFloat(this.TaxeTPS()) +
      parseFloat(this.TaxeTVQ())
    );
  };
  TaxeTPS = () => {
    return parseFloat((this.calcTotal() * this.state.TPS) / 100).toFixed(2);
  };
  TaxeTVQ = () => {
    return parseFloat((this.calcTotal() * this.state.TVQ) / 100).toFixed(2);
  };

  updateCart = cartId => {
    let quantite = this.refs[cartId].value;
    if (quantite === "") {
      alert("La quantité est obligatoire");
      this.refs[cartId].focus();
      return;
    }
    if (!quantite.match(/^[1-9][0-9]*$/)) {
      alert("La quantité doit être digit et ne contient pas de zéro");
      this.refs[cartId].focus();
      return;
    }
    this.state.carts.map(function(value) {
      if (value.id === parseInt(cartId)) {
        value.quantite = quantite;
        value.total = parseFloat(value.prix * value.quantite);
        return value;
      }
    });
    this.setState(state => ({ carts: state.carts }));
    this.localstorage.setItem("cart", this.state.carts);
  };

  componentDidMount() {
    if (this.localstorage.itemExist("cart")) {
      let items = this.localstorage.getItem("cart");
      this.setState({ carts: items });
    }
  }
  render() {
    const { thStyle, TPS, TVQ } = this.state;
    let cart;
    if (this.state.carts.length > 0) {
      cart = (
        <table className="table table-bordered" role="grid">
          <thead>
            <tr>
              <th style={thStyle}>Description</th>
              <th style={thStyle}>Quantité</th>
              <th style={thStyle}>Prix</th>
              <th style={thStyle}>Total</th>
            </tr>
          </thead>
          <tbody>
            {this.state.carts.map((value, key) => (
              <tr key={key}>
                <td>{value.nom}</td>
                <td style={{ textAlign: "right", width: "10%" }}>
                  <input
                    type="text"
                    {...{ id: value.id }}
                    ref={value.id}
                    size="3"
                    defaultValue={value.quantite}
                  />
                </td>
                <td style={{ textAlign: "right", width: "10%" }}>
                  <CurrencyFormat
                    value={value.prix}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td style={{ textAlign: "right", width: "15%" }}>
                  <CurrencyFormat
                    value={value.total.toFixed(2)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                </td>
                <td style={{ width: "22%" }}>
                  <button
                    type="submit"
                    className="btn btn-success"
                    onClick={() => this.updateCart(value.id)}
                  >
                    Modifier
                  </button>
                  &nbsp;
                  <Link
                    to="#"
                    className="btn btn-danger"
                    onClick={event => {
                      if (
                        window.confirm(
                          "Êtes-vous sûre de vouloir supprimer cet item?"
                        )
                      )
                        this.removeItem(event, value.id);
                      else event.preventDefault();
                    }}
                  >
                    supprimer
                  </Link>
                </td>
              </tr>
            ))}
            <tr>
              <td colSpan="3" />
              <td>
                <table width="100%">
                  <tbody>
                    <tr>
                      <td>
                        <strong>Total:</strong>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <CurrencyFormat
                          value={this.Total().toFixed(2)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          TPS(
                          {TPS}
                          %):
                        </strong>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <CurrencyFormat
                          value={this.TaxeTPS()}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>
                          TVQ(
                          {TVQ}
                          %):
                        </strong>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <CurrencyFormat
                          value={this.TaxeTVQ()}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>Grande Total:</strong>
                      </td>
                      <td style={{ textAlign: "right" }}>
                        <CurrencyFormat
                          value={this.GrandeTotal().toFixed(2)}
                          displayType={"text"}
                          thousandSeparator={true}
                          prefix={"$"}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table>
      );
    } else {
      cart = <span style={{ color: "red" }}>Votre panier est vide</span>;
    }
    return (
      <section>
        <HeaderComponent myCart={""} />
        <div className="content">
          <div className="row">
            <div className="col-lg-12">
              <div className="hpanel">
                <div className="panel-body">{cart}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
