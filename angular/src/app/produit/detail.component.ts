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
import { Regex } from 'src/classes/regex';

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
  public titre:string = "Ajouter";
  public model:Produit;
  public categories:any[];
  public fournisseurs:any[];
  public digitPattern:string = Regex.DigitPattern();
  public decimalPattern:string = Regex.DecimalPattern();
  public nodigitPattern:string = Regex.NoDigitPattern();
  public categorieId:string = "";
  public fournisseurId:string = "";

  constructor(
              private _produitService:ProduitService,
              private _categorieService:CategorieService,
              private _fournisseurService:FournisseurService,
              private route: ActivatedRoute,
              private router: Router) {}

  setCategorie(categorieId:string):void
  {
      this.model.category = this.categories.filter(data => data._id.indexOf(categorieId) !== -1);
  }
  setFournisseur(fournisseurId:string):void
  {
      this.model.fournisseur = this.fournisseurs.filter(data => data._id.indexOf(fournisseurId) !== -1)[0];
  }
  ngOnInit()
  {
      this.model = new Produit();
      this._categorieService.getCategorieList().subscribe( data => this.categories = data );
      this._fournisseurService.getFournisseurList().subscribe( data => this.fournisseurs = data );
      this.id = this.route.snapshot.params.id;
      if(this.id)
      {
           this.titre = "Modifier";
           this._produitService.getProduitById(this.id).subscribe(data => this.response(this,data));
      }
  }
  response(obj,data):void
  {
      obj.model.nom = data.nom;
      obj.categorieId = data.category[0]._id;
      obj.fournisseurId = data.fournisseur._id;
      obj.model.quantite = data.quantite;
      obj.model.prix = data.prix;
      obj.model.quantiteRestante = data.quantiteRestante;
      obj.model.quantiteCommande = data.quantiteCommande;
      obj.model.reapprovisionnement = data.reapprovisionnement;
      obj.model.discontinue = data.discontinue;
      obj.model.active = data.active;

  }
  selectCategorie():void
  {
       this.setCategorie(this.categorieId);
  }
  selectFournisseur():void
  {
       this.setFournisseur(this.fournisseurId);
  }
  onSubmit():void
  {
      if(this.id)
      {
            this.setCategorie(this.categorieId);
            this.setFournisseur(this.fournisseurId);
            this._produitService.updateProduit(this.id,this.model)
                                .subscribe(data =>{
                                                      if(data)
                                                      {
                                                         this.router.navigateByUrl('/produit');
                                                      }
                                                  });
      }else{
            this._produitService.saveProduit({
                                                  nom : this.model.nom,
                                                  category:this.model.category,
                                                  fournisseur:this.model.fournisseur,
                                                  quantite:parseInt(this.model.quantite),
                                                  prix:this.model.prix,
                                                  quantiteRestante:parseInt(this.model.quantiteRestante),
                                                  quantiteCommande:parseInt(this.model.quantiteCommande),
                                                  reapprovisionnement:parseInt(this.model.reapprovisionnement),
                                                  discontinue:this.model.discontinue,
                                                  active:this.model.active
                                              })
                                 .subscribe(data =>{
                                                      if(data)
                                                      {
                                                         this.router.navigateByUrl('/produit');
                                                      }
                                                });
        }
   }
}
