/*
* Program : Liste des produits
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ProduitService } from "../../services/produit.service";
import { IProduit } from "../../interfaces/produit";
import { CheckBox } from "../../classes/checkbox";

@Component({
  selector: "app-produit-index",
  templateUrl: "../../views/product/index.html"
})
export class ListeProduitComponent implements OnInit {
  public produits: IProduit[] = [];
  public produitsForSearch: IProduit[] = [];
  public inputSearch: string = "";
  public right: any = { colRight: true };
  public center: any = { colCenter: true };
  public checkboxContainer: CheckBox[] = [];
  public loading: boolean;

  constructor(private _produitService: ProduitService) {}

  ngOnInit() {
    this.checkboxContainer = [
      new CheckBox("nom", "nom", "Nom", true),
      new CheckBox("categorie", "categorie", "Catégorie"),
      new CheckBox("quantiteEnStock", "quantiteEnStock", "Quantité en stock"),
      new CheckBox("prix", "prix", "Prix")
    ];
    this.loading = true;
    this.loadData();
  }
  search() {
    let data: IProduit[] = [];
    let searchValue: string = (<HTMLInputElement>(
      document.getElementById("search")
    )).value;

    for (let checkbox of this.checkboxContainer) {
      if (checkbox.clsAttribut.indexOf("checked") !== -1) {
        if (checkbox.value.toLowerCase() === "nom") {
          data = data.concat(
            this.produitsForSearch.filter(
              value =>
                value.nom.toLowerCase().indexOf(searchValue.toLowerCase()) !==
                -1
            )
          );
        } else if (checkbox.value === "categorie") {
          data = data.concat(
            this.produitsForSearch.filter(
              value =>
                value.categorie_nom
                  .toLowerCase()
                  .indexOf(searchValue.toLowerCase()) !== -1
            )
          );
        } else if (checkbox.value === "quantiteEnStock") {
          data = data.concat(
            this.produitsForSearch.filter(
              value => value.quantite_en_stock === parseInt(searchValue)
            )
          );
        } else if (checkbox.value === "prix") {
          data = data.concat(
            this.produitsForSearch.filter(
              value => value.prix === parseInt(searchValue)
            )
          );
        }
      }
    }
    this.produits = data;
  }

  removeProduit(event: any, produitId: string): void {
    if (confirm("Êtes-vous sûre de vouloir supprimer ce produit?")) {
      this._produitService.removeProduitById(produitId).subscribe(
        res => {
          if (res.success) {
            alert("Cet item a été supprimé avec succès");
            this.loadData();
          } else {
            alert("Cet item a été supprimé avec sans succès");
          }
        },
        err => console.log(err)
      );
    }
    event.preventDefault();
  }

  loadData() {
    this._produitService.getProduitList().subscribe(
      res => {
        if (res !== null) this.produits = this.produitsForSearch = res;
        this.loading = false;
      },
      err => console.log(err)
    );
  }
}
