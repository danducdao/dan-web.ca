<template>
    <article>
        <div class="hpanel hblue">
            <div class="panel-heading hbuilt"><strong>Votre panier</strong></div>
            <div class="panel-body">
                <div class="col-sm-8" v-if="carts.length > 0">
                    <table class="table table-bordered" role="grid">
                        <thead>
                            <tr>
                                <th v-for="header in ['Nom','Quantité','Prix','Total','']" :class="center">{{header}}</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr v-for="cart in carts">
                                <td>{{cart.nom}}</td>
                                <td :class="right" style="width:10%;"><input type="text" :id="cart._id" size="3" :value="cart.quantite"></td>
                                <td :class="right" style="width:10%;">{{ cart.prix | currency }}</td>
                                <td :class="right" style="width:20%;">{{ cart.total | currency }}</td>
                                <td style="width:18%;">
                                    <button type="submit" class="btn btn-success" @click="updateCart(cart._id)">Modifier</button>&nbsp;
                                    <button type="submit" class="btn btn-danger" @click="removeCart(cart._id)">Enlever</button>
                                </td>
                        </tr>
                        <tr>
                               <td colspan="3"></td>
                               <td>
                                   <table class="table table-border">
                                       <tr>
                                           <td><strong>Total:</strong></td>
                                           <td style="text-align:right;"><strong>{{ Total | currency}}</strong></td>
                                       </tr>
                                       <tr>
                                           <td><strong>TPS({{TPS}}%):</strong></td>
                                           <td style="text-align:right;"><strong>{{ TaxeTPS | currency}}</strong></td>
                                       </tr>
                                       <tr>
                                           <td><strong>TVQ({{TVQ}}%):</strong></td>
                                           <td style="text-align:right;"><strong>{{ TaxeTVQ | currency}}</strong></td>
                                       </tr>
                                       <tr>
                                           <td><strong>Grande Total:</strong></td>
                                           <td style="text-align:right;"><strong>{{ GrandeTotal | currency}}</strong></td>
                                       </tr>
                                    </table>
                               </td>
                        </tr>       
                        </tbody>
                    </table>
                </div>
                <div v-else>Votre panier est vide</div>
            </div>
        </div>  
        <div>
            <router-link :to="{ path: '/shoppingcart'}" append class="btn btn-info">
                <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                <span style="margin-left:5px;font-weight:bold;font-size:18px;">Continue magasiner</span>
            </router-link>
        </div>
    </article>
</template>

<script>

import { LocalStorage } from '../../classes/localstorage';

export default {  
    name: 'AddToCart',
   
    data () {
        return {
            carts : [],
            localStorage : new LocalStorage(),
            TPS : 9.15,
            TVQ : 7.13,
            center:{colCenter:true},
            right:{colRight:true},
        }
    },
    created()
    {
        this.carts = this.localStorage.getItem('carts');
    },
    computed : {
          Total()
          {
             return this.calcTotal();
          },
          TaxeTPS()
          {
             return this.calcTPS();
          },
          TaxeTVQ()
          {
             return this.calcTVQ();
          },
          GrandeTotal()
          {
              return parseFloat(this.calcTotal()) + parseFloat(this.calcTPS()) + parseFloat(this.calcTVQ());
          }
    },
    methods : {
        calcTotal()
        {
            var total = 0;
            var len = this.carts.length;
            for(var i=0;i<len;i++)
            {
                total += parseFloat(this.carts[i].total);
            }
            return total;
        },
        calcTPS()
        {
            return parseFloat((this.calcTotal() * this.TPS) / 100).toFixed(2);
        },
        calcTVQ()
        {
            return parseFloat((this.calcTotal() * this.TVQ) / 100).toFixed(2);
        },
        updateCart(cartId)
        {
            var quantite = parseInt(document.getElementById(cartId).value);
            if(!quantite)
            {
                alert('Désolé! Veuillez entrer une quantité');
                return;
            }
            this.carts.map(function(value){
                 if(value._id.indexOf(cartId) !== -1)
                 {
                      value.quantite = quantite;
                      value.total = parseFloat(value.prix * value.quantite);
                      return value;
                 }
            });
            this.localStorage.setItem('carts',this.carts);   
        },
        removeCart(cartId)
        {
            if(confirm('Êtes-vous sûre de vouloir supprimer ce item?'))
            {
                this.carts = this.carts.filter(data => data._id.indexOf(cartId) == -1);
                this.localStorage.setItem('carts',this.carts); 
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
