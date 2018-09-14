<template>
    <section>
        <div class="content">
            <div class="row">
                <div class="col-md-3">
                    <div class="hpanel col-md-12">
                        <div class="panel-heading hbuilt"><strong>Sélection</strong></div>
                        <div class="panel-body">
                            <label class="control-label" for="categoryId">Catégories</label>&nbsp;<span style="color:red;">*</span>
                            <select :class="{
                                                input_form_error:!$v.categoryId.$error,
                                                input_form_valid:!$v.categoryId.$invalid,
                                                'form-control':true
                                            }" 
                                        name="categoryId" 
                                        required
                                        v-model.trim="$v.categoryId.$model" @change="selectedItem">
                                <option :disabled="true" value="">--Sélectionner--</option>
                                <option v-for="categorie in categories" :value="categorie.id">{{categorie.nom}}</option>
                            </select>
                            <div v-if="$v.categoryId.$error">
                                <div v-if="!$v.categoryId.required" class="alert alert-danger">Catégorie est obligatoire</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-9">
                    <div class="hpanel col-md-7">
                        <div class="panel-heading hbuilt"><strong>Votre panier</strong></div>
                        <div class="panel-body">
                            <app-shopping-cart-basket></app-shopping-cart-basket>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row" v-if="shoppingCartData.length > 0">
                <div class="hpanel col-md-12">
                    <div class="panel-heading hbuilt"><strong>{{shoppingCartData[0].nom}}</strong></div>
                    <div class="panel-body">
                        <app-shopping-cart-produit v-bind:categoryId="shoppingCartData[0].id"></app-shopping-cart-produit>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import ShoppingCartProduit from "./shoppingCartProduit";
import ShoppingCartBasket from "./shoppingCartBasket";
import { CategorieService } from "../../services/categorie";
import { ShoppingCartService } from "../../services/shoppingCart";
import { required } from "vuelidate/lib/validators";

export default {
  name: "ShoppingCart",
  components: {
    "app-shopping-cart-produit": ShoppingCartProduit,
    "app-shopping-cart-basket": ShoppingCartBasket
  },
  data() {
    return {
      categories: [],
      shoppingCartData: [],
      categoryId: "",
      categorieService: new CategorieService(),
      shoppingCartService: new ShoppingCartService()
    };
  },
  created() {
    this.categorieService
      .categorieListe()
      .then(
        res =>
          Object.keys(res.body).length > 0 ? (this.categories = res.body) : "",
        err => console.log(err)
      );
  },
  methods: {
    selectedItem($event) {
      this.shoppingCartData = this.categories.filter(
        data => data.id === parseInt($event.target.value)
      );
    }
  },
  validations: {
    categoryId: {
      required
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
