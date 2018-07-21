/*
* Program : ShoppingCartProduit component
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { ShoppingCartService } from 'src/services/shopping-cart.service';
import { IProduit } from 'src/interfaces/produit';

@Component({
    selector: 'app-shopping-cart-produit',
    template: `
      <article>
       <div class="row show-grid">
           <div class="col-sm-2" style="max-height:190px;" *ngFor="let produit of produits" >
               <div><img src="../assets/images/placeholder.gif" /></div>
               <div>{{produit.nom}}</div>
               <div>{{produit.prix | currency}}</div>
               <div>
                    <input type="text" [name]="produit._id" [id]="produit._id" value="1" (keyup)="changeQty($event)" required >
                    <div style="display:none;" id="produit._id" class="alert alert-danger">
                          Nom contient seulement des caractères ou des caractères avec le tiret
                    </div>
                </div>
               <div>
                    <input type="checkbox" name="produit" [value]="produit._id" (change)="selectProduit($event)" >
               </div>
           </div>
       </div>
      </article>
    `,
    styles: []
})
export class ShoppingCartProduitComponent implements OnInit{

    @Input() categorieId:string;
    @Output() notify : EventEmitter<string[]> = new EventEmitter<string[]>();
    @Output() notifyQte : EventEmitter<string[]> = new EventEmitter<string[]>();
    public produits:IProduit[];
    public selectedProduit:string[] = [];
    public selectedQte:string[] = [];

    constructor(private _shoppingCartService:ShoppingCartService) { }

    ngOnInit() {
          this._shoppingCartService.shoppingCartProduitList().subscribe(data => this.produits = data.filter((data:IProduit) => data.category[0]._id.indexOf(this.categorieId) !== -1));
    }
    changeQty(event:any):void
    {
          let id:string = event.originalTarget.id;
          let qte:string = event.originalTarget.value;
          this.selectedProduit.forEach((item,index) => this.updateQty(item,id,qte,index));
    }
    selectProduit(event:any):void
    {
          let id:string = event.target.value;
          let qte:string = (<HTMLInputElement>document.getElementById(id)).value;

          if(event.originalTarget.checked)
          {
              this.selectedProduit.push( id );
              this.selectedQte.push(qte);
          }else{
              var index = this.selectedProduit.indexOf(id);
              if (index > -1) {
                   this.selectedProduit.splice(index, 1);
                   this.selectedQte.splice(index, 1);
              }
          }
          this.notify.emit(this.selectedProduit);
          this.notifyQte.emit(this.selectedQte);
    }
    updateQty(value:string,id:string,qte:string,index:number):void
    {
         if(value.indexOf(id) !== -1)
         {
            this.selectedQte[index] = String(parseInt(this.selectedQte[index]) + parseInt(qte));
         }
    }
}
