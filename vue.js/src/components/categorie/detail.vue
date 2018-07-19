<template>
    <div>
        <article class="col-sm-4">
            <h1>{{ titre }} la catégorie</h1>
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group" :class="{ 'form-group--error': $v.nom.$error }">
                    <label class="form__label">Nom</label>
                    <input class="form__input form-control" v-model.trim="$v.nom.$model"/>
                    <div v-if="!$v.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                    <div v-if="!$v.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                </div>
                <div class="form-group">
                    <label for="description">Description</label>
                    <input type="text" class="form-control" id="description" v-model="model.description" name="description">
                </div>
                <div class="form-group">
                    <label for="image">Image</label>
                    <app-file-upload 
                            maxFiles = 1
                            maxSize = 2
                            fileExt ="JPG, GIF, PNG, JPEG"
                            v-on:UploadStatus="UploadStatus($event)" 
                            v-on:FileToSave="FileToSave($event)">
                    </app-file-upload>
                </div>
                <div class="well" v-if="model.image">
                    <div class="parent">
                        <img v-bind:src="model.image" :alt="model.nom" :height="height" :width="width" />
                        <button class="btn btn-danger"
                                :style="styleXRemove"
                                @click.prevent="removeImage">X
                        </button>
                    </div>
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" id="active" name="active" v-model="model.active">
                </div>
                <button type="submit" class="btn btn-success">
                    <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                    <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                </button>&nbsp;
                <button class="btn btn-success" onclick="window.location.href='/admin/categorie';return false;">
                    <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                    <span style="margin-left:5px;font-weight:bold;font-size:18px;" >BACK</span>
                </button>
            </form>
        </article>
    </div>
</template>

<script>

import { CategorieService } from '../../services/categorie';
import { ProduitService } from '../../services/produit';
import { htmlTag, alpha } from '../../inc/helper';
import { Categorie } from '../../classes/categorie';
import { required } from 'vuelidate/lib/validators';
import  fileUpload  from '../file-upload';

const HEIGHT = 135, WIDTH = 192, NONE = 0;

export default {
    name: 'Categorie',
    components : {
        'app-file-upload' : fileUpload
    },
    data () {
        return {
            categories : [],
            titre : "Ajouter",
            center:{colCenter:true},
            nom : "",
            uploadStatus : 0,
            model : new Categorie(),
            height : HEIGHT,
            width : WIDTH,
            styleXRemove : {
                position:'absolute',
                top:0,
                right:0,
                borderRadius:'10px',
                margin:'1px 2px 0px 0px',
                display : 'inherit'
            }
        }
    },
    
    created(){

        if(this.$route.params.id)
        {   
            var categorie = new CategorieService(this.$http); 

            categorie.getCategorieById(this.$route.params.id).then(function(data)
            {
                var categories = data.body;
                categories = typeof categories === 'object'?categories:"";
                this.model = categories;
                this.nom = this.model.nom;
                this.image = this.model.image;
                this.titre = "Modifier";
            });
        }
    },
    methods : {
        htmlTag : function(value)
        {
            return htmlTag(value);
        },
        UploadStatus(uploadStatus)
        {
            this.uploadStatus = uploadStatus; 
        },
        FileToSave(file)
        {
            if(this.uploadStatus)
            {
                this.model.image = file;
                this.styleXRemove.display = 'inherit';
                this.height = HEIGHT;
                this.width = WIDTH;
            }
        },
        onSubmit : function()
        {
            if(this.$route.params.id)
            {
                var categorieService = new CategorieService(this.$http); 
                var produitService = new ProduitService(this.$http); 
                this.model.nom = this.nom;
                categorieService.updateCategorie(this.$route.params.id,this.model)
                                .then(data => this.responseSaveCategorie(this,
                                              produitService,
                                              data.body,
                                              this.model));
            }     
        },
        removeImage : function()
        {
            this.model.image = "";
            this.height = NONE;
            this.width = NONE;
            this.styleXRemove.display = 'none';
            this.uploadStatus = 0;
        },
        responseSaveCategorie(obj,produitService,OldCategorie,NewCategorie)
        {
            var that = this;
            produitService.produitListe().then(function(produits)
            {
                var produitBD = produits.body.filter(produit => produit.category[0]._id == OldCategorie._id);
                if(produitBD.length > 0)
                    obj.updateProduit(that,produitService,produitBD,NewCategorie);
            });
            this.$router.push({ name: "ListeCategorie"})
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
.parent {
            position: relative;
            display: inline-block;
        }
</style>
