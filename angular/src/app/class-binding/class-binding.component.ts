/*
* Program : Manipuler class binding
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-binding',
  template: `
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
export class ClassBindingComponent implements OnInit {

  public hasError:boolean = true;
  public isSpecial:boolean= true;
  public messageClasses:any = {
                             "text-success" : !this.hasError,
                             "text-danger"  : this.hasError,
                             "text-special" : this.isSpecial
                          };

  public successClass="text-success";

  constructor() { }

  ngOnInit() {
  }

}
