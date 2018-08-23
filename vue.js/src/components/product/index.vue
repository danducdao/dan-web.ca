<template>
    <section id="product-index-container">
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12">
                <router-link :to="{ path: 'new'}" append class="btn btn-primary">Nouveau</router-link>
            </div>
        </div>
        <template v-if="produits.length > 0">
            <div class="row" style="margin-bottom:20px;">
                <div class="col-lg-9">
                    <span style="font-size:25px;"><strong>Liste des produits</strong></span>
                </div>
            </div>
            <div class="row">
                <table class="table table-bordered" cellspacing="1" cellpadding="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th :class="center">Nom</th>
                            <th :class="center">Catégorie</th>
                            <th :class="center">Fournisseur</th>
                            <th :class="center">Prix</th>
                            <th :class="center">Quantité par unité</th>
                            <th :class="center">Quantité en stock</th>
                            <th :class="center">Quantité commandée</th>
                            <th :class="center">Réapprovisionnement</th>
                            <th :class="center">Discontinue</th>
                            <th :class="center">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="produit in produits">
                            <td v-bind:class="center" >
                                <span v-if='produit.active'>
                                    <a href="#" @click.prevent="removeProduit(produit.id)">Supprimer</a>
                                </span>
                            </td>
                            <td v-bind:class="center"><router-link :to="{ path: 'produit/' + produit.id}">Modifier</router-link></td>
                            <td>{{ produit.nom }}</td>
                            <td>{{ produit.categorie_nom }}</td>
                            <td>{{ produit.fournisseur_nom }}</td>
                            <td v-bind:class="right">
                                <span v-if="produit.prix">{{ produit.prix | currency}}</span>
                            </td>
                            <td v-bind:class="right">{{ produit.quantiteParUnite }}</td>
                            <td v-bind:class="right">{{ produit.quantiteEnStock }}</td>
                            <td v-bind:class="right">{{ produit.quantiteCommande }}</td>
                            <td v-bind:class="right">{{ produit.reapprovisionnement }}</td>
                            <td v-bind:class="center">
                                <span v-if='produit.discontinue'><i class='fa fa-check-square'></i></span>
                            </td>
                            <td v-bind:class="center">
                                <span v-if='produit.active'><i class='fa fa-check-square'></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </template>
    </section>
</template>

<script>
import { ProduitService } from "../../services/produit";
import { htmlTag } from "../../inc/helper";

export default {
  name: "ListeProduit",
  data() {
    return {
      produits: [],
      center: { colCenter: true },
      right: { colRight: true },
      produitService: new ProduitService()
    };
  },
  methods: {
    removeProduit(id) {
      if (confirm("Êtes-vous sûre de vouloir supprimer ce produit?")) {
        this.produitService.removeProduitById(id).then(res => {
          if (res.body.success) {
            alert("Cet item a été supprimé avec succès");
            this.loadData();
          } else {
            alert("Cet item a été supprimé avec sans succès");
          }
        });
      }
    },

    loadData() {
      this.produitService
        .produitListe()
        .then(res => (this.produits = res.body));
    }
  },
  created() {
    this.loadData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
