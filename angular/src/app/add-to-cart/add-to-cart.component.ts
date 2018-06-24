/*
* Program : addTocart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { IProduit } from 'src/interfaces/produit';
import { ProduitService } from 'src/services/produit.service';
import { LocalStorage } from 'src/classes/localstorage';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public carts:any[] = [];
  public total:number = 0;

  constructor(private _produitService:ProduitService) { }

  ngOnInit() {
      this._produitService.getProduitList().subscribe(data => this.selectProduit(this,data));
  }

  selectProduit(obj:AddToCartComponent,listProduit:IProduit[]):void{
       obj.total = 0;
       listProduit.forEach(function(value){
             if(LocalStorage.itemExist(value._id))
             {
                  let qte = LocalStorage.getItem(value._id);
                  let newCart = {
                                   _id:value._id,
                                   nom:value.nom,
                                   qte:<string>qte,
                                   prix:value.prix,
                                   total: value.prix * qte
                                }
                  obj.carts.push( newCart );
                  obj.total += Math.round(value.prix * qte);
             }
       });
  }
  updateCart(id:string):void{
        if(LocalStorage.itemExist(id))
        {
             LocalStorage.setItem(id,(<HTMLInputElement>document.getElementById(id)).value);
             this.updateProduitList();
        }
  }
  removeCart(id:string):void{
       if(LocalStorage.itemExist(id))
       {
           LocalStorage.removeItem(id);
           this.updateProduitList();
       }
  }
  updateProduitList():void{
      this.carts.length = 0;
      this._produitService.getProduitList().subscribe(data => this.selectProduit(this,data));
  }
  
}
