/*
* Program : ShoppingCart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ICategorie } from 'src/interfaces/categorie';
import { LocalStorage } from 'src/classes/localstorage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public categories:ICategorie[];
  public shoppingCartCategories:ICategorie[] = [];
  public categorieId:string="";

  constructor(private _categorieService:CategorieService) { }

  ngOnInit() {
       this._categorieService.getCategorieList().subscribe( data => this.categories = data);
  }
  selectCategorie():void
  {
      this.shoppingCartCategories = this.categories.filter(data => data._id.indexOf(this.categorieId) !== -1);
  }
}
