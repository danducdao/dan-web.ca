<template>
    <article>
        <div class="row show-grid" v-if="itemExiste(categoryId)">
            <div class="col-sm-2" style="max-height:220px;" v-for="shoppingCart in shoppingCartList(categoryId)" >
                <div><img src="../../assets/images/placeholder.gif" /></div>
                <div>{{shoppingCart.nom}}</div>
                <div>{{shoppingCart.prix | currency}}</div>
                <div>
                    <input type="text" :id="shoppingCart._id" value="1" size="4"/>
                </div><br>
                <div>
                    <button type="submit" class="btn btn-success" @click.prevent="onSubmit($event,shoppingCart._id)">
                        <i class="fa fa-check-square-o" style="font-size:18px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:12px;">Ajouter</span>
                    </button>
                </div>
            </div>
        </div>
        <div style="color:red;" v-else>Aucun produit a été trouvé</div>
    </article>
</template>

<script>

import { ShoppingCartService } from '../../services/shoppingCart';
import { ShoppingCart } from '../../classes/shoppingCart';
import { LocalStorage } from '../../classes/localstorage';
import { bus } from '../../main';

export default {
    name: 'ShoppingCart',
    props : {
        categoryId : {
            type : String,
            required : true
        }
    },
    data () {
        return {
            shoppingCartService : new ShoppingCartService(this.$http),
            localStorage : new LocalStorage(),
            shoppingCartData : []
        }
    },
    created() 
    {
        this.shoppingCartService.shoppingCartListe().then(data => this.response(this,data.body));
    
        bus.$on('removeItem',data => this.callback(data));
    },
    methods : {
        shoppingCartList(categorieId)
        {
            return this.shoppingCartData.filter(produit => produit.category[0]._id.indexOf(categorieId) !== -1);
        },
        response(obj,produits)
        {
            obj.shoppingCartData = produits.length > 0?produits : "";
        },
        itemExiste(categorieId)
        {
            return this.shoppingCartList(categorieId).length > 0;
        },
        onSubmit(event,shoppingCartId)
        {
            var quantite = parseInt(document.getElementById(shoppingCartId).value);
            if(!quantite)
            {
                alert('Désolé! Veuillez entrer une quantité');
                document.getElementById(shoppingCartId).focus();
                return;
            }
            var carts = [];
            var item  = this.shoppingCartData.filter(data => data._id.indexOf(shoppingCartId) !== -1)[0];
            var total = parseFloat(item.prix * quantite).toFixed(2);
            if(!this.localStorage.itemExist('carts'))
            {
                carts.push(new ShoppingCart(item._id,
                                            quantite,
                                            item.prix,
                                            item.nom,
                                            total));
            }else
            {
                var that = this;
                carts = this.localStorage.getItem('carts');
                var itemTrouve = carts.filter(data => data._id.indexOf(shoppingCartId) !== -1);
                if(itemTrouve.length == 0)
                {
                    carts.push(new ShoppingCart(item._id,
                                                quantite,
                                                item.prix,
                                                item.nom,
                                                total));
                }else{
                    carts.map(function(value)
                    {
                        if(value._id.indexOf(shoppingCartId) !== -1)
                        {
                            value.quantite += quantite;
                            value.total = parseFloat(value.prix * value.quantite).toFixed(2);
                            return value;
                        }    
                    });
                }
            }
            bus.$emit('saveCart',carts);
        }
    } 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
