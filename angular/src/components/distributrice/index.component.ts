/*
Program : La distributrice
Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-distributrice-index",
  templateUrl: "../../view/distributrice/index.html",
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

      #logo {
        opacity: 1;
        -moz-transition: all 1s ease;
        -webkit-transition: all 1s ease;
        transition: all 1s ease;
        -o-transition: all 1s ease;
        -ms-transition: all 1s ease;
      }
    `
  ]
})
export class DistributriceComponent implements OnInit {
  public produits: any[];
  public i: number = -1;
  public montant: string;
  public isSelectedProduct: boolean;
  public insuffisant: number;
  public surplus: number;
  public depot: string;
  private total: number = 0;
  public messages: any;
  public ProduitNotSelect: boolean = true;
  public decimalPattern: string = Regex.DecimalPattern();

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
    this.montant = "0.00";
    this.messages = {
      isMatch: false,
      isEmpty: false,
      isNotDigit: false,
      isSelectedProduct: false
    };
  }
  choisir(event) {
    var target = event.target;
    if (target.checked) {
      this.isSelectedProduct = true;
      this.i = event.target.value;
      this.montant = "";
      this.ProduitNotSelect = false;
      this.montant = "0.00";
      this.depot = "";
    }
  }
  onSubmit() {
    this.initMessageError();

    if (this.i == -1) {
      this.messages.isSelectedProduct = true;
      return;
    }

    if (!this.depot) {
      this.messages.isEmpty = true;
      return;
    }

    if (isNaN(Number(this.depot))) {
      this.messages.isNotDigit = true;
      return;
    }

    this.total = this.total + Number(this.depot);

    if (this.total > this.produits[this.i].prix) {
      this.surplus = this.total - this.produits[this.i].prix;
      this.montant = this.total.toString();
      this.total = 0;
    } else if (this.total < this.produits[this.i].prix) {
      this.insuffisant = this.produits[this.i].prix - this.total;
      this.montant = this.total.toString();
    } else {
      this.messages.isMatch = true;
      this.montant = this.total.toString();
      this.total = 0;
    }
    this.depot = "";
  }
  private initMessageError() {
    this.insuffisant = 0;
    this.surplus = 0;
    this.messages.isEmpty = false;
    this.messages.isNotDigit = false;
    this.messages.isSelectedProduct = false;
    this.messages.isMatch = false;
  }
}
