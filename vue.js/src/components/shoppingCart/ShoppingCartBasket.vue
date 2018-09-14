<template>
    <section>
        <div v-if="baskets.length > 0">
            <table class="table table-bordered" style="width:100%;">
                <thead>
                    <tr>
                      <th></th>
                      <th :style="{'text-align':'center'}">Nom</th>
                      <th :style="{'text-align':'center'}">Quantité</th>
                      <th :style="{'text-align':'center'}">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="basket in baskets">
                        <td style="width:8%;"><a href="#" @click.prevent="removeItem(basket.id)">Supprimer</a></td>
                        <td>{{basket.nom}}</td>
                        <td :style="{'text-align':'right'}" style="width:5%;">{{basket.quantite}}</td>
                        <td :style="{'text-align':'right'}">{{basket.prix | currency}}</td>
                    </tr>
                </tbody>
            </table>
            <div>
                <router-link :to="{ path: '/addtocart'}" append class="btn btn-success">
                    <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                    <span style="margin-left:5px;font-weight:bold;font-size:18px;">Checkout</span>
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
