/*
* Program : Liste des produits
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/services/produit.service';
import { IProduit } from 'src/interfaces/produit';

@Component({
  selector: 'app-produit',
  template: `
  <article>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12"><button class="btn btn-primary" onclick="window.location.href='produit/new'">Nouveau</button></div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-9">
                  <span style="font-size:25px;"><strong>Liste des produits</strong></span>
            </div>
            <div class="col-lg-3">
                    <div class="row">
                          <p class="col-lg-3"><label for="search" >Chercher</label></p>
                          <p><input type="search" size=40 [(ngModel)]="motAChercher"></p>
                    </div>
                    <div class="row">
                        <label for="search">Chercher par:</label>&nbsp;
                        <span *ngFor="let item of filtreParams">
                             <input type="checkbox" id="{{item.type}}" [(ngModel)]="item.isChecked" (change)="checkValue($event);">&nbsp;{{item.type}}
                        </span>
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
                     <td [ngClass]="center"><a href="/produit/{{produit._id}}" (click)="supprimer($event,produit._id)">Supprimer</a></td>
                     <td [ngClass]="center"><a routerLink="/produit/{{produit._id}}">Modifier</a></td>
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

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {

       this.filtreParams = [
                              { type : 'nom', isChecked : true},
                              { type : 'catégorie', isChecked : false},
                              { type : 'Quantité', isChecked : false},
                              { type : 'Prix', isChecked : false},
                            ];

       this._produitService.getProduitList().subscribe( data => this.produits = data);
  }
  supprimer(event:any,produitId:string):void
  {
      if(confirm("Êtes-vous sûre de vouloir supprimer ce produit?"))
      {
          this._produitService.removeProduitById(produitId).subscribe(data => this.response(data));
      }
      event.preventDefault();
  }
  response(data:IProduit)
  {
      if(data)
      {
          alert('Félicitation! Produit a été supprimer avec succès');
          this._produitService.getProduitList().subscribe( data => this.produits = data);
      }
  }
  checkValue(event:any)
  {
       this.motAChercher = "";
       this.filtreParams.map(function(value){
           if(value.type.match(event.target.id))
           {
               value.isChecked = event.target.checked;
           }
           return value;
       });
   }
}
