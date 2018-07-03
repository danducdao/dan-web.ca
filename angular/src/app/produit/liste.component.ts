/*
* Program : Liste des produits
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/services/produit.service';

@Component({
  selector: 'app-produit',
  template: `
  <article>
        <button class="btn btn-primary" onclick="window.location.href='produit/new'">New</button>
        <div style="height:35px;margin:5px 0px 5px 5px;">
            <span style="font-size:25px;"><strong>Liste des produits</strong></span>
            <span style="float:right;margin:5px 0px 5px 5px;">
                  <label for="search">Produit</label>&nbsp;
                  <input type="search" size=40 [(ngModel)]="nomProduit" (keyup)="doSearch()">
            </span>
        </div>
        <table class="table table-bordered" cellspacing="1" cellpadding="1">
           <thead>
            <tr>
              <th></th>
              <th [ngClass]="center">Nom</th>
              <th [ngClass]="center">Catégorie</th>
              <th [ngClass]="center">Fournisseur</th>
              <th [ngClass]="center">Quantité</th>
              <th [ngClass]="center">Prix</th>
              <th [ngClass]="center">Quantité restante</th>
              <th [ngClass]="center">Quantité commandée</th>
              <th [ngClass]="center">Réapprovisionnement</th>
              <th [ngClass]="center">Discontinue</th>
            </tr>
          </thead>
          <tbody *ngFor="let produit of produits | filtreProduit:filtrePar">
             <tr>
                 <td [ngClass]="center"><a routerLink="/produit/{{produit._id}}">Modifier</a></td>
                 <td>{{ produit.nom }}</td>
                 <td>{{ produit.category[0].nom }}</td>
                 <td>{{ produit.fournisseur.compagnie }}</td>
                 <td [ngClass]="right">{{ produit.quantite }}</td>
                 <td [ngClass]="right">{{ produit.prix | currency }}</td>
                 <td [ngClass]="right">{{ produit.quantiteRestante }}</td>
                 <td [ngClass]="right">{{ produit.quantiteCommande }}</td>
                 <td [ngClass]="right">{{ produit.reapprovisionnement }}</td>
                 <td [ngClass]="center"><span [innerHTML]="produit.discontinue | isDiscontinueChecked"></span></td>
              </tr>
           </tbody>
        </table>

  </article>

  <router-outlet></router-outlet>
  `,
  styles: []
})
export class ListeProduitComponent implements OnInit {

  public produits = [];
  public filtrePar:string;
  public nomProduit:string;
  public right:any={colRight:true};
  public center:any={colCenter:true};

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {
     this._produitService.getProduitList().subscribe(data => this.produits = data);
  }
  doSearch(){
       this.filtrePar = this.nomProduit;
  }

}
