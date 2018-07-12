/*
* Program : ShoppingCart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/services/categorie.service';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { ICategorie } from 'src/interfaces/categorie';
import { IProduit } from 'src/interfaces/produit';
import { LocalStorage } from 'src/classes/localstorage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public categories:ICategorie[];
  public shoppingCartCategories:ICategorie[] = [];
  public idCategorie:string;
  public nomCategorie:string;
  public itemExiste:boolean=false;
  private ids:string[] = [];
  private qtes:string[] = [];

  constructor(private _categorieService:CategorieService,private _shoppingCartService:ShoppingCartService,private router: Router) { }

  ngOnInit() {
       this._categorieService.getCategorieList().subscribe( data => this.categories = data);
       this.nomCategorie = "";
  }
  selectCategorie(ele: any):void
  {
       var index = ele.options.selectedIndex;
       if(index !== 0)
       {
           if(this.shoppingCartCategories.length == 0)
           {
                this.shoppingCartCategories = this.categories;
           }
           this.idCategorie = this.shoppingCartCategories[--index]._id;
           this.nomCategorie = this.shoppingCartCategories[index++].nom;
           this.verifierProduitExiste(this.idCategorie);
       }else{
           this.shoppingCartCategories = [];
           this.nomCategorie = "";
       }
   }
   onNotify(id:string[]):void{
        this.ids = id;
   }
   onNotifyQte(qte:string[]):void{
        this.qtes = qte;
   }
   onSubmit():void{
       if(this.ids.length == 0)
       {
           alert("Désolé! Veuillez sélectionner un produit");
           return;
       }
       this.ids.forEach((data,index) => {
              if(LocalStorage.getItem(data))
              {
                  LocalStorage.setItem(data,(parseInt(LocalStorage.getItem(data)) + parseInt(this.qtes[index])));
              }else{
                  LocalStorage.setItem(data,this.qtes[index]);
              }
       });
       this.router.navigateByUrl('/addtocart');
   }
   verifierProduitExiste(categorieId:string):void
   {
       this._shoppingCartService.shoppingCartProduitList().subscribe(data => {
                                                                                let produits:IProduit[] = data.filter((data:IProduit) => data.category[0]._id.indexOf(categorieId) !== -1)
                                                                                this.itemExiste = produits.length > 0?true:false;
                                                                             });

   }
}
