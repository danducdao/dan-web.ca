/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/classes/categorie';

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: [`
          .ng-valid[required], .ng-valid.required  {
            border-left: 5px solid #42A948; /* green */
          }

          .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
          }`]
})
export class DetailCategorieComponent implements OnInit {

  private id:string;
  public model:Categorie;
  public nodigitPattern:string = "^[a-zA-Z\\-]+$";

  constructor(private _categorieService:CategorieService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
        this.model = new Categorie();
        this.id = this.route.snapshot.params.id;
        this._categorieService.getCategorieById(this.id).subscribe(data => {
                                                                              this.model.nom = data.nom;
                                                                              this.model.description = data.description;
                                                                              this.model.image = data.image
                                                                            });
  }

  onSubmit() {
        if(this.id)
        this._categorieService.updateCategorie(this.id,this.model)
                              .subscribe(data =>{
                                                    if(data)
                                                    {
                                                       this.router.navigateByUrl('/categorie');
                                                    }
                                                });
   }

}
