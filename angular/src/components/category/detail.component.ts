/*
* Program : Détail de catégorie
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieService } from "../../services/categorie.service";
import { ProduitService } from "../../services/produit.service";
import { IProduit } from "../../interfaces/produit";
import { Categorie } from "../../classes/categorie";
import { FileUpload } from "../../classes/fileUpload";
import { ICategorie } from "../../interfaces/categorie";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-categorie-detail",
  templateUrl: "../../view/category/detail.html",
  styles: [
    `
      #categorieDetail .row {
        margin: 0 0 5px 0;
      }
    `
  ]
})
export class DetailCategorieComponent implements OnInit {
  public model: Categorie;
  public nodigitPattern: string = Regex.NoDigitPattern();
  public uploadStatus: boolean = false;
  public titre: string;
  private file: string;
  private id: string;
  public fileToUpload: FileUpload = new FileUpload();

  constructor(
    private _categorieService: CategorieService,
    private _produitService: ProduitService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.model = new Categorie();
    this.titre = "Ajouter";
    if (this.id) {
      this.titre = "Modifier";
      this._categorieService
        .getCategorieById(this.id)
        .subscribe(data => this.response(this, data));
    }
  }
  response(obj, data): void {
    obj.model._id = data._id;
    obj.model.nom = data.nom;
    obj.model.description = data.description;
    obj.model.photo = data.photo;
    obj.model.active = data.active;
  }
  onSubmit(): void {
    if (this.id) {
      this._categorieService
        .updateCategorie(this.id, this.model)
        .subscribe(data => this.callback(this, data, this.model));
    } else {
      this._categorieService
        .saveCategorie(this.model)
        .subscribe(
          data => (data ? this.router.navigateByUrl("/admin/categorie") : "")
        );
    }
  }
  callback(
    obj: DetailCategorieComponent,
    OldCategorie: ICategorie,
    NewCategorie: ICategorie
  ): void {
    let that: DetailCategorieComponent = obj;
    obj._produitService.getProduitList().subscribe(function(produits) {
      that.router.navigateByUrl("/admin/categorie");
      let produitBD: IProduit[] = produits.filter(
        data => data.category[0]._id == OldCategorie._id
      );
      if (produitBD.length > 0)
        that.updateProduit(that, produitBD, NewCategorie);
    });
  }
  updateProduit(
    obj: DetailCategorieComponent,
    produits: IProduit[],
    categorie: ICategorie
  ): void {
    produits.forEach(function(produit) {
      produit.category[0] = categorie;
      obj._produitService
        .updateProduit(produit._id, produit)
        .subscribe(data => data);
    });
  }
}
