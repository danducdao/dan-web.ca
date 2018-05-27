import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-program',
  template: `<h2>Bienvenue à {{ name }}</h2>
             <h2>{{ 2 + 2}}</h2>
             <h2>{{ "Bienvenue à" + name}}</h2>
             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{ doIt() }}</h2>
             <h2>{{ Url }}</h2>
             <p><input type="text" [disabled]="isDisabled" value="Mon premier program"></p>
             <p><input type="text" [id]="myId" [value]="myBinding"></p>
             <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>
             <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>`,
  styleUrls: []
})
export class FirstProgramComponent implements OnInit {

  public name = "Angular 6";
  public Url = window.location.href;
  public myBinding = "Data Binding";
  public myId = "Mon Id";
  public myBinding2 = "Data Binding 2";
  public myId2 = "Mon Id 2";
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }
  doIt(){
      return "Mon premier program Angular 6";
  }
}
