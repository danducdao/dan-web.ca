/*
* Program : Détail de produit
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ProduitService } from "../../services/produit.service";
import { CategorieService } from "../../services/categorie.service";
import { FournisseurService } from "../../services/fournisseur.service";
import { Produit } from "../../classes/produit";
import { RadioButton } from "../../classes/radiobutton";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-product-detail",
  templateUrl: "../../views/product/detail.html",
  styles: [
    `
      #produitDetail .row {
        margin: 0 0 5px 0;
      }
    `
  ]
})
export class DetailProduitComponent implements OnInit {
  private id: string;
  public isAdd: boolean;
  public model: Produit = null;
  public categories: any[];
  public fournisseurs: any[];
  public digitPattern: string = Regex.DigitPattern();
  public decimalPattern: string = Regex.DecimalPattern();
  public nodigitPattern: string = Regex.NoDigitPattern();
  public containerDiscontinueRadioButton: RadioButton[] = [];
  public containerActiveRadioButton: RadioButton[] = [];

  constructor(
    private _produitService: ProduitService,
    private _categorieService: CategorieService,
    private _fournisseurService: FournisseurService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.model = new Produit();
    this.id = this.route.snapshot.params.id;
    this.isAdd = true;
    this.containerDiscontinueRadioButton = [
      new RadioButton("discontinue", "oui", "Oui", false),
      new RadioButton("discontinue", "non", "Non", false)
    ];
    this.containerActiveRadioButton = [
      new RadioButton("active", "oui", "Oui", false),
      new RadioButton("active", "non", "Non", false)
    ];
    this._categorieService
      .getCategorieList()
      .subscribe(
        res => (res !== null ? (this.categories = res) : ""),
        err => console.log(err)
      );
    this._fournisseurService
      .getFournisseurList()
      .subscribe(
        res => (res !== null ? (this.fournisseurs = res) : ""),
        err => console.log(err)
      );
    if (this.id) {
      this.isAdd = false;
      let containerDiscontinueRadioButton: RadioButton[] = this
        .containerDiscontinueRadioButton;
      let containerActiveRadioButton: RadioButton[] = this
        .containerActiveRadioButton;
      this._produitService.getProduitById(this.id).subscribe(
        res => {
          if (res !== null) {
            this.model.id = res.id;
            this.model.nom = res.nom;
            this.model.categorie_id = res.categorie_id;
            this.model.fournisseur_id = res.fournisseur_id;
            this.model.prix = res.prix;
            this.model.reapprovisionnement = res.reapprovisionnement;
            this.model.quantite_par_unite = res.quantite_par_unite;
            this.model.quantite_en_stock = res.quantite_en_stock;
            this.model.quantite_commande = res.quantite_commande;
            this.model.discontinue = res.discontinue;
            this.model.active = res.active;
            //Le bouton radio discontinue
            if (this.model.discontinue) {
              containerDiscontinueRadioButton[0].clsAttribut =
                containerDiscontinueRadioButton[0].iradioButtonSquare;
            } else {
              containerDiscontinueRadioButton[1].clsAttribut =
                containerDiscontinueRadioButton[1].iradioButtonSquare;
            }
            //Le bouton radio active
            if (this.model.active) {
              containerActiveRadioButton[0].clsAttribut =
                containerActiveRadioButton[0].iradioButtonSquare;
            } else {
              containerActiveRadioButton[1].clsAttribut =
                containerActiveRadioButton[1].iradioButtonSquare;
            }
          }
        },
        err => console.log(err)
      );
    }
  }

  selectedDiscontinueItem(index: number) {
    this.initContainerDiscontinueRadioButton();
    let containerDiscontinueRadioButton: RadioButton[] = this
      .containerDiscontinueRadioButton;
    containerDiscontinueRadioButton[index].clsAttribut =
      containerDiscontinueRadioButton[index].iradioButtonSquare;
    this.model.discontinue =
      containerDiscontinueRadioButton[index].value === "oui" ? 1 : 0;
  }

  selectedActiveItem(index: number) {
    this.initActiveRadioButton();
    let containerActiveRadioButton: RadioButton[] = this
      .containerActiveRadioButton;
    containerActiveRadioButton[index].clsAttribut =
      containerActiveRadioButton[index].iradioButtonSquare;
    this.model.active =
      containerActiveRadioButton[index].value === "oui" ? 1 : 0;
  }
  initContainerDiscontinueRadioButton() {
    for (let radioButton of this.containerDiscontinueRadioButton) {
      radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
    }
  }

  initActiveRadioButton() {
    for (let radioButton of this.containerActiveRadioButton) {
      radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
    }
  }

  onSubmit(): void {
    let urlRedirect: string = "/admin/produit";
    if (this.id) {
      this._produitService
        .updateProduit(this.model)
        .subscribe(
          res =>
            res.success
              ? this.router.navigateByUrl(urlRedirect)
              : alert("Cet item a été sauvegardé avec sans succès"),
          err => console.log(err)
        );
    } else {
      this._produitService
        .saveProduit(this.model)
        .subscribe(
          res =>
            res.success
              ? this.router.navigateByUrl(urlRedirect)
              : alert("Cet item a été sauvegardé avec sans succès"),
          err => console.log(err)
        );
    }
  }
}
