<template>
    <article>
        <div class="form-group col-sm-2" :class="{ 'form-group--error': $v.categoryId.$error }">
            <label class="form__label">Catégories</label>
            <select class="form-control" v-model.trim="$v.categoryId.$model">
                <option :disabled="true" value="">--Sélectionner--</option>
                <option v-for="categorie in categories" :value="categorie._id">{{categorie.nom}}</option>
            </select>
            <div v-if="!$v.categoryId.required" class="alert alert-danger">Catégorie est obligatoire</div> 
        </div>
        <div class="col-lg-12">
            <app-shopping-cart-basket ></app-shopping-cart-basket>
        </div>
        <div class="col-lg-12">
            <div class="hpanel hblue" v-for="categorie in filtreCategorie(categoryId)">
                <div class="panel-heading hbuilt"><strong>{{categorie.nom}}</strong></div>
                <div class="panel-body">
                    <app-shopping-cart-produit v-bind:categoryId="categorie._id"></app-shopping-cart-produit>
                </div>
            </div>
        </div>
    </article>
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
