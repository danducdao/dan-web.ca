<template>
    <section>
        <div v-if="baskets.length > 0">
            <table class="table table-bordered" :style="{width:'100%'}">
                <thead>
                    <tr>
                      <th></th>
                      <th :style="{textAlign:'center'}">Nom</th>
                      <th :style="{textAlign:'center'}">Quantité</th>
                      <th :style="{textAlign:'center'}">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(basket,key) in baskets" v-bind:key="key">
                        <td :style="{width:'8%'}"><a href="#" @click.prevent="removeItem(basket.id)">Supprimer</a></td>
                        <td>{{basket.nom}}</td>
                        <td :style="{textAlign:'right',width:'5%'}">{{basket.quantite}}</td>
                        <td :style="{textAlign:'right'}">{{basket.prix | currency}}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <router-link :to="{ path:'/addtocart'}" append class="btn btn-success">
                    <i class="fa fa-check-square-o" :style="{fontSize:'24px',float:'left'}"></i>
                    <span :style="{marginLeft:'5px',fontWeight:'bold',fontSize:'18px'}">Checkout</span>
                </router-link>
            </div>
        </div>
        <div v-else>Votre panier est vide</div>
    </section>
</template>

<script>
import { LocalStorage } from "../../classes/localstorage";
import { bus } from "../../main";

export default {
  data() {
    return {
      baskets: [],
      localStorage: new LocalStorage()
    };
  },
  created() {
    this.baskets = this.localStorage.getItem("carts");
    bus.$on("saveCart", data => this.callback(data));
  },
  methods: {
    callback(data) {
      this.baskets = data;
      this.localStorage.setItem("carts", this.baskets);
    },
    removeItem(shoppingCartId) {
      if (this.baskets.length == 1) {
        this.baskets = [];
      } else {
        this.baskets = this.baskets.filter(
          data => data.id !== parseInt(shoppingCartId)
        );
      }
      this.localStorage.setItem("carts", this.baskets);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
