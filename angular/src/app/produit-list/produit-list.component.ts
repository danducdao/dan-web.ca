/*
* Program : Construire une liste de produit
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { ProduitService } from '../produit.service';

@Component({
  selector: 'app-produit-list',
  template: `
            <h2>Liste de produit</h2>
            <table class="table table-bordered" cellspacing="1" cellpadding="1">
               <thead>
                <tr>
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
                     <td>{{ produit.nom }}</td>
                     <td>{{ produit.category[0].nom}}</td>
                     <td>{{ produit.fournisseur.compagnie}}</td>
                     <td>{{ produit.quantite }}</td>
                     <td style='text-align:right;'>{{ '$' + produit.prix }}</td>
                     <td style='text-align:right;'>{{ produit.quantiteRestante }}</td>
                     <td style='text-align:right;'>{{ produit.quantiteCommande }}</td>
                     <td style='text-align:right;'>{{ produit.reapprovisionnement }}</td>
                     <td><span [innerHTML]="produit.Discontinue | isDiscontinueChecked"></span></td>
                  </tr>
               </tbody>
            </table>
          `,
  styles: []
})
export class ProduitListComponent implements OnInit {

  public produits = [];

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {

       this._produitService.getProduitList().subscribe(data => this.produits = data);
  }

}
