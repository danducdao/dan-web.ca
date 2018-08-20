/*
* Program : Détail de catégorie
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { CategorieService } from "../../services/categorie.service";
import { RadioButton } from "../../classes/radiobutton";
import { Categorie } from "../../classes/categorie";
import { FileUpload } from "../../classes/fileUpload";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-categorie-detail",
  templateUrl: "../../views/category/detail.html",
  styles: [
    `
      #categorieDetail .row {
        margin: 0 0 5px 0;
      }
    `
  ]
})
export class DetailCategorieComponent implements OnInit {
  public isAdd: boolean;
  public model: Categorie;
  public nodigitPattern: string = Regex.NoDigitPattern();
  public uploadStatus: boolean = false;
  public containerActiveRadioButton: RadioButton[] = [];
  private id: string;
  public fileToUpload: FileUpload = new FileUpload();

  constructor(
    private _categorieService: CategorieService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.model = new Categorie();
    this.isAdd = true;
    this.containerActiveRadioButton = [
      new RadioButton("active", "oui", "Oui", false),
      new RadioButton("active", "non", "Non", false)
    ];
    if (this.id) {
      this.isAdd = false;
      this._categorieService.getCategorieById(this.id).subscribe(res => {
        this.model.id = res.id;
        this.model.nom = res.nom;
        this.model.description = res.description;
        this.model.photo = res.photo;
        this.model.active = res.active;
        let containerActiveRadioButton: RadioButton[] = this
          .containerActiveRadioButton;
        if (this.model.active) {
          containerActiveRadioButton[0].clsAttribut =
            containerActiveRadioButton[0].iradioButtonSquare;
        } else {
          containerActiveRadioButton[1].clsAttribut =
            containerActiveRadioButton[1].iradioButtonSquare;
        }
      });
    }
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

  initActiveRadioButton() {
    for (let radioButton of this.containerActiveRadioButton) {
      radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
    }
  }

  onSubmit(): void {
    if (this.id) {
      this._categorieService
        .updateCategorie(this.id, this.model)
        .subscribe(
          data => (data ? this.router.navigateByUrl("/admin/categorie") : "")
        );
    } else {
      this._categorieService
        .saveCategorie(this.model)
        .subscribe(
          data => (data ? this.router.navigateByUrl("/admin/categorie") : "")
        );
    }
  }
}
