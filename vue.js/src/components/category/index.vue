<template>
  <section>
    <div class="normalheader">
       <div class="hpanel">
            <div class="panel-body">
               <h2 class="font-light m-b-xs">Admin - Catégorie</h2>
            </div>
        </div>
    </div>
    <div class="content">
        <div class="row">
            <div class="col-lg-12">
                <div class="hpanel">
                    <div class="panel-body">
                      <p>
                        <router-link :to="{ path: $route.path==='/admin'?'categorie/new':'new'}" append class="btn btn-primary">Nouveau</router-link>
                      </p>
                      <p v-if="!loading && categories.length > 0" class="table-responsive">
                          <table class="table table-bordered">
                              <thead>
                                  <tr>
                                      <th :style="{width:'5%'}"></th>
                                      <th :style="{width:'5%'}"></th>
                                      <th>Nom</th>
                                      <th>Description</th>
                                      <th>Image</th>
                                      <th>Active</th>
                                  </tr>
                              </thead>
                              <tbody>
                                  <tr v-for="(categorie,key) in categories" :key="key">
                                      <td>
                                        <span v-if='categorie.active === 1'>
                                          <a href="#" @click.prevent="removeCategorie(categorie.id)">Supprimer</a>
                                        </span>
                                      </td>
                                      <td>
                                        <router-link :to="{ path: 'categorie/' + categorie.id}">Modifier</router-link>
                                      </td>
                                      <td>{{categorie.nom}}</td>
                                      <td>{{categorie.description}}</td>
                                      <td :style="{textAlign:'center'}">
                                        <img :src="categorie.photo" :alt="categorie.photo" :style="imgStyle" />
                                      </td>
                                      <td :style="{textAlign:'center'}">
                                          <span v-if='categorie.active === 1'><i class='fa fa-check-square'></i></span>
                                      </td>
                                  </tr>
                              </tbody>
                          </table>
                      </p>
                      <p :style="{color:'red'}" v-else-if="!loading">Aucun catégorie a été trouvé</p>
                      <p :style="{color:'red',textAlign:'center'}" v-else><img src="../../assets/images/ajax-loader.gif" /></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
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
th {
  text-align: center;
}
</style>
