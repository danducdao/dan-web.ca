<template>
    <section id="shopping-cart-basket-container">
        <div v-if="baskets.length > 0">
            <table class="table table-bordered" cellspacing="1" cellpadding="1">
                <thead>
                    <tr>
                      <th></th>
                      <th :class="center">Nom</th>
                      <th :class="center">Quantité</th>
                      <th :class="center">Prix</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="basket in baskets">
                        <td style="width:8%;"><a href="#" @click.prevent="removeItem(basket.id)">Supprimer</a></td>
                        <td>{{basket.nom}}</td>
                        <td :class="right" style="width:5%;">{{basket.quantite}}</td>
                        <td :class="right" style="width:8%;">{{basket.prix | currency}}</td>
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
  name: "ShoppingCartBasket",
  data() {
    return {
      baskets: [],
      center: { colCenter: true },
      right: { colRight: true },
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
          data => data.id === parseInt(shoppingCartId)
        );
      }
      this.localStorage.setItem("carts", this.baskets);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
  width: 50%;
}
</style>
