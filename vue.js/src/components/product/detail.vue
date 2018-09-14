<template>
  <section>
    <form v-on:submit.prevent="onSubmit">
      <div class="normalheader">
          <div class="hpanel">
              <div class="panel-body">
                  <h2><em>{{isAdd?'Ajouter':'Modifier'}} produit</em></h2>
              </div>
          </div>
      </div>
      <div class="content">
            <div class="row">
                <div class="col-lg-4">
                    <div class="hpanel">
                        <div class="panel-heading hbuilt"><strong>Information</strong></div>
                        <div class="panel-body">
                            <p>
                              <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                              <input type="text" 
                                     name="nom" 
                                     v-input-bar-color-error=[!$v.model.nom.$error,!$v.model.nom.$invalid]
                                     required 
                                     v-model.trim="$v.model.nom.$model"/>
                              <div v-if="$v.model.nom.$error && !$v.model.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                              <div v-if="!$v.model.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                            </p>
                            <p>
                              <label class="control-label" for="prix">Prix</label>
                              <input type="text" 
                                     name="prix" 
                                     v-input-bar-color-error=[!$v.model.prix.decimal,!$v.model.prix.$invalid]
                                     v-model.trim="$v.model.prix.$model"/>
                              <div v-if="!$v.model.prix.decimal" class="alert alert-danger">Prix doit être décimal</div>
                            </p>
                            <p>
                              <label class="control-label" for="categorie">Catégories</label>&nbsp;<span style="color:red;">*</span>
                              <select name="categorie" 
                                      v-input-bar-color-error=[true,!$v.model.categorie_id.$invalid]
                                      v-model.trim="$v.model.categorie_id.$model">
                                  <option :disabled="true" value="">--Sélectionner--</option>
                                  <option v-for="categorie in categories" :value="categorie.id">{{categorie.nom}}</option>
                              </select>
                              <div v-if="$v.model.categorie_id.$error && !$v.model.categorie_id.required" class="alert alert-danger">Catégorie est obligatoire</div>
                            </p>
                            <p>
                              <label class="control-label" for="founisseurId">Fournisseurs</label>&nbsp;<span style="color:red;">*</span>
                              <select name="founisseurId" 
                                      v-input-bar-color-error=[true,!$v.model.fournisseur_id.$invalid]
                                      v-model.trim="$v.model.fournisseur_id.$model">
                                  <option :disabled="true" value="">--Sélectionner--</option>
                                  <option v-for="fournisseur in fournisseurs" :value="fournisseur.id">{{fournisseur.nom}}</option>
                              </select>
                              <div v-if="$v.model.fournisseur_id.$error && !$v.model.fournisseur_id.required" class="alert alert-danger">Fournisseur est obligatoire</div> 
                            </p>
                            <p>
                              <label class="control-label" for="reapprovisionnement">Réapprovisionnement</label>
                              <input  type="text"
                                      name="reapprovisionnement"  
                                      v-input-bar-color-error=[!$v.model.reapprovisionnement.numeric,!$v.model.reapprovisionnement.$invalid]
                                      v-model.trim="$v.model.reapprovisionnement.$model"/>
                              <div v-if="!$v.model.reapprovisionnement.numeric" class="alert alert-danger">Réapprovisionnement doit être digit</div>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4">
                    <div class="hpanel">
                        <div class="panel-heading hbuilt"><strong>Quantité</strong></div>
                        <div class="panel-body">
                            <p>
                              <label class="control-label" for="quantite_par_unite">Par unité</label>
                              <input  type="text" 
                                      name="quantite_par_unite" 
                                      class="form-control"
                                      v-model.trim="model.quantite_par_unite"/>
                            </p>
                            <p>
                              <label class="control-label" for="quantite_en_stock">En stock</label>
                              <input  type="text" 
                                      name="quantite_en_stock" 
                                      v-input-bar-color-error=[!$v.model.quantite_en_stock.numeric,!$v.model.quantite_en_stock.$invalid]
                                      v-model.trim="$v.model.quantite_en_stock.$model"/>
                              <div v-if="!$v.model.quantite_en_stock.numeric" class="alert alert-danger">Quantité doit être digit</div>
                            </p>
                            <p>
                              <label class="control-label" for="quantite_commande">Commandée</label>
                              <input type="text" 
                                      name="quantite_commande"
                                      v-input-bar-color-error=[!$v.model.quantite_commande.numeric,!$v.model.quantite_commande.$invalid]
                                      v-model.trim="$v.model.quantite_commande.$model"/>
                              <div v-if="!$v.model.quantite_commande.numeric" class="alert alert-danger">Quantité commandée doit être digit</div>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4" v-if="!isAdd">
                    <div class="row" >
                      <div class="col-lg-12">
                        <div class="hpanel">
                            <div class="panel-heading hbuilt"><strong>Quantité</strong></div>
                            <div class="panel-body">
                              <span v-for="(radioButton,index) in containerDiscontinueRadioButton">
                                <div :class="radioButton.ClsAttribut" style="position: relative;" @click.prevent="selectedDiscontinueItem(index)">
                                    <input type="radio" :name="radioButton.Name" style="position: absolute; opacity: 0;" :value="radioButton.Value">
                                    <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp;{{radioButton.Text}}&nbsp;
                              </span>
                            </div>
                        </div>
                      </div>  
                    </div>
                    <div class="row">
                        <div class="col-lg-12">
                          <div class="hpanel">
                              <div class="panel-heading hbuilt"><strong>Active</strong></div>
                              <div class="panel-body">
                                <span v-for="(radioButton,index) in containerActiveRadioButton">
                                  <div :class="radioButton.ClsAttribut" style="position: relative;" @click.prevent="selectedActiveItem(index)">
                                      <input type="radio" :name="radioButton.Name" style="position: absolute; opacity: 0;" :value="radioButton.Value">
                                      <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                  </div>&nbsp;{{radioButton.Text}}&nbsp;
                                </span>
                              </div>
                          </div>
                        </div>
                    </div>
                </div>
          </div>
          <div class="row">
            <div class="col-lg-4">
              <button type="submit" 
                      name="ok"
                      class="btn btn-success" 
                      :disabled="!$v.model.nom.required 
                                || !$v.model.nom.alpha 
                                || !$v.model.categorie_id.required 
                                || !$v.model.fournisseur_id.required
                                || !$v.model.quantite_en_stock.numeric
                                || !$v.model.quantite_commande.numeric 
                                || !$v.model.prix.decimal
                                || !$v.model.reapprovisionnement.numeric">
                  <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                  <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
              </button>&nbsp;
              <button name="back" class="btn btn-success" onclick="window.location.href='/admin/produit';return false;">
                  <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                  <span style="margin-left:5px;font-weight:bold;font-size:18px;">BACK</span>
              </button>
              <input type="hidden" name="active" class="form-control" id="active" v-model="model.active">
            </div>
          </div>
      </div>
    </form>
  </section>
</template>

<script>
import { alpha } from "../../inc/helper";
import { required, numeric, decimal } from "vuelidate/lib/validators";
import { CategorieService } from "../../services/categorie";
import { FournisseurService } from "../../services/fournisseur";
import { ProduitService } from "../../services/produit";
import { Produit } from "../../classes/produit";
import { RadioButton } from "../../classes/radioButton";
import { InputBarColorError } from "../../directives/classDirective.js";

export default {
  name: "ProduitDetail",
  data() {
    return {
      isAdd: "",
      categories: [],
      fournisseurs: [],
      produitService: new ProduitService(),
      categorieService: new CategorieService(),
      fournisseurService: new FournisseurService(),
      model: new Produit(),
      radioButton: new RadioButton(),
      containerActiveRadioButton: [],
      containerDiscontinueRadioButton: []
    };
  },
  created() {
    this.isAdd = true;
    this.categorieService
      .categorieListe()
      .then(
        res =>
          Object.keys(res.body).length > 0 ? (this.categories = res.body) : "",
        err => console.log(err)
      );

    this.fournisseurService
      .fournisseurListe()
      .then(
        res =>
          Object.keys(res.body).length > 0
            ? (this.fournisseurs = res.body)
            : "",
        err => console.log(err)
      );

    this.containerDiscontinueRadioButton = [
      new RadioButton("discontinue", "oui", "Oui"),
      new RadioButton("discontinue", "non", "Non")
    ];

    this.containerActiveRadioButton = [
      new RadioButton("active", "oui", "Oui"),
      new RadioButton("active", "non", "Non")
    ];

    if (this.$route.params.id) {
      this.isAdd = false;
      this.produitService.getProduitById(this.$route.params.id).then(
        res => {
          let produit = res.body;
          if (Object.keys(produit).length > 0) {
            this.model.id = produit.id;
            this.model.nom = produit.nom;
            this.model.categorie_id = produit.categorie_id;
            this.model.fournisseur_id = produit.fournisseur_id;
            this.model.quantite_par_unite = produit.quantite_par_unite;
            this.model.prix = produit.prix;
            this.model.quantite_en_stock = produit.quantite_en_stock;
            this.model.quantite_commande = produit.quantite_commande;
            this.model.reapprovisionnement = produit.reapprovisionnement;
            this.model.discontinue = produit.discontinue;
            this.model.active = produit.active;
            let containerActiveRadioButton = this.containerActiveRadioButton;
            let containerDiscontinueRadioButton = this
              .containerDiscontinueRadioButton;
            //Le bouton radio discontinue
            if (this.model.discontinue) {
              containerDiscontinueRadioButton[0].clsAttribut =
                containerDiscontinueRadioButton[0].iradioButtonSquare;
            } else {
              containerDiscontinueRadioButton[1].clsAttribut =
                containerDiscontinueRadioButton[1].iradioButtonSquare;
            }
            //Le bouton radio active
            if (this.model.active) {
              containerActiveRadioButton[0].ClsAttribut =
                containerActiveRadioButton[0].iradioButtonSquare;
            } else {
              containerActiveRadioButton[1].ClsAttribut =
                containerActiveRadioButton[1].iradioButtonSquare;
            }
          }
        },
        err => console.log(err)
      );
    }
  },
  methods: {
    selectedDiscontinueItem(index) {
      this.initContainerDiscontinueRadioButton();
      let containerDiscontinueRadioButton = this
        .containerDiscontinueRadioButton;
      containerDiscontinueRadioButton[index].clsAttribut =
        containerDiscontinueRadioButton[index].iradioButtonSquare;
      this.model.discontinue =
        containerDiscontinueRadioButton[index].value === "oui" ? 1 : 0;
    },

    selectedActiveItem(index) {
      this.initActiveRadioButton();
      let containerActiveRadioButton = this.containerActiveRadioButton;
      containerActiveRadioButton[index].ClsAttribut =
        containerActiveRadioButton[index].iradioButtonSquare;
      this.model.active =
        containerActiveRadioButton[index].Value === "oui" ? 1 : 0;
    },

    initContainerDiscontinueRadioButton() {
      for (let radioButton of this.containerDiscontinueRadioButton) {
        radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
      }
    },
    initActiveRadioButton() {
      for (let radioButton of this.containerActiveRadioButton) {
        radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
      }
    },

    onSubmit() {
      if (this.$route.params.id) {
        this.produitService
          .updateProduit(this.model)
          .then(
            res =>
              res.body.success
                ? this.$router.push({ name: "ListeProduit" })
                : alert("Cet item a été sauvegardé avec sans succès"),
            err => console.log(err)
          );
        return;
      }
      this.produitService
        .saveProduit(this.model)
        .then(
          res =>
            res.body.success
              ? this.$router.push({ name: "ListeProduit" })
              : alert("Cet item a été sauvegardé avec sans succès"),
          err => console.log(err)
        );
    }
  },

  validations: {
    model: {
      nom: {
        required,
        alpha
      },
      fournisseur_id: {
        required
      },
      categorie_id: {
        required
      },
      quantite_en_stock: {
        numeric
      },
      prix: {
        decimal
      },
      quantite_commande: {
        numeric
      },
      reapprovisionnement: {
        numeric
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>