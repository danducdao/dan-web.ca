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
        <h2>Liste des produits</h2>
        <table class="table table-bordered" cellspacing="1" cellpadding="1">
           <thead>
            <tr>
              <th></th>
              <th>Nom</th>
              <th>Catégorie</th>
              <th>Fournisseur</th>
              <th>Quantité</th>
              <th>Prix</th>
              <th>Quantité restante</th>
              <th>Quantité commandée</th>
              <th>Réapprovisionnement</th>
              <th>Discontinue</th>
            </tr>
          </thead>
          <tbody *ngFor="let produit of produits">
             <tr>
                 <td><a routerLink="/produit/{{produit._id}}">Modifier</a></td>
                 <td>{{ produit.nom }}</td>
                 <td>{{ produit.category[0].nom}}</td>
                 <td>{{ produit.fournisseur.compagnie}}</td>
                 <td>{{ produit.quantite }}</td>
                 <td style='text-align:right;'>{{ '$' + produit.prix }}</td>
                 <td style='text-align:right;'>{{ produit.quantiteRestante }}</td>
                 <td style='text-align:right;'>{{ produit.quantiteCommande }}</td>
                 <td style='text-align:right;'>{{ produit.reapprovisionnement }}</td>
                 <td style='text-align:center;'><span [innerHTML]="produit.discontinue | isDiscontinueChecked"></span></td>
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

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {
     this._produitService.getProduitList().subscribe(data => this.produits = data);
  }

}
