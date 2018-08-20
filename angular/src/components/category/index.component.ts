/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieService } from "../../services/categorie.service";
import { ICategorie } from "../../interfaces/categorie";

@Component({
  selector: "app-category-index",
  templateUrl: "../../views/category/index.html"
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
      .subscribe(res => this.response(this, res));
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
      this._categorieService.removeCategorieById(categorieId).subscribe(res => {
        if (res.success) {
          alert("Félicitation! Catégorie a été supprimée avec succès");
          this._categorieService
            .getCategorieList()
            .subscribe(res => this.response(this, res));
        } else {
          alert("Félicitation! Catégorie a été supprimée avec sans succès");
        }
      });
    }
    event.preventDefault();
  }
  MCImage(): void {
    this.showImage = !this.showImage;
  }
}
