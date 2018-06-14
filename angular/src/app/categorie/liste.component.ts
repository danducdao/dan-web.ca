/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';

@Component({
  selector: 'app-categorie',
  template: `
    <h2>Liste des catégories</h2>
    <table class="table table-bordered" cellspacing="1" cellpadding="1">
       <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Image</th>
        </tr>
      </thead>
      <tbody *ngFor="let categorie of categories">
         <tr>
            <td>{{ categorie.nom }}</td>
            <td>{{ categorie.description }}</td>
            <td><img [src]="categorie.image" /></td>
          </tr>
       </tbody>
    </table>
  `,
  styles: []
})
export class ListeCategorieComponent implements OnInit {

  public categories = [];

  constructor(private _categorieService:CategorieService) { }

  ngOnInit() {
        this._categorieService.getCategorieList().subscribe(data =>{ this.categories = data});
  }

}
