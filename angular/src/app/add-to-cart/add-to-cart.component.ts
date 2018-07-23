/*
* Program : addTocart component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { LocalStorage } from 'src/classes/localstorage';
import { ShoppingCart } from 'src/classes/shoppingcart';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit {

  public carts:Array<ShoppingCart> = [];
  public TPS:number = 9.15;
  public TVQ:number = 7.13;
  public center:any = {colCenter:true};
  public right:any = {colRight:true};

  constructor() { }

  ngOnInit() {
      this.carts = LocalStorage.getItem('carts');
  }
  Total()
  {
     return this.calcTotal();
  }
  TaxeTPS()
  {
     return this.calcTPS();
  }
  TaxeTVQ()
  {
     return this.calcTVQ();
  }
  GrandeTotal()
  {
      return this.calcTotal() + this.calcTPS() + this.calcTVQ();
  }
  calcTotal()
  {
      var total:number = 0;
      var len = this.carts.length;
      for(var i=0;i<len;i++)
      {
          total += this.carts[i].total;
      }
      return total;
  }
  calcTPS()
  {
      return (this.calcTotal() * this.TPS) / 100;
  }
  calcTVQ()
  {
      return (this.calcTotal() * this.TVQ) / 100;
  }
  updateCart(cartId)
  {
      var quantite = parseInt((<HTMLInputElement>document.getElementById(cartId)).value);
      if(!quantite)
      {
          alert('Désolé! Veuillez entrer une quantité');
          return;
      }
      this.carts.map(function(value){
           if(value._id.indexOf(cartId) !== -1)
           {
                value.quantite = quantite;
                value.total = value.prix * value.quantite;
                return value;
           }
      });
      LocalStorage.setItem('carts',this.carts);
   }
   removeCart(cartId)
   {
      if(confirm('Êtes-vous sûre de vouloir supprimer ce item?'))
      {
          this.carts = this.carts.filter(data => data._id.indexOf(cartId) == -1);
          LocalStorage.setItem('carts',this.carts);
      }
   }
}
