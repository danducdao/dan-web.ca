<template>
    <section>
        <div class="row">
            <div class="col-md-3">
                <div class="hpanel hblue col-md-12">
                    <div class="panel-heading hbuilt"><strong>Sélection</strong></div>
                    <div class="panel-body">
                        <label class="control-label" for="categoryId">Catégories</label>&nbsp;<span style="color:red;">*</span>
                        <select class="form-control" name="categoryId" v-model.trim="$v.categoryId.$model">
                            <option :disabled="true" value="">--Sélectionner--</option>
                            <option v-for="categorie in categories" :value="categorie._id">{{categorie.nom}}</option>
                        </select>
                        <div v-if="$v.categoryId.$error">
                            <div v-if="!$v.categoryId.required" class="alert alert-danger">Catégorie est obligatoire</div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="hpanel hblue col-md-12">
                    <div class="panel-heading hbuilt"><strong>Votre panier</strong></div>
                    <div class="panel-body">
                        <app-shopping-cart-basket ></app-shopping-cart-basket>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="hpanel hblue col-md-12" v-for="categorie in filtreCategorie(categoryId)">
                <div class="panel-heading hbuilt"><strong>{{categorie.nom}}</strong></div>
                <div class="panel-body">
                    <app-shopping-cart-produit v-bind:categoryId="categorie._id"></app-shopping-cart-produit>
                </div>
            </div>
        </div>
    </section>
</template>

<script>

import ShoppingCartProduit from './shoppingCartProduit';
import ShoppingCartBasket from './shoppingCartBasket';
import { CategorieService } from '../../services/categorie';
import { ShoppingCartService } from '../../services/shoppingCart';
import { required } from 'vuelidate/lib/validators';

export default {  
    name: 'ShoppingCart',
    components : {
         'app-shopping-cart-produit' : ShoppingCartProduit,
         'app-shopping-cart-basket' : ShoppingCartBasket
    },
    data () {
        return {
            categories : [],
            shoppingCartData : [],
            carts : [],
            categoryId : "",
            categorieService : new CategorieService(this.$http),
            shoppingCartService : new ShoppingCartService(this.$http)
        }
    },
    created()
    {
        this.categorieService.categorieListe().then(function(data)
        {
            var categories = data.body;
            this.categories = categories.length > 0?categories:"";
        });

        this.shoppingCartService.shoppingCartListe().then(data => this.shoppingCartData = data.body);
    },
    methods : {
        filtreCategorie(categorieId)
        {
            if(categorieId)
            {
                var categorie = this.categories.filter(data => data._id.indexOf(categorieId) !== -1);
                return categorie.length > 0?categorie:"";
            }     
        }
    },
    validations : {
         categoryId : {
             required
         }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
