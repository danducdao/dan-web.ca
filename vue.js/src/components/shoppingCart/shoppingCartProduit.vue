<template>
    <section id="shopping-cart-product-container">
        <div class="row show-grid" v-if="shoppingCartList(categoryId).length > 0">
            <div class="col-sm-2" style="max-height:220px;" v-for="shoppingCart in shoppingCartList(categoryId)" >
                <div><img src="../../assets/images/placeholder.gif" /></div>
                <div>{{shoppingCart.nom}}</div>
                <div>{{shoppingCart.prix | currency}}</div>
                <div>
                    <input type="text" :id="shoppingCart.id" value="" size="4"/>
                </div><br>
                <div>
                    <button type="submit" class="btn btn-success" @click.prevent="onSubmit($event,shoppingCart.id)">
                        <i class="fa fa-check-square-o" style="font-size:18px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:12px;">Ajouter</span>
                    </button>
                </div>
            </div>
        </div>
        <div style="color:red;" v-else>Aucun produit a été trouvé</div>
    </section>
</template>

<script>
import { ShoppingCartService } from "../../services/shoppingCart";
import { ShoppingCart } from "../../classes/shoppingCart";
import { LocalStorage } from "../../classes/localstorage";
import { bus } from "../../main";

export default {
  name: "ShoppingCart",
  props: {
    categoryId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      shoppingCartService: new ShoppingCartService(),
      localStorage: new LocalStorage(),
      shoppingCartData: []
    };
  },

  created() {
    this.shoppingCartService
      .shoppingCartListe()
      .then(
        res =>
          Object.keys(res.body).length > 0
            ? (this.shoppingCartData = res.body)
            : "",
        err => console.log(err)
      );
  },
  methods: {
    shoppingCartList(categorieId) {
      return this.shoppingCartData.filter(
        res => res.categorie_id === parseInt(categorieId)
      );
    },
    onSubmit(event, shoppingCartId) {
      let input = document.getElementById(shoppingCartId);
      let quantite = parseInt(input.value);
      if (!quantite) {
        alert("Veuillez entrer une quantité");
        input.focus();
        return;
      }
      let carts = [];
      let item = this.shoppingCartData.filter(
        data => data.id === parseInt(shoppingCartId)
      )[0];
      let total = parseFloat(item.prix * quantite).toFixed(2);
      if (!this.localStorage.itemExist("carts")) {
        carts.push(
          new ShoppingCart(item.id, quantite, item.prix, item.nom, total)
        );
      } else {
        carts = this.localStorage.getItem("carts");
        let itemTrouve = carts.filter(
          data => data.id === parseInt(shoppingCartId)
        );
        if (itemTrouve.length == 0) {
          carts.push(
            new ShoppingCart(item.id, quantite, item.prix, item.nom, total)
          );
        } else {
          carts.map(function(value) {
            if (value.id === parseInt(shoppingCartId)) {
              value.quantite += quantite;
              value.total = parseFloat(value.prix * value.quantite).toFixed(2);
              return value;
            }
          });
        }
      }
      bus.$emit("saveCart", carts);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
