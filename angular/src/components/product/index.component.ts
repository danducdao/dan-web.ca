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
  templateUrl: "../../view/product/index.html"
})
export class ListeProduitComponent implements OnInit {
  public produits: IProduit[] = [];
  public filtreParams: any[] = [];
  public motAChercher: string = "";
  public title: string[] = [
    "",
    "",
    "Nom",
    "Catégorie",
    "Fournisseur",
    "Quantité",
    "Prix",
    "Quantité restante",
    "Quantité commandée",
    "Réapprovisionnement",
    "Discontinue",
    "Active"
  ];
  public right: any = { colRight: true };
  public center: any = { colCenter: true };
  public checkboxContainer: any;

  constructor(private _produitService: ProduitService) {}

  ngOnInit() {
    this.filtreParams = [
      { type: "Nom", isChecked: true },
      { type: "Catégorie", isChecked: false },
      { type: "Quantité", isChecked: false },
      { type: "Prix", isChecked: false }
    ];
    this.checkboxContainer = [
      new CheckBox("Nom", "Nom", "Nom", true),
      new CheckBox("Catégorie", "Catégorie", "Catégorie"),
      new CheckBox("Quantité", "Quantité", "Quantité"),
      new CheckBox("Prix", "Prix", "Prix")
    ];
    this._produitService
      .getProduitList()
      .subscribe(data => (this.produits = data));
  }
  removeProduit(event: any, produitId: string): void {
    if (confirm("Êtes-vous sûre de vouloir supprimer ce produit?")) {
      this._produitService
        .removeProduitById(produitId)
        .subscribe(data => this.response(data));
    }
    event.preventDefault();
  }
  response(data: IProduit): void {
    if (data) {
      alert("Félicitation! Produit a été supprimé avec succès");
      this._produitService
        .getProduitList()
        .subscribe(data => (this.produits = data));
    }
  }
  /*
  checkValue(event:any):void
  {
       this.motAChercher = "";
       this.filtreParams.map(function(value){
           if(value.type.match(event.target.id))
           {
               value.isChecked = event.target.checked;
           }
           return value;
       });
   }*/
}
