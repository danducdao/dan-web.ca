/*
* Program : ShoppingCart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { CategorieService } from "../../services/categorie.service";
import { ICategorie } from "../../interfaces/categorie";

@Component({
  selector: "app-shopping-cart-index",
  templateUrl: "../../views/shoppingCart/index.html",
  styleUrls: []
})
export class ShoppingCartComponent implements OnInit {
  public categories: ICategorie[];
  public shoppingCartCategorie: ICategorie[] = [];
  public categorieId: string = "";

  constructor(private _categorieService: CategorieService) {}

  ngOnInit() {
    this._categorieService
      .getCategorieList()
      .subscribe(
        res => (res !== null ? (this.categories = res) : ""),
        err => console.log(err)
      );
  }
  selectCategorie(): void {
    this.shoppingCartCategorie = this.categories.filter(
      res => res.id === parseInt(this.categorieId)
    );
  }
}
