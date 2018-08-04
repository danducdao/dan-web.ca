/*
* Program : Section Admin
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-admin-index",
  templateUrl: "../../view/admin/index.html",
  styles: [
    `
      ul {
        list-style-type: none;
        margin: 0 0 20px 0;
        padding: 0;
        overflow: hidden;
        background-color: #333;
      }

      li {
        float: left;
      }

      li a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
      }

      li a:hover {
        background-color: #111;
      }
      .active {
        background-color: black;
      }
    `
  ]
})
export class AdminComponent implements OnInit {
  public category: any = { active: true };
  public product: any = { active: false };

  constructor(private router: Router) {}

  ngOnInit() {}

  redirect(event: any): void {
    if (event.target.id == "category") {
      this.category.active = true;
      this.product.active = !this.category.active;
      this.router.navigateByUrl("/admin/categorie");
    } else if (event.target.id == "product") {
      this.product.active = true;
      this.category.active = !this.product.active;
      this.router.navigateByUrl("/admin/produit");
    }
  }
}
