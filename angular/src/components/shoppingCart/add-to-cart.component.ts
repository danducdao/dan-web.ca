/*
* Program : addTocart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { LocalStorage } from "../../classes/localstorage";
import { ShoppingCart } from "../../classes/shoppingcart";

@Component({
  selector: "app-add-to-cart",
  templateUrl: "../../views/shoppingCart/add-to-cart.html",
  styleUrls: []
})
export class AddToCartComponent implements OnInit {
  public carts: Array<ShoppingCart> = [];
  public TPS: number = 9.15;
  public TVQ: number = 7.13;
  public center: any = { colCenter: true };
  public right: any = { colRight: true };

  constructor() {}

  ngOnInit() {
    this.carts = LocalStorage.getItem("carts");
  }
  Total(): number {
    return this.calcTotal();
  }
  TaxeTPS(): number {
    return this.calcTPS();
  }
  TaxeTVQ(): number {
    return this.calcTVQ();
  }
  GrandeTotal(): number {
    return this.calcTotal() + this.calcTPS() + this.calcTVQ();
  }
  calcTotal(): number {
    var total: number = 0;
    var len = this.carts.length;
    for (var i = 0; i < len; i++) {
      total += this.carts[i].total;
    }
    return total;
  }
  calcTPS(): number {
    return (this.calcTotal() * this.TPS) / 100;
  }
  calcTVQ(): number {
    return (this.calcTotal() * this.TVQ) / 100;
  }
  updateCart(cartId): void {
    var quantite = parseInt(
      (<HTMLInputElement>document.getElementById(cartId)).value
    );
    if (!quantite) {
      alert("Désolé! Veuillez entrer une quantité");
      return;
    }
    this.carts.map(function(value) {
      if (value.id === parseInt(cartId)) {
        value.quantite = quantite;
        value.total = value.prix * value.quantite;
        return value;
      }
    });
    LocalStorage.setItem("carts", this.carts);
  }
  removeCart(cartId): void {
    if (confirm("Êtes-vous sûre de vouloir supprimer cet item?")) {
      this.carts = this.carts.filter(data => data.id === parseInt(cartId));
      LocalStorage.setItem("carts", this.carts);
    }
  }
}
