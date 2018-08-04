/*
* Program : Premier program
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-hello-world",
  templateUrl: "../../view/helloWorld/helloWorld.html",
  styles: []
})
export class HelloWorldComponent implements OnInit {
  public name: string = "Angular 6";
  public Url: string = window.location.href;

  constructor() {}

  ngOnInit() {}

  doIt() {
    return "Mon premier program Angular 6";
  }
}
