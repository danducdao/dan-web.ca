/*
Program : La distributrice
Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { Regex } from "../../classes/regex";
import { RadioButton } from "../../classes/radiobutton";

@Component({
  selector: "app-distributrice-index",
  templateUrl: "../../views/distributrice/index.html",
  styles: [
    `
      .montant {
        border: 1px solid #ccc;
        height: 50px;
        width: 130px;
        color: #fff;
        text-align: center;
        font-weight: bold;
        font-size: 30px;
        background: blue;
      }
    `
  ]
})
export class DistributriceComponent implements OnInit {
  public produits: any[];
  public index: number;
  public radioButtons: RadioButton[] = [];
  public total: number = 0;
  public decimalPattern: string = Regex.DecimalPattern();
  public insuffisant: number;
  public surplus: number;
  public isMatch: boolean;
  public depot: string;

  constructor() {
    this.produits = [
      {
        nom: "Pepsi",
        prix: 1.25,
        path: "./assets/images/pepsi.jpg"
      },
      {
        nom: "Cristalline",
        prix: 1.5,
        path: "./assets/images/cristalline.jpg"
      },
      {
        nom: "Gatorate G serie Lemon-Lime",
        prix: 5.0,
        path: "./assets/images/gatorate.jpeg"
      },
      {
        nom: "Caramel M&M",
        prix: 2.25,
        path: "./assets/images/caramel.jpg"
      },
      {
        nom: "Galaxy Crispy Chocolate Bar",
        prix: 4.75,
        path: "./assets/images/galaxy_crispy.jpg"
      },
      {
        nom: "Original Mars",
        prix: 3.25,
        path: "./assets/images/original_mars.jpg"
      },
      {
        nom: "Snicker",
        prix: 4.1,
        path: "./assets/images/snicker.jpeg"
      },
      {
        nom: "Twix Dark",
        prix: 5.6,
        path: "./assets/images/twix_dark.jpg"
      }
    ];
  }
  ngOnInit() {
    this.produits.forEach(
      function(item) {
        this.radioButtons.push(
          new RadioButton("distributrice", item.prix, item.nom, false)
        );
      }.bind(this)
    );
  }
  selectedItem(index: number) {
    this.initRadioButton();
    let radioButtons: RadioButton[] = this.radioButtons;
    radioButtons[index].clsAttribut = radioButtons[index].iradioButtonSquare;
    this.index = index;
  }

  initRadioButton() {
    for (let radioButton of this.radioButtons) {
      radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
    }
  }
  onSubmit() {
    if (typeof this.index === "undefined") {
      alert("Veuillez sélectionner un produit");
      return;
    }
    let total: number = this.total;
    this.surplus = this.insuffisant = 0;
    this.isMatch = false;
    total += parseFloat(this.depot);
    if (total > this.produits[this.index].prix) {
      this.surplus = total - this.produits[this.index].prix;
      this.total = 0;
    } else if (total < this.produits[this.index].prix) {
      this.insuffisant = this.produits[this.index].prix - total;
      this.total = total;
    } else {
      this.isMatch = true;
      this.total = 0;
    }
  }
}
