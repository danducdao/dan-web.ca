/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from '../categorie.service';
import { ActivatedRoute } from '@angular/router';
import { DetailCategorie } from '../detail-categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: []
})
export class DetailCategorieComponent implements OnInit {

  public categorie:any;
  private id:String;
  public model:DetailCategorie;
  public submitted:Boolean = false;
  constructor(private _categorieService:CategorieService,private route: ActivatedRoute) { }

  ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this._categorieService.getCategorieById(this.id).subscribe(data => this.categorie = data );
        this.model = new DetailCategorie(this.categorie.nom, this.categorie.description, this.categorie.image);
  }

  onSubmit() { this.submitted = true; }

}
