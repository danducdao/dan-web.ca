import { Component, OnInit } from "@angular/core";
import { ShoppingCart } from "../../classes/shoppingcart";
import { LocalStorage } from "../../classes/localstorage";

@Component({
  selector: "app-shopping-cart-basket",
  templateUrl: "../../view/shoppingCart/shopping-cart-basket.html"
})
export class ShoppingCartBasketComponent implements OnInit {
  public baskets: Array<ShoppingCart> = [];
  public right: any = { colRight: true };

  constructor() {}

  ngOnInit() {
    this.baskets = LocalStorage.getItem("carts");
  }
  saveCart(carts: Array<ShoppingCart>): void {
    this.baskets = carts;
    LocalStorage.setItem("carts", carts);
  }
  removeItem(event, shoppingCartId): void {
    if (this.baskets.length == 1) {
      this.baskets = [];
    } else {
      this.baskets = this.baskets.filter(
        data => data._id.indexOf(shoppingCartId) == -1
      );
    }
    LocalStorage.setItem("carts", this.baskets);
    event.preventDefault();
  }
}
