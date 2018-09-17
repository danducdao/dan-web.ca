/*
* Program : ShoppingCartProduit component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit, Input } from "@angular/core";
import { ShoppingCartService } from "../../services/shoppingCart.service";
import { IProduit } from "../../interfaces/produit";
import { LocalStorage } from "../../classes/localstorage";
import { ShoppingCart } from "../../classes/shoppingcart";
import { ShoppingCartBasketComponent } from "./shopping-cart-basket.component";

@Component({
  selector: "app-shopping-cart-produit",
  templateUrl: "../../views/shoppingCart/shopping-cart-produit.html",
  styles: []
})
export class ShoppingCartProduitComponent implements OnInit {
  @Input()
  categorieId: string;
  @Input()
  shoppingCartBasket: ShoppingCartBasketComponent;

  public shoppingCartList: IProduit[] = [];

  constructor(private _shoppingCartService: ShoppingCartService) {}

  ngOnInit() {}

  ngOnChanges() {
    this._shoppingCartService
      .shoppingCartByCategorieId(this.categorieId)
      .subscribe(
        res => (res !== null ? (this.shoppingCartList = res) : ""),
        err => console.log(err)
      );
  }

  onSubmit(event, shoppingCartId): void {
    let quantite: string = (<HTMLInputElement>(
      document.getElementById(shoppingCartId)
    )).value;
    if (quantite === "") {
      alert("La quantité est obligatoire");
      (<HTMLInputElement>document.getElementById(shoppingCartId)).focus();
      return;
    }
    if (!quantite.match(/^[1-9][0-9]*$/)) {
      alert("La quantité doit être digit et ne contient pas de zéro");
      (<HTMLInputElement>document.getElementById(shoppingCartId)).focus();
      return;
    }
    let carts: Array<ShoppingCart> = [];
    let item: IProduit = this.shoppingCartList.filter(
      data => data.id === parseInt(shoppingCartId)
    )[0];
    let total: number = Number(item.prix) * parseInt(quantite);
    if (!LocalStorage.itemExist("carts")) {
      carts.push(
        new ShoppingCart(
          item.id,
          parseInt(quantite),
          item.prix,
          item.nom,
          total
        )
      );
    } else {
      carts = LocalStorage.getItem("carts");
      let itemTrouve: Array<ShoppingCart> = carts.filter(
        data => data.id === parseInt(shoppingCartId)
      );
      if (itemTrouve.length == 0) {
        carts.push(
          new ShoppingCart(
            item.id,
            parseInt(quantite),
            item.prix,
            item.nom,
            total
          )
        );
      } else {
        carts.map(function(value) {
          if (value.id === parseInt(shoppingCartId)) {
            value.quantite += parseInt(quantite);
            value.total = value.prix * value.quantite;
            return value;
          }
        });
      }
    }
    this.shoppingCartBasket.saveCart(carts);
    event.preventDefault();
  }
}
