<template>
    <div>
        <article>
        <!--
            <div class="row" style="margin-bottom:20px;">
                <div class="col-lg-12">
                    <router-link :to="{ path: 'produit/'}" append class="btn btn-primary">Nouveau</router-link>
                </div>
            </div>
        -->
            <div class="row" style="margin-bottom:20px;">
                <div class="col-lg-9">
                    <span style="font-size:25px;"><strong>Liste des produits</strong></span>
                </div>
            </div>
            <div class="row">
                <table class="table table-bordered" cellspacing="1" cellpadding="1">
                    <thead>
                        <tr>
                            <th v-for="value in title" v-bind:class="center">{{value}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="produit in produits">
                        <!--
                            <td v-bind:class="center" ><a href="#">Supprimer</a></td>
                            <td v-bind:class="center"><router-link :to="{ path: 'produit/' + produit._id}" append>Modifier</router-link>
</td>
-->
                            <td>{{ produit.nom }}</td>
                            <td>{{ produit.category[0].nom }}</td>
                            <td>{{ produit.fournisseur.compagnie }}</td>
                            <td v-bind:class="right">{{ produit.quantite }}</td>
                            <td v-bind:class="right">{{ produit.prix | currency}}</td>
                            <td v-bind:class="right">{{ produit.quantiteRestante }}</td>
                            <td v-bind:class="right">{{ produit.quantiteCommande }}</td>
                            <td v-bind:class="right">{{ produit.reapprovisionnement }}</td>
                            <td v-bind:class="center">
                                <span v-html="htmlTag(produit.discontinue)"></span>
                            </td>
                            <td v-bind:class="center">
                                <span v-html="htmlTag(produit.active)"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </article>
    </div>
</template>

<script>

import { ProduitService } from '../../services/produit';
import { htmlTag } from '../../inc/helper';

export default {
    name: 'Liste',
    data () {
        return {
            produits:[],
            title: [
                    'Nom',
                    'Catégorie',
                    'Fournisseur',
                    'Quantité',
                    'Prix',
                    'Quantité restante',
                    'Quantité commandée',
                    'Réapprovisionnement',
                    'Discontinue',
                    'Active'
                ],
            center:{colCenter:true},
            right:{colRight:true}
        }
    },
    methods :{
        htmlTag : function(value)
        {
            return htmlTag(value);
        }
    },
    created() 
    {
        var produit = new ProduitService(this.$http);

        produit.produitListe().then(function(data)
        {
            var produits = data.body;
            this.produits = produits.length > 0?produits:"";
        });
    }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
