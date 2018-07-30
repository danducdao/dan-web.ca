/*
* Program : Liste des produits
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/services/produit.service';
import { IProduit } from 'src/interfaces/produit';
import { CheckBox } from 'src/classes/checkbox';

@Component({
  selector: 'app-produit',
  template: `
  <article>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12">
                  <a class="btn btn-primary" routerLink="{{'new'}}">Nouveau</a>&nbsp;
            </div>
        </div>
        <div *ngIf="produits.length > 0">
              <div class="row" style="margin-bottom:20px;">
                  <div class="col-lg-9">
                        <span style="font-size:25px;"><strong>Liste des produits</strong></span>
                  </div>
                  <div class="col-lg-3">
                          <div class="row">
                                <div class="col-lg-12">
                                   <label class="control-label" for="search">Produit</label>
                                   <input type="search" class="form-control" [(ngModel)]="motAChercher">
                                </div>
                          </div><br>
                          <div class="row">
                                <div class="col-lg-12">
                                    <div class="checkbox">
                                        <span *ngFor="let checkbox of checkboxContainer">
                                          <div  [ngClass]="checkbox.clsAttribut" style="position: relative;" (click)="checkbox.searchBy(filtreParams);motAChercher=''">
                                                <input type="checkbox" name="checkbox.Name" style="position: absolute; opacity: 0;" value="checkbox.Value">
                                                <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                          </div>&nbsp;{{checkbox.Text}}
                                        </span>
                                    </div>
                              </div>
                          </div>
                  </div>
              </div>
              <div class="row">
                  <table class="table table-bordered" cellspacing="1" cellpadding="1">
                     <thead>
                        <tr>
                          <th *ngFor="let value of title" [ngClass]="center">{{value}}</th>
                        </tr>
                    </thead>
                    <tbody *ngFor="let produit of produits | filtreProduit:filtreParams:motAChercher">
                       <tr>
                           <td [ngClass]="center"><a href="#" (click)="removeProduit($event,produit._id)">Supprimer</a></td>
                           <td [ngClass]="center"><a routerLink="{{produit._id}}">Modifier</a></td>
                           <td>{{ produit.nom }}</td>
                           <td>{{ produit.category[0].nom }}</td>
                           <td>{{ produit.fournisseur.compagnie }}</td>
                           <td [ngClass]="right">{{ produit.quantite }}</td>
                           <td [ngClass]="right">{{ produit.prix | currency }}</td>
                           <td [ngClass]="right">{{ produit.quantiteRestante }}</td>
                           <td [ngClass]="right">{{ produit.quantiteCommande }}</td>
                           <td [ngClass]="right">{{ produit.reapprovisionnement }}</td>
                           <td [ngClass]="center">
                                <span [innerHTML]="produit.discontinue | filtreHtmlTag:'check-square-icon'"></span>
                           </td>
                           <td [ngClass]="center">
                                <span [innerHTML]="produit.active | filtreHtmlTag:'check-square-icon'"></span>
                           </td>
                        </tr>
                     </tbody>
                  </table>
              </div>
        </div>
  </article>
  <router-outlet></router-outlet>
  `,
  styles: []
})
export class ListeProduitComponent implements OnInit {

  public produits:IProduit[] = [];
  public filtreParams:any[] = [];
  public motAChercher:string = "";
  public title:string[] = [
                              '',
                              '',
                              'Nom',
                              'Catégorie',
                              'Fournisseur',
                              'Quantité',
                              'Prix',
                              'Quantité restante',
                              'Quantité commandée',
                              'Réapprovisionnement',
                              'Discontinue',
                              'Active'
                          ];
  public right:any={colRight:true};
  public center:any={colCenter:true};
  public checkboxContainer:any;

  constructor(private _produitService:ProduitService) { }

  ngOnInit()
  {
       this.filtreParams = [
                               { type : 'Nom', isChecked : true},
                               { type : 'Catégorie', isChecked : false},
                               { type : 'Quantité', isChecked : false},
                               { type : 'Prix', isChecked : false}
                           ];
       this.checkboxContainer = [
                                    new CheckBox('Nom','Nom','Nom',true),
                                    new CheckBox('Catégorie','Catégorie','Catégorie'),
                                    new CheckBox('Quantité','Quantité','Quantité'),
                                    new CheckBox('Prix','Prix','Prix')
                                ];
       this._produitService.getProduitList().subscribe( data => this.produits = data);
  }
  removeProduit(event:any,produitId:string):void
  {
      if(confirm("Êtes-vous sûre de vouloir supprimer ce produit?"))
      {
          this._produitService.removeProduitById(produitId).subscribe(data => this.response(data));
      }
      event.preventDefault();
  }
  response(data:IProduit):void
  {
      if(data)
      {
          alert('Félicitation! Produit a été supprimé avec succès');
          this._produitService.getProduitList().subscribe( data => this.produits = data);
      }
  }
  /*
  checkValue(event:any):void
  {
       this.motAChercher = "";
       this.filtreParams.map(function(value){
           if(value.type.match(event.target.id))
           {
               value.isChecked = event.target.checked;
           }
           return value;
       });
   }*/
}
