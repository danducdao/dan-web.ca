/*
* Program : ShoppingCartProduit component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit, Input } from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { IProduit } from 'src/interfaces/produit';
import { LocalStorage } from 'src/classes/localstorage';
import { ShoppingCart } from 'src/classes/shoppingcart';
import { ShoppingCartBasketComponent } from '../shopping-cart-basket/shopping-cart-basket.component';

@Component({
    selector: 'app-shopping-cart-produit',
    template: `
      <article>
       <div class="row show-grid" *ngIf="shoppingCartList.length > 0;else emptyCart">
           <div class="col-sm-2" style="max-height:220px;" *ngFor="let shoppingCart of shoppingCartList" >
               <div><img src="../assets/images/placeholder.gif" /></div>
               <div>{{shoppingCart.nom}}</div>
               <div>{{shoppingCart.prix | currency}}</div>
               <div>
                    <input [id]="shoppingCart._id" value="1" size="4"/>
               </div><br>
               <div>
                     <button type="submit" class="btn btn-success" (click)="onSubmit($event,shoppingCart._id)">
                         <i class="fa fa-check-square-o" style="font-size:18px;float:left;"></i>
                         <span style="margin-left:5px;font-weight:bold;font-size:12px;">Ajouter</span>
                     </button>
               </div>
           </div>
       </div>
       <ng-template #emptyCart>Aucun produit a été trouvé</ng-template>
      </article>
    `,
    styles: []
})
export class ShoppingCartProduitComponent implements OnInit{

    @Input() categorieId:string;
    @Input() shoppingCartBasket:ShoppingCartBasketComponent;

    public shoppingCartList:Array<IProduit> = [];

    constructor(private _shoppingCartService:ShoppingCartService) {}

    ngOnInit() {
          this._shoppingCartService.shoppingCartProduitList().subscribe(data => this.callback(this,data));
    }
    callback(obj:ShoppingCartProduitComponent,data)
    {
         this.shoppingCartList = data.filter((data:IProduit) => data.category[0]._id.indexOf(obj.categorieId) !== -1)
    }
    onSubmit(event,shoppingCartId)
    {
         let quantite:number = parseInt((<HTMLInputElement>document.getElementById(shoppingCartId)).value);
         if(!quantite)
         {
               alert('Désolé! Veuillez entrer une quantité');
               (<HTMLInputElement>document.getElementById(shoppingCartId)).focus();
               return;
         }
         let carts:Array<ShoppingCart> = [];
         let item:IProduit = this.shoppingCartList.filter(data => data._id.indexOf(shoppingCartId) !== -1)[0];
         let total:number = Number(item.prix) * quantite;
         if(!LocalStorage.itemExist('carts'))
         {
             carts.push(new ShoppingCart(item._id,
                                         quantite,
                                         item.prix,
                                         item.nom,
                                         total));
         }else{
             let that:any = this;
             carts = LocalStorage.getItem('carts');
             let itemTrouve:Array<ShoppingCart> = carts.filter(data => data._id.indexOf(shoppingCartId) !== -1);
             if(itemTrouve.length == 0)
             {
                  carts.push(new ShoppingCart(item._id,
                                              quantite,
                                              item.prix,
                                              item.nom,
                                              total));
             }else
             {
                  carts.map(function(value)
                  {
                     if(value._id.indexOf(shoppingCartId) !== -1)
                     {
                         value.quantite += quantite;
                         value.total += value.prix * value.quantite;
                         return value;
                     }
                  });
             }
          }
          this.shoppingCartBasket.saveCart(carts);
          event.preventDefault();
    }
}
