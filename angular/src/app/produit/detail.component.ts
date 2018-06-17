/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { ProduitService } from 'src/services/produit.service';
import { CategorieService } from 'src/services/categorie.service';
import { FournisseurService } from 'src/services//fournisseur.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Produit } from 'src/classes/produit';
import { IFournisseur } from 'src/interfaces/fournisseur';

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: [`
          .ng-valid[required], .ng-valid.required  {
             border-left: 5px solid #42A948; /* green */
          }

          .ng-invalid:not(form)  {
            border-left: 5px solid #a94442; /* red */
          }
          `]
})
export class DetailProduitComponent implements OnInit {

  private id:string;
  public model:Produit;
  public categories:any[];
  public fournisseurs:any[];
  constructor(
              private _produitService:ProduitService,
              private _categorieService:CategorieService,
              private _fournisseurService:FournisseurService,
              private route: ActivatedRoute,
              private router: Router) {

              }

  ngOnInit() {
      this.model = new Produit();
      this._categorieService.getCategorieList().subscribe( data =>this.categories = data );
      this._fournisseurService.getFournisseurList().subscribe( data => this.fournisseurs = data);
      this.id = this.route.snapshot.params.id;
      this._produitService.getProduitById(this.id).subscribe(data => {
                                                                            this.model.nom = data.nom;
                                                                            this.model.category = data.category;
                                                                            this.model.fournisseur = data.fournisseur;
                                                                            this.model.quantite = data.quantite;
                                                                            this.model.prix = data.prix;
                                                                            this.model.quantiteRestante = data.quantiteRestante;
                                                                            this.model.quantiteCommande = data.quantiteCommande;
                                                                            this.model.reapprovisionnement = data.reapprovisionnement;
                                                                            this.model.discontinue = data.discontinue;
                                                                     });
  }
  filtreCategorie(ele: any):any{
         var index = ele.options.selectedIndex
         this.model.category = [this.categories[index]];
   }
  filtreFournisseur(ele: any):any{
         var index = ele.options.selectedIndex
         this.model.fournisseur = this.fournisseurs[index];
   }
  onSubmit() {

         console.log(this.model);
        this._produitService.updateProduit(this.id,this.model).subscribe(data =>{
                                                                                  if(data)
                                                                                  {
                                                                                     this.router.navigateByUrl('/produit');
                                                                                  }
                                                                                });
   }

}
