/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieService } from "../../services/categorie.service";
import { ProduitService } from "../../services/produit.service";
import { ICategorie } from "../../interfaces/categorie";
import { IProduit } from "../../interfaces/produit";

@Component({
  selector: "app-category-index",
  templateUrl: "../../view/category/index.html"
})
export class ListeCategorieComponent implements OnInit {
  public categories: ICategorie[] = [];
  public imgWidth: number = 50;
  public imgMargin: number = 2;
  public showImage: boolean = false;
  public center: any = { colCenter: true };
  public enabledButton: boolean = false;
  public verticalAlign: object = { verticalAlign: "middle" };
  public paths: any;

  constructor(
    private _categorieService: CategorieService,
    private _produitService: ProduitService,
    private route: ActivatedRoute
  ) {
    this.route.url.subscribe(data => this.setPath(this, data));
  }
  setPath(obj: ListeCategorieComponent, url: any[]) {
    this.paths = {
      new: url.length > 0 ? "new" : "categorie/new",
      modif: url.length > 0 ? "" : "categorie/"
    };
  }
  ngOnInit() {
    this._categorieService
      .getCategorieList()
      .subscribe(data => this.response(this, data));
  }
  response(obj: ListeCategorieComponent, data: ICategorie[]): void {
    obj.categories = data;
    for (var value of this.categories) {
      if (value.photo) {
        obj.enabledButton = true;
        break;
      }
    }
  }
  removeCategorie(event: any, categorieId: string): void {
    if (confirm("Êtes-vous sûre de vouloir supprimer cette catégorie?")) {
      this._categorieService
        .removeCategorieById(categorieId)
        .subscribe(data => this.responseRemoveCategorie(this, data));
    }
    event.preventDefault();
  }
  responseRemoveCategorie(
    obj: ListeCategorieComponent,
    categorie: ICategorie
  ): void {
    if (categorie) {
      alert("Félicitation! Catégorie a été supprimée avec succès");
      obj._categorieService
        .getCategorieList()
        .subscribe(data => this.responseCategorieList(obj, data, categorie));
    } else {
      alert("Félicitation! Catégorie a été supprimée avec sans succès");
    }
  }
  responseCategorieList(
    obj: ListeCategorieComponent,
    categories: ICategorie[],
    categorie: ICategorie
  ): void {
    obj.categories = categories;
    obj._produitService
      .getProduitList()
      .subscribe(data => this.suppimerProduit(obj, data, categorie));
  }
  suppimerProduit(
    obj: ListeCategorieComponent,
    produitBD: IProduit[],
    categorie: ICategorie
  ): void {
    let produits: IProduit[] = produitBD.filter(
      data => data.category[0]._id == categorie._id
    );
    if (produits.length > 0) {
      produits.forEach(function(produit) {
        obj._produitService
          .removeProduitById(produit._id)
          .subscribe(data => data);
      });
    }
  }
  MCImage(): void {
    this.showImage = !this.showImage;
  }
}
