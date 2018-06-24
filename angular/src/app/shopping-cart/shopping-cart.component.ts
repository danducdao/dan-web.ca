/*
* Program : ShoppingCart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategorieService } from 'src/services/categorie.service';
import { ICategorie } from 'src/interfaces/categorie';
import { ProduitService } from 'src/services/produit.service';
import { LocalStorage } from 'src/classes/localstorage';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  public categories:ICategorie[];
  public idCategorie:string;
  public nomCategorie:string;
  private ids:string[] = [];
  private qtes:string[] = [];

  constructor(private _categorieService:CategorieService,private router: Router) { }

  ngOnInit() {
          this._categorieService.getCategorieList().subscribe( data => this.categories = data );
  }
  selectCategorie(ele: any):void{
         var index = ele.options.selectedIndex;
         this.idCategorie = this.categories[--index]._id;
         this.nomCategorie = this.categories[index++].nom;
   }
   onNotify(id:string[]){
        this.ids = id;
   }
   onNotifyQte(qte:string[]){
        this.qtes = qte;
   }

   onSubmit(){
       if(this.ids.length == 0)
       {
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

}
