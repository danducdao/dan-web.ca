<template>
    <article id="categorieDetail">
        <form v-on:submit.prevent="onSubmit">
            <h1>{{ titre }} la catégorie</h1>
            <div class="row">
                <div class="col-md-3">
                    <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                    <input  type="text" :class="{
                                                    input_form_error:$v.nom.$error,
                                                    input_form_valid:!$v.nom.$invalid,
                                                    'form-control':true
                                                }" 
                                        required
                                        name="nom" 
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
                    <label for="image">Image</label>
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
            <div class="row">
                    <div class="col-md-8">
                    <button type="submit" class="btn btn-success" :disabled="!$v.nom.required || !$v.nom.alpha">
                        <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                    </button>&nbsp;
                    <button class="btn btn-success" onclick="window.location.href='/admin/categorie';return false;">
                        <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;" >BACK</span>
                    </button>
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" name="active" v-model="model.active">
                </div>
            </div>
        </form>
    </article>    
</template>

<script>

import { CategorieService } from '../../services/categorie';
import { ProduitService } from '../../services/produit';
import { alpha } from '../../inc/helper';
import { Categorie } from '../../classes/categorie';
import { FileUpload } from '../../classes/fileUpload';
import { required } from 'vuelidate/lib/validators';
import  fileUpload  from '../file-upload';

export default {
    name: 'CategorieDetail',
    components : {
        'app-file-upload' : fileUpload
    },
    data () {
        return {
            categories : [],
            titre : "Ajouter",
            center:{colCenter:true},
            nom : "",
            model : new Categorie(),
            categorieService : new CategorieService(this.$http), 
            produitService : new ProduitService(this.$http),
            fileUpload : new FileUpload()
        }
    },
    
    created()
    {
        if(this.$route.params.id)
        {   
            this.categorieService.getCategorieById(this.$route.params.id).then(function(data)
            {
                var categories = data.body;
                categories = typeof categories === 'object'?categories:"";
                this.model = categories;
                this.nom = this.model.nom;
                this.titre = "Modifier";
            });
        }
    },
    methods : {
        UploadStatus(uploadStatus)
        {
            this.fileUpload.UploadStatus(uploadStatus);
        },
        FileToSave(file)
        {
            this.fileUpload.FileToSave(file,this.model);  
        },
        onSubmit : function()
        {
            if(this.$route.params.id)
            {
                this.model.nom = this.nom;
                this.categorieService.updateCategorie(this.$route.params.id,this.model)
                                .then(data => this.responseSaveCategorie(this,
                                              this.produitService,
                                              data.body,
                                              this.model));
            }else
            {
                var obj = new Object();
                obj.nom = this.nom;
                obj.description = this.model.description;
                obj.photo = this.model.photo;
                obj.dateCreation = this.model.dateCreation;
                obj.active = this.model.active;
                this.categorieService.saveCategorie(obj).then(data => data?this.$router.push({ name: "ListeCategorie"}):"");
            }    
        },
        removeImage : function()
        {
            this.fileUpload.removeImage(this.model);
        },
        responseSaveCategorie(obj,produitService,OldCategorie,NewCategorie)
        {
            var that = obj;
            produitService.produitListe().then(function(produits)
            {
                var produitBD = produits.body.filter(produit => produit.category[0]._id == OldCategorie._id);
                if(produitBD.length > 0)
                    that.updateProduit(that,produitService,produitBD,NewCategorie);
            });
            obj.$router.push({ name: "ListeCategorie"});
        },
        updateProduit(obj,produitService,produitBD,NewCategorie)
        {
            produitBD.forEach(function(produit)
            {
                produit.category[0] = NewCategorie;
                produitService.updateProduit(produit._id,produit).then(data => data);
            });
        },
    },
    validations : {
        nom : {
            required,
            alpha
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

#categorieDetail .row{
    margin: 0 0 5px 0;
}

</style>
