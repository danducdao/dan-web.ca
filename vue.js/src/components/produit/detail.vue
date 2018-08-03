<template>
    <article id="produitDetail">
        <form v-on:submit.prevent="onSubmit">
            <div class="row">
                 <div class="col-md-12">
                    <h1>{{titre}} la produit</h1>
                 </div>
            </div>
            <div class="row">
                <div class="hpanel hblue col-md-4">
                    <div class="panel-heading hbuilt"><strong>Item</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-8">
                                <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                                <input type="text" 
                                       :class="{
                                                    input_form_error:$v.model.nom.$error,
                                                    input_form_valid:!$v.model.nom.$invalid,
                                                    'form-control':true
                                                }" 
                                       required 
                                       name="nom" 
                                       v-model.trim="$v.model.nom.$model"/>
                                <div v-if="$v.model.nom.$error && !$v.model.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                                <div v-if="!$v.model.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                            </div> 
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <label class="control-label" for="prix">Prix</label>&nbsp;<span style="color:red;">*</span>
                                <input type="text" 
                                       :class="{
                                                    input_form_error:$v.model.prix.$error,
                                                    input_form_valid:!$v.model.prix.$invalid,
                                                    'form-control':true
                                                }" 
                                       required
                                       name="prix" 
                                       v-model.trim="$v.model.prix.$model"/>
                                <div v-if="$v.model.prix.$error && !$v.model.prix.required" class="alert alert-danger">Prix est obligatoire</div>
                                <div v-if="!$v.model.prix.decimal" class="alert alert-danger">Prix doit être décimal</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="categorie">Catégories</label>&nbsp;<span style="color:red;">*</span>
                                <select :class="{
                                                    input_form_error:true,
                                                    input_form_valid:!$v.others.categoryId.$invalid,
                                                    'form-control':true
                                                }" 
                                        name="categorie" 
                                        v-model.trim="$v.others.categoryId.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="categorie in categories" :value="categorie._id">{{categorie.nom}}</option>
                                </select>
                                <div v-if="$v.others.categoryId.$error && !$v.others.categoryId.required" class="alert alert-danger">Catégorie est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="founisseurId">Fournisseurs</label>&nbsp;<span style="color:red;">*</span>
                                <select :class="{
                                                    input_form_error:true,
                                                    input_form_valid:!$v.others.fournisseurId.$invalid,
                                                    'form-control':true
                                                }"  
                                        name="founisseurId" 
                                        v-model.trim="$v.others.fournisseurId.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="fournisseur in fournisseurs" :value="fournisseur._id">{{fournisseur.compagnie}}</option>
                                </select>
                                <div v-if="$v.others.fournisseurId.$error && !$v.others.fournisseurId.required" class="alert alert-danger">Fournisseur est obligatoire</div> 
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-7">
                                <label class="control-label" for="reapprovisionnement">Réapprovisionnement</label>
                                <input type="text" :class="{
                                                                input_form_error:!$v.model.reapprovisionnement.numeric,
                                                                input_form_valid:!$v.model.reapprovisionnement.$invalid,
                                                                'form-control':true
                                                            }"  
                                                            name="reapprovisionnement" 
                                                            v-model.trim="$v.model.reapprovisionnement.$model"/>
                                <div v-if="!$v.model.reapprovisionnement.numeric" class="alert alert-danger">Réapprovisionnement doit être digit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hpanel hblue col-md-4">
                    <div class="panel-heading hbuilt"><strong>Quantité</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-8">
                                <label class="control-label" for="quantite">Stock</label>&nbsp;<span style="color:red;">*</span>
                                <input type="text" :class="{
                                                                input_form_error:$v.model.quantite.$error,
                                                                input_form_valid:!$v.model.quantite.$invalid,
                                                                'form-control':true
                                                            }" 
                                                            required
                                                            name="quantite" 
                                                            v-model.trim="$v.model.quantite.$model"/>
                                <div v-if="$v.model.quantite.$error && !$v.model.quantite.required" class="alert alert-danger">Quantité est obligatoire</div>
                                <div v-if="!$v.model.quantite.numeric" class="alert alert-danger">Quantité doit être digit</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <label class="control-label" for="quantiteRestante">Restante</label>
                                <input type="text" 
                                       :class="{
                                                    input_form_error:!$v.model.quantiteRestante.numeric,
                                                    input_form_valid:!$v.model.quantiteRestante.$invalid,
                                                    'form-control':true
                                                }"  
                                       name="quantiteRestante" 
                                       v-model.trim="$v.model.quantiteRestante.$model"/>
                                <div v-if="!$v.model.quantiteRestante.numeric" class="alert alert-danger">Quantité restante doit être digit</div>
                            </div> 
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <label class="control-label" for="quantiteCommande">Commandée</label>
                                <input type="text" 
                                       :class="{
                                                    input_form_error:!$v.model.quantiteCommande.numeric,
                                                    input_form_valid:!$v.model.quantiteCommande.$invalid,
                                                    'form-control':true
                                                }" 
                                       name="quantiteCommande" 
                                       v-model.trim="$v.model.quantiteCommande.$model"/>
                                <div v-if="!$v.model.quantiteCommande.numeric" class="alert alert-danger">Quantité commandée doit être digit</div>
                            </div> 
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hpanel hblue col-md-4">
                    <div class="panel-heading hbuilt"><strong>Discontinue</strong></div>
                    <div class="panel-body">
                        <span v-for="(radioButton,index) in radioButtonContainer.Container">
                            <div :class="radioButton.ClsAttribut" style="position: relative;" @click.prevent="radioButtonContainer.discChecked(index,model)">
                                <input type="radio" :name="radioButton.Name" style="position: absolute; opacity: 0;" :value="radioButton.Value">
                                <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                            </div>&nbsp;{{radioButton.Text}}&nbsp;
                        </span>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-4">
                    <button type="submit" 
                            class="btn btn-success" 
                            :disabled="!$v.model.nom.required 
                                      || !$v.model.nom.alpha 
                                      || !$v.others.categoryId.required 
                                      || !$v.others.fournisseurId.required
                                      || !$v.model.quantite.required 
                                      || !$v.model.quantite.numeric 
                                      || !$v.model.prix.required 
                                      || !$v.model.prix.decimal
                                      || !$v.model.quantiteRestante.numeric 
                                      || !$v.model.quantiteCommande.numeric 
                                      || !$v.model.reapprovisionnement.numeric">
                        <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                    </button>&nbsp;
                    <button class="btn btn-success" onclick="window.location.href='/admin/produit';return false;">
                        <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">BACK</span>
                    </button>
                    <div class="form-group">
                        <input type="hidden" class="form-control" id="active" v-model="model.active" name="active">
                    </div>
                </div>
            </div>
        </form>
    </article>
</template>

<script>
import { alpha } from "../../inc/helper";
import { required, numeric, decimal } from "vuelidate/lib/validators";
import { CategorieService } from "../../services/categorie";
import { FournisseurService } from "../../services/fournisseur";
import { ProduitService } from "../../services/produit";
import { Produit } from "../../classes/produit";
import { RadioButton } from "../../classes/radioButton";
import { MyContainer } from "../../classes/myContainer";

export default {
  name: "ProduitDetail",
  data() {
    return {
      titre: "Ajouter",
      categories: [],
      fournisseurs: [],
      produitService: new ProduitService(this.$http),
      categorieService: new CategorieService(this.$http),
      fournisseurService: new FournisseurService(this.$http),
      model: new Produit(),
      radioButton: new RadioButton(),
      radioButtonContainer: new MyContainer(),
      others: { categoryId: "", fournisseurId: "" }
    };
  },
  created() {
    this.categorieService.categorieListe().then(function(data) {
      var categories = data.body;
      this.categories = categories.length > 0 ? categories : "";
    });

    this.fournisseurService.fournisseurListe().then(function(data) {
      var fournisseurs = data.body;
      this.fournisseurs = fournisseurs.length > 0 ? fournisseurs : "";
    });

    this.radioButtonContainer.Container = new RadioButton(
      "discontinue",
      "Oui",
      "Oui"
    );
    this.radioButtonContainer.Container = new RadioButton(
      "discontinue",
      "Non",
      "Non"
    );

    if (this.$route.params.id) {
      this.titre = "Modifier";
      this.produitService
        .getProduitById(this.$route.params.id)
        .then(data => this.callback(this, data.body));
    }
  },
  methods: {
    callback(obj, res) {
      if (typeof res === "object") {
        obj.model = res;
        obj.others.categoryId = res.category[0]._id;
        obj.others.fournisseurId = res.fournisseur._id;
        obj.radioButtonContainer.Container[0].ClsAttribut.checked =
          obj.model.discontinue;
        obj.radioButtonContainer.Container[1].ClsAttribut.checked = !obj.model
          .discontinue;
      }
    },
    onSubmit() {
      var cte = this.categories.filter(
        data => data._id.indexOf(this.others.categoryId) !== -1
      );
      var fs = this.fournisseurs.filter(
        data => data._id.indexOf(this.others.fournisseurId) !== -1
      );

      if (this.$route.params.id) {
        this.model.category = cte;
        this.model.fournisseur = fs[0];
        this.produitService
          .updateProduit(this.$route.params.id, this.model)
          .then(
            data => (data ? this.$router.push({ name: "ListeProduit" }) : "")
          );
        return;
      }

      var obj = new Object();
      obj.nom = this.model.nom;
      obj.category = cte;
      obj.fournisseur = fs[0];
      obj.quantite = this.model.quantite;
      obj.prix = this.model.prix;
      obj.quantiteRestante = this.model.quantiteRestante;
      obj.quantiteCommande = this.model.quantiteCommande;
      obj.reapprovisionnement = this.model.reapprovisionnement;
      obj.discontinue = this.model.discontinue;
      obj.dateCreation = this.model.dateCreation;
      obj.active = this.model.active;

      this.produitService
        .saveProduit(obj)
        .then(
          data => (data ? this.$router.push({ name: "ListeProduit" }) : "")
        );
    }
  },
  validations: {
    model: {
      nom: {
        required,
        alpha
      },
      quantite: {
        required,
        numeric
      },
      prix: {
        required,
        decimal
      },
      quantiteRestante: {
        required,
        numeric
      },
      quantiteCommande: {
        required,
        numeric
      },
      reapprovisionnement: {
        required,
        numeric
      }
    },
    others: {
      categoryId: {
        required
      },
      fournisseurId: {
        required
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#produitDetail .row {
  margin: 0 0 5px 0;
}
</style>