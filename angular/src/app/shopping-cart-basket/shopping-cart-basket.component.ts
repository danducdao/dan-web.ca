import { Component, OnInit } from '@angular/core';
import { ShoppingCart } from 'src/classes/shoppingcart';
import { LocalStorage } from 'src/classes/localstorage';

@Component({
  selector: 'app-shopping-cart-basket',
  template: `
              <article>
                    <div class="hpanel hblue">
                        <div class="panel-heading hbuilt"><strong>Votre Panier</strong></div>
                        <div class="panel-body" *ngIf="baskets.length > 0;else emptyCart">
                            <table class="table table-bordered" cellspacing="1" cellpadding="1">
                                <thead>
                                    <tr>
                                        <th *ngFor="let value of ['','Nom','Quantité','Prix']">{{value}}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr *ngFor="let basket of baskets">
                                        <td style="width:10%;"><a href="#" (click)="removeItem($event,basket._id)">Remove</a></td>
                                        <td>{{basket.nom}}</td>
                                        <td style="width:13%;">{{basket.quantite}}</td>
                                        <td style="width:13%;">{{basket.prix | currency}}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <div>
                                 <a routerLink="/addtocart" class="btn btn-success">
                                      <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                                      <span style="margin-left:5px;font-weight:bold;font-size:18px;">Checkout</span>
                                 </a>
                            </div>
                        </div>
                        <ng-template #emptyCart>
                              <div class="panel-body">Votre panier est vide</div>
                        </ng-template>
                    </div>
                </article>
            `,
  styles: []
})
export class ShoppingCartBasketComponent implements OnInit {

  public baskets:Array<ShoppingCart> = [];

  constructor() { }

  ngOnInit() {
      this.baskets = LocalStorage.getItem('carts');
  }
  saveCart(carts:Array<ShoppingCart>)
  {
      this.baskets = carts;
      LocalStorage.setItem('carts',carts);
  }
  removeItem(event,shoppingCartId)
  {
      if(this.baskets.length == 1)
      {
          this.baskets = [];
      }else{
          this.baskets = this.baskets.filter(data => data._id.indexOf(shoppingCartId) == -1)
      }
      LocalStorage.setItem('carts',this.baskets);
      event.preventDefault();
  }
}
