/*
* Program : Section Admin
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-index",
  templateUrl: "../../views/admin/index.html",
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
  ngOnInit() {}
}
