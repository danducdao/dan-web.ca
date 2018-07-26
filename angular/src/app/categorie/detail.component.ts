/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ProduitService } from 'src/services/produit.service';
import { IProduit } from 'src/interfaces/produit';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/classes/categorie';
import { ICategorie } from 'src/interfaces/categorie';
import { Regex } from 'src/classes/regex';

enum ImageSizeEnum{
     None = 0,
     Height = 135,
     Width = 192
};

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: [`
              .parent {
                   position: relative;
                   display: inline-block;
              }
          `]
})

export class DetailCategorieComponent implements OnInit {

  public model:Categorie;
  public nodigitPattern:string = Regex.NoDigitPattern();
  public uploadStatus:boolean = false;
  public height:number = ImageSizeEnum.None;
  public width:number = ImageSizeEnum.None;
  public titre:string;
  private file:string;
  private id:string;

  constructor(private _categorieService:CategorieService,
              private _produitService:ProduitService,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit()
  {
      this.id = this.route.snapshot.params.id;
      this.model = new Categorie();
      this.titre = "Ajouter";
      if(this.id)
      {
          this.titre = "Modifier";
          this._categorieService.getCategorieById(this.id).subscribe(data => this.response(this,data));
      }
  }
  response(obj,data):void
  {
      obj.model._id = data._id;
      obj.model.nom = data.nom;
      obj.model.description = data.description;
      obj.model.image = data.image;
      obj.uploadStatus = data.image?true:false;
      obj.height = data.image?ImageSizeEnum.Height:ImageSizeEnum.None;
      obj.width = data.image?ImageSizeEnum.Width:ImageSizeEnum.None;
      obj.model.active = data.active;
  }
  onSubmit():void
  {
      if(this.id)
      {
          this._categorieService.updateCategorie(this.id,this.model)
                                .subscribe(data => this.responseSaveCategorie(this,data,this.model));
      }else{
          this._categorieService.saveCategorie(this.model)
                                .subscribe(data => data?this.router.navigateByUrl('/admin/categorie'):"");
      }
   }
   responseSaveCategorie(obj:DetailCategorieComponent,OldCategorie:ICategorie,NewCategorie:ICategorie):void
   {
        let that:DetailCategorieComponent = obj;
        obj._produitService.getProduitList()
                            .subscribe(function(produits){
                                  that.router.navigateByUrl('/admin/categorie');
                                  let produitBD:IProduit[] = produits.filter(data => data.category[0]._id == OldCategorie._id);
                                  if(produitBD.length > 0)
                                      that.updateProduit(that,produitBD,NewCategorie);
                            });
   }
   updateProduit(obj:DetailCategorieComponent,produits:IProduit[],categorie:ICategorie):void
   {
       produits.forEach(function(produit)
       {
            produit.category[0] = categorie;
            obj._produitService.updateProduit(produit._id,produit)
                               .subscribe(data => data);
       });
   }
   FileToSave(file:string):void
   {
       this.file = file;
   }
   refreshImages(status:boolean):void
   {
        if (status == true)
        {
            this.height = ImageSizeEnum.Height;
            this.width = ImageSizeEnum.Width;
            this.uploadStatus = status;
            this.model.image = this.file;
        }
    }
    removeImage(event:any):void
    {
        this.height = ImageSizeEnum.None;
        this.width = ImageSizeEnum.None;
        this.model.image = "";
        this.uploadStatus=false;
        event.preventDefault();
    }
}
