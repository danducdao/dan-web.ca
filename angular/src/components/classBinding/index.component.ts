/*
* Program : Manipuler class binding
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-class-binding-index",
  templateUrl: "../../views/classBinding/index.html",
  styles: [
    `
      .text-success {
        color: green;
      }
      .text-danger {
        color: red;
      }
      .text-special {
        font-style: italic;
      }
    `
  ]
})
export class ClassBindingComponent implements OnInit {
  public hasError: boolean = true;
  public isSpecial: boolean = true;
  public messageClasses: any = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  };

  public successClass = "text-success";

  constructor() {}

  ngOnInit() {}
}
