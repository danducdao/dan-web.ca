/*
* Program : Manipuler data binding
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-data-binding-index",
  templateUrl: "../../views/dataBinding/index.html",
  styles: []
})
export class DataBindingComponent implements OnInit {
  public myBinding: string = "Data Binding";
  public myId: string = "Mon Id";
  public myBinding2: string = "Data Binding 2";
  public myId2: string = "Mon Id 2";
  public isDisabled: boolean = true;

  constructor() {}

  ngOnInit() {}
}
