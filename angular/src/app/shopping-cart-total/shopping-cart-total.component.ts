import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-shopping-cart-total',
  template: `
      <article style="text-align:right;">
          <div class="row">
               <div class="col-sm-12">
                    <strong>Total : {{total | currency}} </strong>
               </div>
          </div>
          <div class="row">
               <div class="col-sm-12">
                    <strong>TPS (8%) : {{ tps | currency}}</strong>
               </div>
          </div>
          <div class="row">
               <div class="col-sm-12">
                    <strong>TVQ(9%) : {{tvq | currency}}</strong>
               </div>
          </div>
          <div class="row">
               <div class="col-sm-12">
                    <strong>Grand Total : {{grandTotal | currency}}</strong>
               </div>
          </div>
      </article>
  `,
  styles: []
})
export class ShoppingCartTotalComponent implements OnInit {

  @Input() total:number;
  public tps:number;
  public tvq:number;
  public grandTotal:number;

  constructor() { }

  ngOnInit() {}
  
  ngOnChanges():void
  {
        this.tps = Math.round((this.total * 8) / 100);
        this.tvq = Math.round((this.total * 9) / 100);
        this.grandTotal = Math.round(this.total + this.tps + this.tvq);
  }

}
