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
        <div class="row" v-if="!loading && categories.length > 0">
                <table class="table table-bordered" cellspacing="1" cellpadding="1">
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th :class="center">Nom</th>
                            <th :class="center">Description</th>
                            <th :class="center">Image</th>
                            <th :class="center">Active</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="categorie in categories">
                            <td :class="center" :style="verticalAlign">
                              <span v-if='categorie.active === 1'>
                                <a href="#" @click.prevent="removeCategorie(categorie.id)">Supprimer</a>
                              </span>
                            </td>
                            <td :class="center" :style="verticalAlign">
                              <router-link :to="{ path: 'categorie/' + categorie.id}">Modifier</router-link>
                            </td>
                            <td :style="verticalAlign">{{categorie.nom}}</td>
                            <td :style="verticalAlign">{{categorie.description}}</td>
                            <td :class="center"><img :src="categorie.photo" :alt="categorie.photo" :style="imgStyle" /></td>
                            <td :class="center" :style="verticalAlign">
                                <span v-if='categorie.active === 1'><i class='fa fa-check-square'></i></span>
                            </td>
                        </tr>
                    </tbody>
                </table>
        </div>
        <div style="color:red;" v-else-if="!loading">Aucun catégorie a été trouvé</div>
        <div style="color:red;text-align:center;" v-else><img src="../../assets/images/ajax-loader.gif" /></div>
    </section>
</template>

<script>
import { CategorieService } from "../../services/categorie";
import { ProduitService } from "../../services/produit";

export default {
  name: "ListeCategorie",
  data() {
    return {
      categories: [],
      center: { colCenter: true },
      categorieService: new CategorieService(),
      produitService: new ProduitService(this.$http),
      imgStyle: {
        width: "50px",
        margin: "2px",
        borderRadius: "10px"
      },
      verticalAlign: { verticalAlign: "middle" },
      loading: ""
    };
  },
  created() {
    this.loading = true;
    this.loadData();
  },
  methods: {
    removeCategorie(categorieId) {
      if (confirm("Êtes-vous sûre de vouloir supprimer cet item?")) {
        this.categorieService.removeCategorieById(categorieId).then(
          res => {
            if (res.body.success) {
              alert("Catégorie a été supprimée avec succès");
              this.loadData();
            } else {
              alert("Catégorie a été supprimée avec sans succès");
            }
          },
          err => console.log(err)
        );
      }
    },
    loadData() {
      this.categorieService.categorieListe().then(
        res => {
          if (Object.keys(res.body).length > 0) this.categories = res.body;
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = true;
        }
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
