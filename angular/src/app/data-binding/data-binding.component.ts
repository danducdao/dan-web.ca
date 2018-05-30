import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  template: `
           <p><input type="text" [disabled]="isDisabled" value="Data binding"></p>
           <p><input type="text" [id]="myId" [value]="myBinding"></p>
           <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>
           <p><input type="text" id="{{myId2}}" bind-value="myBinding2"></p>
         `,
  styles: []
})
export class DataBindingComponent implements OnInit {

  public myBinding = "Data Binding";
  public myId = "Mon Id";
  public myBinding2 = "Data Binding 2";
  public myId2 = "Mon Id 2";
  public isDisabled = true;

  constructor() { }

  ngOnInit() {
  }

}
