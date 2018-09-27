<template>
  <section>
    <div class="normalheader">
       <div class="hpanel">
            <div class="panel-body">
                <h2><em>{{ isAdd?'Ajouter':'Modifier' }} la catégorie</em></h2>
            </div>
        </div>
    </div>
    <form v-on:submit.prevent="onSubmit">
        <div class="content">
          <div class="row">
              <div class="hpanel col-md-4">
                  <div class="panel-heading hbuilt"><strong>Information</strong></div>
                  <div class="panel-body">
                      <p> 
                          <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                          <input  type="text" 
                                  name="nom" 
                                  v-input-bar-color-error=[!$v.model.nom.$error,!$v.model.nom.$invalid]
                                  required
                                  v-model.trim="$v.model.nom.$model"/>
                          <ul class="error">
                            <li v-if="$v.model.nom.$error && !$v.model.nom.required" class="alert alert-danger">Nom est obligatoire</li>
                            <li v-if="!$v.model.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</li>
                          </ul>
                      </p>
                      <p>
                          <label class="control-label" for="description">Description</label>
                          <input type="text" name="description" class="form-control" v-model="model.description">
                      </p>
                      <p>
                          <label class="control-label" for="image">Image</label>
                          <app-file-upload 
                                  name="image"
                                  maxFiles = 1
                                  maxSize = 2
                                  fileExt ="JPG, GIF, PNG, JPEG"
                                  v-on:UploadStatus="UploadStatus($event)" 
                                  v-on:FileToSave="FileToSave($event)">
                          </app-file-upload>
                      </p>
                      <p v-if="model.photo">
                          <img :src="model.photo" 
                               :alt="model.nom" 
                               :height="fileUpload.height" 
                               :width="fileUpload.height" 
                               :style="{display:'block'}" />
                          <button class="btn btn-danger" @click.prevent="removeImage" :style="{display:'block',marginTop:'10px'}">supprimer</button>
                      </p>
                      <p v-if="!isAdd">
                          <label class="control-label">Active</label><br>
                          <span v-for="(radioButton,index) in containerActiveRadioButton" v-bind:key="index">
                              <div :class="radioButton.ClsAttribut" :style="{position: 'relative'}" @click.prevent="selectedActiveItem(index)">
                                  <input type="radio" :name="radioButton.Name" :style="{position: 'absolute', opacity: 0}" :value="radioButton.Value">
                                  <ins class="iCheck-helper"></ins>
                              </div>&nbsp;{{radioButton.Text}}&nbsp;
                          </span> 
                      </p>
                  </div>
              </div>
          </div>
          <div class="row">
            <div class="col-md-4">
                <button type="submit" name="ok" class="btn btn-success" :disabled="!$v.model.nom.required || !$v.model.nom.alpha">
                    <i class="fa fa-check-square-o" :style="{fontSize:'24px',float:'left'}"></i>
                    <span :style="{marginLeft:'5px',fontWeight:'bold',fontSize:'18px'}">OK</span>
                </button>&nbsp;
                <button name="back" class="btn btn-success" onclick="window.location.href='/admin/categorie';return false;">
                    <i class="fa fa-backward" :style="{fontSize:'24px',float:'left'}"></i>
                    <span :style="{marginLeft:'5px',fontWeight:'bold',fontSize:'18px'}" >BACK</span>
                </button>
                <input type="hidden" class="form-control" name="id" v-model="model.id" />
            </div>
          </div>
        </div>
    </form>
  </section>
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
      this.categorieService.getCategorieById(this.$route.params.id).then(
        res => {
          let categorie = res.body;
          if (Object.keys(categorie).length > 0) {
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
          }
        },
        err => console.log(err)
      );
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
                : alert("Cet item a été sauvegardé avec sans succès"),
            err => console.log(err)
          );
      } else {
        this.model.nom = this.nom;
        this.categorieService
          .saveCategorie(this.model)
          .then(
            res =>
              res.body.success
                ? this.$router.push({ name: "ListeCategorie" })
                : alert("Cet item a été sauvegardé avec sans succès"),
            err => console.log(err)
          );
      }
    },
    removeImage: function() {
      this.fileUpload.removeImage(this.model);
    }
  },
  validations: {
    model: {
      nom: {
        required,
        alpha
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
