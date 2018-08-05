<template>
    <section id="category-index-container">
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-12">
                <router-link :to="{ path: $route.path==='/admin'?'categorie/new':'new'}" append class="btn btn-primary">Nouveau</router-link>
            </div>
        </div>
        <div class="row" style="margin-bottom:20px;">
            <div class="col-lg-9">
                <span style="font-size:25px;"><strong>Liste des catégories</strong></span>
            </div>
        </div>
        <div class="row">
                <table class="table table-bordered" cellspacing="1" cellpadding="1">
                    <thead>
                        <tr>
                            <th v-for="value in ['','','Nom','Description','Images','Active']" v-bind:class="center">{{value}}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="categorie in categories">
                            <td :class="center" :style="verticalAlign"><a href="#"  @click.prevent="removeCategorie(categorie._id)">Supprimer</a></td>
                            <td :class="center" :style="verticalAlign"><router-link :to="{ path: $route.path==='/admin'?'categorie/' + categorie._id:categorie._id}" append>Modifier</router-link></td>
                            <td :style="verticalAlign">{{categorie.nom}}</td>
                            <td :style="verticalAlign">{{categorie.description}}</td>
                            <td :class="center"><img :src="categorie.photo" :alt="categorie.photo" :style="imgStyle" /></td>
                            <td :class="center" :style="verticalAlign">
                                <span v-html="htmlTag(categorie.active)"></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
    </section>
</template>

<script>
import { CategorieService } from "../../services/categorie";
import { ProduitService } from "../../services/produit";
import { htmlTag } from "../../inc/helper";

export default {
  name: "ListeCategorie",
  data() {
    return {
      categories: [],
      center: { colCenter: true },
      categorieService: new CategorieService(this.$http),
      produitService: new ProduitService(this.$http),
      imgStyle: {
        width: "50px",
        margin: "2px",
        borderRadius: "10px"
      },
      verticalAlign: { verticalAlign: "middle" }
    };
  },
  created() {
    this.categorieService.categorieListe().then(function(data) {
      var categories = data.body;
      this.categories = categories.length > 0 ? categories : "";
    });
  },
  methods: {
    htmlTag: function(value) {
      return htmlTag(value);
    },
    removeCategorie(categorieId) {
      if (confirm("Êtes-vous sûre de vouloir supprimer cette catégorie?")) {
        this.categorieService
          .removeCategorieById(categorieId)
          .then(data => this.responseRemoveCategorie(this, data.body));
      }
    },
    responseRemoveCategorie(obj, oldCategorie) {
      if (oldCategorie) {
        alert("Félicitation! Catégorie a été supprimée avec succès");
        obj.categorieService
          .categorieListe()
          .then(data =>
            obj.responseCategorieList(obj, data.body, oldCategorie)
          );
      } else {
        alert("Désolé! Catégorie a été supprimée avec sans succès");
      }
    },
    responseCategorieList(obj, categories, oldCategorie) {
      obj.categories = categories;
      obj.produitService
        .produitListe()
        .then(data => obj.suppimerProduit(obj, data.body, oldCategorie));
    },
    suppimerProduit(obj, produitBD, oldCategorie) {
      var produits = produitBD.filter(
        data => data.category[0]._id == oldCategorie._id
      );
      if (produits.length > 0) {
        var that = obj;
        produits.forEach(function(produit) {
          that.produitService.removeProduitById(produit._id).then(data => data);
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
