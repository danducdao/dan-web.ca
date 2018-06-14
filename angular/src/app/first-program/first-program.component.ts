/*
* Program : Premier program
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-program',
  template: `
     <h2>Bienvenue à {{ name }}</h2>
     <h2>{{ 2 + 2}}</h2>
     <h2>{{ "Bienvenue à " + name}}</h2>
     <h2>{{name.length}}</h2>
     <h2>{{name.toUpperCase()}}</h2>
     <h2>{{ doIt() }}</h2>
     <h2>{{ Url }}</h2>
  `,
  styles: []
})
export class FirstProgramComponent implements OnInit {

  public name = "Angular 6";
  public Url = window.location.href;

  constructor() { }

  ngOnInit() {

  }

  doIt(){
      return "Mon premier program Angular 6";
  }

}
