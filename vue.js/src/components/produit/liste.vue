<template>
    <div>
        <article>
            <div class="row" style="margin-bottom:20px;">
                <div class="col-lg-12">
                    <router-link :to="{ path: 'new'}" append class="btn btn-primary">Nouveau</router-link>
                </div>
            </div>
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
                            <td v-bind:class="center" ><a href="#" @click.prevent="removeProduit(produit._id)">Supprimer</a></td>
                            <td v-bind:class="center"><router-link :to="{ path: produit._id}" append>Modifier</router-link></td>
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
    name: 'ListeProduit',
    data () {
        return {
            produits:[],
            title: [
                    '',
                    '',
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
            right:{colRight:true},
            produitService : new ProduitService(this.$http)
        }
    },
    methods :{
        htmlTag : function(value)
        {
            return htmlTag(value);
        },
        removeProduit(produitId)
        {
            if(confirm("Êtes-vous sûre de vouloir supprimer ce produit?"))
            {
                this.produitService.removeProduitById(produitId).then(data => data?this.response(this):alert('Félicitation! Produit a été supprimé avec sans succès'));
            }
        },
        response(obj)
        {
            alert('Félicitation! Produit a été supprimé avec succès');
            obj.produitService.produitListe().then( data => obj.produits = data.body);
        }
    },
    created() 
    {
        this.produitService.produitListe().then(function(data)
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
