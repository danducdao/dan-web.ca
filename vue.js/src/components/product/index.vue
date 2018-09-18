<template>
   <section>
       <div class="normalheader">
            <div class="hpanel">
                <div class="panel-body">
                <h2 class="font-light m-b-xs">Admin - Produit</h2>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="row">
                <div class="col-lg-12">
                    <div class="hpanel">
                        <div class="panel-body">
                            <div class="row" >
                                <div class="col-lg-4"  >
                                    <app-search :search-criteria="searchCriteria" :items="produits" :name="'Produit'" @refreshItems="refreshItems($event)"></app-search> 
                                </div>
                            </div>
                            <p>
                                 <router-link :to="{ path: 'new'}" append class="btn btn-primary">Nouveau</router-link>
                            </p>
                            <p v-if="!loading && produits.length > 0" class="table-responsive">
                                <table class="table table-bordered">
                                    <thead>
                                        <tr>
                                            <th></th>
                                            <th></th>
                                            <th>Nom</th>
                                            <th>Catégorie</th>
                                            <th>Fournisseur</th>
                                            <th>Prix</th>
                                            <th>Quantité par unité</th>
                                            <th>Quantité en stock</th>
                                            <th>Quantité commandée</th>
                                            <th>Réapprovisionnement</th>
                                            <th>Discontinue</th>
                                            <th>Active</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="produit in produitList">
                                            <td>
                                                <span v-if='produit.active'>
                                                    <a href="#" @click.prevent="removeProduit(produit.id)">Supprimer</a>
                                                </span>
                                            </td>
                                            <td><router-link :to="{ path: 'produit/' + produit.id}">Modifier</router-link></td>
                                            <td>{{ produit.nom }}</td>
                                            <td>{{ produit.categorie_nom }}</td>
                                            <td>{{ produit.fournisseur_nom }}</td>
                                            <td :style="{'text-align':'right'}">
                                                <span v-if="produit.prix">{{ produit.prix | currency}}</span>
                                            </td>
                                            <td :style="{'text-align':'right'}">{{ produit.quantite_par_unite }}</td>
                                            <td :style="{'text-align':'right'}">{{ produit.quantite_en_stock }}</td>
                                            <td :style="{'text-align':'right'}">{{ produit.quantite_commande }}</td>
                                            <td :style="{'text-align':'right'}">{{ produit.reapprovisionnement }}</td>
                                            <td :style="{'text-align':'center'}">
                                                <span v-if='produit.discontinue'><i class='fa fa-check-square'></i></span>
                                            </td>
                                            <td :style="{'text-align':'center'}">
                                                <span v-if='produit.active'><i class='fa fa-check-square'></i></span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </p>
                            <p style="color:red;" v-else-if="!loading">Aucun produit a été trouvé</p>
                            <p style="color:red;text-align:center;" v-else><img src="../../assets/images/ajax-loader.gif" /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   </section>
</template>

<script>
import { ProduitService } from "../../services/produit";
import { htmlTag } from "../../inc/helper";
import searchComponent from "../search";

export default {
  components: {
    "app-search": searchComponent
  },
  data() {
    return {
      produits: [],
      produitList:[],
      produitService: new ProduitService(),
      loading: "",
      searchCriteria:[ 
                        {name:"nom", value:"0",text:"Nom",checked:true,colType:"string"},
                        {name:"categorie_nom", value:"1",text:"Catégorie",checked:false,colType:"string"},
                        {name:"quantite_en_stock", value:"2",text:"Quantité en stock",checked:false,colType:"number"},
                        {name:"prix", value:"3",text:"Prix",checked:false,colType:"number"}
                    ]
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
          if (Object.keys(res.body).length > 0){
              this.produitList = this.produits = res.body;
          } 
          this.loading = false;
        },
        err => {
          console.log(err);
          this.loading = true;
        }
      );
    },
    refreshItems(items){
        this.produitList = items;
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
th{
    text-align:center;
}

</style>
