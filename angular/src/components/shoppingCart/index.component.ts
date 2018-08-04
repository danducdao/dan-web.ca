/*
* Program : ShoppingCart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { CategorieService } from "../../services/categorie.service";
import { ICategorie } from "../../interfaces/categorie";

@Component({
  selector: "app-shopping-cart-index",
  templateUrl: "../../view/shoppingCart/index.html",
  styleUrls: []
})
export class ShoppingCartComponent implements OnInit {
  public categories: ICategorie[];
  public shoppingCartCategories: ICategorie[] = [];
  public categorieId: string = "";

  constructor(private _categorieService: CategorieService) {}

  ngOnInit() {
    this._categorieService
      .getCategorieList()
      .subscribe(data => (this.categories = data));
  }
  selectCategorie(): void {
    this.shoppingCartCategories = this.categories.filter(
      data => data._id.indexOf(this.categorieId) !== -1
    );
  }
}
