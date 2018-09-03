<template>
    <section id="product-index-container">
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
            <div class="row" v-if="!loading && produits.length > 0">
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
                            <td v-bind:class="right">{{ produit.quantite_par_unite }}</td>
                            <td v-bind:class="right">{{ produit.quantite_en_stock }}</td>
                            <td v-bind:class="right">{{ produit.quantite_commande }}</td>
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
            <div style="color:red;" v-else-if="!loading">Aucun produit a été trouvé</div>
            <div style="color:red;text-align:center;" v-else><img src="../../assets/images/ajax-loader.gif" /></div>
            
            
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
      produitService: new ProduitService(),
      loading: ""
    };
  },
  methods: {
    removeProduit(id) {
      if (confirm("Êtes-vous sûre de vouloir supprimer cet item?")) {
        this.produitService.removeProduitById(id).then(
          res => {
            if (res.body.success) {
              alert("Cet item a été supprimé avec succès");
              this.loadData();
            } else {
              alert("Cet item a été supprimé avec sans succès");
            }
          },
          err => console.log(err)
        );
      }
    },

    loadData() {
      this.produitService.produitListe().then(
        res => {
          if (Object.keys(res.body).length > 0) this.produits = res.body;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = true;
        }
      );
    }
  },
  created() {
    this.loading = true;
    this.loadData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
