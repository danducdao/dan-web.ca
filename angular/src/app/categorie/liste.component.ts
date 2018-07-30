/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';
import { ICategorie } from 'src/interfaces/categorie';
import { IProduit } from 'src/interfaces/produit';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorie',
  template: `
  <article>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12">
                  <a class="btn btn-primary" routerLink="{{paths.new}}">Nouveau</a>&nbsp;
            </div>
        </div>
        <div *ngIf="categories.length > 0">
              <div class="row" style="margin-bottom:20px;">
                  <div class="col-lg-9">
                        <span style="font-size:25px;"><strong>Liste des catégories</strong></span>
                  </div>
              </div>
              <div class="row">
                      <table class="table table-bordered" cellspacing="1" cellpadding="1">
                         <thead>
                          <tr>
                              <th></th>
                              <th></th>
                              <th [ngStyle]="verticalAlign">Nom</th>
                              <th [ngStyle]="verticalAlign">Description</th>
                              <th [ngStyle]="verticalAlign"><button [disabled]="enabledButton?'':'enabled'" class="btn btn-primary" (click)="MCImage()">{{ showImage ? 'Cacher' : 'Montrer'}} Image</button></th>
                              <th [ngStyle]="verticalAlign">Active</th>
                          </tr>
                        </thead>
                        <tbody *ngFor="let categorie of categories">
                           <tr>
                              <td [ngClass]="center" [ngStyle]="verticalAlign"><a href="#" (click)="removeCategorie($event,categorie._id)">Supprimer</a></td>
                              <td [ngClass]="center" [ngStyle]="verticalAlign"><a routerLink="{{paths.modif + categorie._id}}">Modifier</a></td>
                              <td [ngStyle]="verticalAlign">{{ categorie.nom }}</td>
                              <td [ngStyle]="verticalAlign">{{ categorie.description }}</td>
                              <td [ngClass]="center">
                                  <img *ngIf="showImage" [src]="categorie.photo" [alt]="categorie.nom" [style.width.px]="imgWidth" [style.margin.px]="imgMargin" style="border-radius:10px;"/>
                              </td>
                              <td [ngClass]="center" [ngStyle]="verticalAlign">
                                   <span [innerHTML]="categorie.active | filtreHtmlTag:'check-square-icon'"></span>
                              </td>
                            </tr>
                         </tbody>
                      </table>
              </div>
        </div>
    </article>
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
  public verticalAlign:object = {verticalAlign:'middle'};
  public paths:any;

  constructor(private _categorieService:CategorieService,
              private _produitService:ProduitService,
              private route: ActivatedRoute)
  {
      this.route.url.subscribe(data => this.setPath(this,data));
  }
  setPath(obj:ListeCategorieComponent,url:any[])
  {
       this.paths = {
                        new : url.length > 0?'new':'categorie/new',
                        modif : url.length > 0?'':'categorie/'
                    };
  }
  ngOnInit()
  {
      this._categorieService.getCategorieList().subscribe( data => this.response(this,data));
  }
  response(obj:ListeCategorieComponent,data:ICategorie[]):void
  {
      obj.categories = data;
      for(var value of this.categories)
      {
          if(value.photo)
          {
              obj.enabledButton = true;
              break;
          }
      }
  }
  removeCategorie(event:any,categorieId:string):void
  {
      if(confirm("Êtes-vous sûre de vouloir supprimer cette catégorie?"))
      {
          this._categorieService.removeCategorieById(categorieId).subscribe(data => this.responseRemoveCategorie(this,data));
      }
      event.preventDefault();
  }
  responseRemoveCategorie(obj:ListeCategorieComponent,categorie:ICategorie):void
  {
      if(categorie)
      {
          alert('Félicitation! Catégorie a été supprimée avec succès');
          obj._categorieService.getCategorieList().subscribe( data => this.responseCategorieList(obj,data,categorie));
      }else
      {
          alert('Félicitation! Catégorie a été supprimée avec sans succès');
      }
  }
  responseCategorieList(obj:ListeCategorieComponent,categories:ICategorie[],categorie:ICategorie):void
  {
      obj.categories = categories;
      obj._produitService.getProduitList().subscribe(data => this.suppimerProduit(obj,data,categorie));
  }
  suppimerProduit(obj:ListeCategorieComponent,produitBD:IProduit[],categorie:ICategorie):void
  {
       let produits:IProduit[] = produitBD.filter(data => data.category[0]._id == categorie._id);
       if(produits.length > 0)
       {
           produits.forEach(function(produit){
                 obj._produitService.removeProduitById(produit._id)
                                    .subscribe(data => data);
           });
       }
  }
  MCImage():void
  {
       this.showImage = !this.showImage;
  }
}
