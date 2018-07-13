/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ICategorie } from 'src/interfaces/categorie';

@Component({
  selector: 'app-categorie',
  template: `
    <h2>Liste des catégories</h2>
    <table class="table table-bordered" cellspacing="1" cellpadding="1">
       <thead>
        <tr>
          <th *ngFor="let value of ['','Nom','Description','Active']" [ngClass]="center" style="vertical-align:middle">{{value}}</th>
          <th [ngClass]="center"><button [disabled]="enabledButton?'':'enabled'" class="btn btn-primary" (click)="MCImage()">{{ showImage ? 'Cacher' : 'Montrer'}} Image</button></th>
        </tr>
      </thead>
      <tbody *ngFor="let categorie of categories">
         <tr>
            <td [ngClass]="center"><a routerLink="{{categorie._id}}">Modifier</a></td>
            <td>{{ categorie.nom }}</td>
            <td>{{ categorie.description }}</td>
            <td [ngClass]="center">
                 <span [innerHTML]="categorie.active | filtreHtmlTag:'check-square-icon'"></span>
            </td>
            <td [ngClass]="center">
                <img *ngIf="showImage" [src]="categorie.image" [alt]="categorie.nom" [style.width.px]="imgWidth" [style.margin.px]="imgMargin" style="border-radius:10px;"/>
            </td>
          </tr>
       </tbody>
    </table>
  `,
   styles: []
})
export class ListeCategorieComponent implements OnInit {

  public categories:ICategorie[] = [];
  public imgWidth:number = 50;
  public imgMargin:number = 2;
  public showImage:boolean = false;
  public center:any = {colCenter:true};
  public enabledButton:boolean = false;

  constructor(private _categorieService:CategorieService) { }

  ngOnInit()
  {
      this._categorieService.getCategorieList().subscribe( data => this.response(this,data));
  }
  response(obj:ListeCategorieComponent,data:ICategorie[]):void
  {
      obj.categories = data;
      for(var value of this.categories)
      {
          if(value.image)
          {
              obj.enabledButton = true;
              break;
          }
      }
  }
  MCImage():void
  {
       this.showImage = !this.showImage;
  }

}
