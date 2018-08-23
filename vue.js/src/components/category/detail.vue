<template>
    <article id="category-detail-container">
        <form v-on:submit.prevent="onSubmit">
            <div class="row">
                <div class="col-md-12">
                  <h2><em>{{ isAdd?'Ajouter':'Modifier' }} la catégorie</em></h2>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                    <input  type="text" 
                            name="nom" 
                            v-input-bar-color-error=[$v.nom.$error,!$v.nom.$invalid]
                            required
                            v-model.trim="$v.nom.$model"/>
                        <div v-if="$v.nom.$error && !$v.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                        <div v-if="!$v.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                    </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label class="control-label" for="description">Description</label>
                    <input type="text" name="description" class="form-control" v-model="model.description">
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <label class="control-label" for="image">Image</label>
                    <app-file-upload 
                            name="image"
                            maxFiles = 1
                            maxSize = 2
                            fileExt ="JPG, GIF, PNG, JPEG"
                            v-on:UploadStatus="UploadStatus($event)" 
                            v-on:FileToSave="FileToSave($event)">
                    </app-file-upload>
                </div>
            </div>
            <div class="row">
                <div class="col-md-3">
                    <div class="well" v-if="model.photo">
                        <div class="parent">
                            <img v-bind:src="model.photo" :alt="model.nom" :height="fileUpload.height" :width="fileUpload.height" />
                            <button class="btn btn-danger"
                                    :style="fileUpload.styleXRemove"
                                    @click.prevent="removeImage">X
                            </button>
                        </div>
                    </div>
                </div>
            </div>
             <div class="row" v-if="!isAdd && !model.active">
                <div class="hpanel hblue col-md-4">
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
            <div class="row">
                    <div class="col-md-8">
                    <button type="submit" name="ok" class="btn btn-success" :disabled="!$v.nom.required || !$v.nom.alpha">
                        <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                    </button>&nbsp;
                    <button name="back" class="btn btn-success" onclick="window.location.href='/admin/categorie';return false;">
                        <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;" >BACK</span>
                    </button>
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" name="id" v-model="model.id">
                </div>
            </div>
        </form>
    </article>    
</template>

<script>
import { CategorieService } from "../../services/categorie";
import { ProduitService } from "../../services/produit";
import { alpha } from "../../inc/helper";
import { Categorie } from "../../classes/categorie";
import { FileUpload } from "../../classes/fileUpload";
import { required } from "vuelidate/lib/validators";
import fileUpload from "../fileUpload/fileUpload";
import { InputBarColorError } from "../../directives/classDirective.js";
import { RadioButton } from "../../classes/radioButton";

export default {
  name: "CategorieDetail",
  components: {
    "app-file-upload": fileUpload
  },
  data() {
    return {
      categories: [],
      isAdd: "",
      center: { colCenter: true },
      nom: "",
      model: new Categorie(),
      categorieService: new CategorieService(this.$http),
      produitService: new ProduitService(this.$http),
      fileUpload: new FileUpload(),
      containerActiveRadioButton: []
    };
  },

  created() {
    this.isAdd = true;
    this.containerActiveRadioButton = [
      new RadioButton("active", "oui", "Oui"),
      new RadioButton("active", "non", "Non")
    ];
    if (this.$route.params.id) {
      this.isAdd = false;
      this.categorieService
        .getCategorieById(this.$route.params.id)
        .then(res => {
          let categorie = res.body;
          this.model.id = categorie.id;
          this.model.nom = categorie.nom;
          this.model.description = categorie.description;
          this.model.photo = categorie.photo;
          this.model.active = categorie.active;
          this.nom = this.model.nom;
          let containerActiveRadioButton = this.containerActiveRadioButton;
          //Le bouton radio active
          if (this.model.active) {
            containerActiveRadioButton[0].ClsAttribut =
              containerActiveRadioButton[0].iradioButtonSquare;
          } else {
            containerActiveRadioButton[1].ClsAttribut =
              containerActiveRadioButton[1].iradioButtonSquare;
          }
        });
    }
  },
  methods: {
    UploadStatus(uploadStatus) {
      this.fileUpload.UploadStatus(uploadStatus);
    },
    FileToSave(file) {
      this.fileUpload.FileToSave(file, this.model);
    },
    selectedActiveItem(index) {
      this.initActiveRadioButton();
      let containerActiveRadioButton = this.containerActiveRadioButton;
      containerActiveRadioButton[index].ClsAttribut =
        containerActiveRadioButton[index].iradioButtonSquare;
      this.model.active =
        containerActiveRadioButton[index].Value === "oui" ? 1 : 0;
    },
    initActiveRadioButton() {
      for (let radioButton of this.containerActiveRadioButton) {
        radioButton.clsAttribut = radioButton.iradioButtonSquare.split(" ")[0];
      }
    },
    onSubmit() {
      if (this.$route.params.id) {
        this.model.nom = this.nom;
        this.categorieService
          .updateCategorie(this.model)
          .then(
            res =>
              res.body.success
                ? this.$router.push({ name: "ListeCategorie" })
                : alert("Cet item a été sauvegardé avec sans succès")
          );
      } else {
        this.model.nom = this.nom;
        this.categorieService
          .saveCategorie(this.model)
          .then(
            res =>
              res.body.success
                ? this.$router.push({ name: "ListeCategorie" })
                : alert("Cet item a été sauvegardé avec sans succès")
          );
      }
    },
    removeImage: function() {
      this.fileUpload.removeImage(this.model);
    }
  },
  validations: {
    nom: {
      required,
      alpha
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#category-detail-container .row {
  margin: 0 0 5px 0;
}
</style>
