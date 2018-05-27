import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-program',
  template: `<h2>Bienvenue à {{ name }}</h2>
             <h2>{{ 2 + 2}}</h2>
             <h2>{{ "Bienvenue à " + name}}</h2>
             <h2>{{name.length}}</h2>
             <h2>{{name.toUpperCase()}}</h2>
             <h2>{{ doIt() }}</h2>
             <h2>{{ Url }}</h2>
             <hr>
             <p><input type="text" [disabled]="isDisabled" value="Data binding"></p>
             <p><input type="text" [id]="myId" [value]="myBinding"></p>
             <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>
             <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>
             <hr>
             <h2 [class]="successClass">Test class binging</h2>
             <h2 [class.text-danger]="hasError">Test has error</h2>
             <h2 [ngClass]="messageClasses">Test ngClass</h2>
             `,
  styles: [`.text-success{
              color:green;
            }
            .text-danger{
              color:red;
            }
            .text-special{
              font-style:italic;
            }`]
})
export class FirstProgramComponent implements OnInit {

  public name = "Angular 6";
  public Url = window.location.href;
  public myBinding = "Data Binding";
  public myId = "Mon Id";
  public myBinding2 = "Data Binding 2";
  public myId2 = "Mon Id 2";
  public isDisabled = true;
  public hasError = true;
  public isSpecial=true;
  public messageClasses = {
       "text-success" : !this.hasError,
       "text-danger"  : this.hasError,
       "text-special" : this.isSpecial
     };

  public successClass="text-success";
  constructor() { }

  ngOnInit() {
  }
  doIt(){
      return "Mon premier program Angular 6";
  }
}
