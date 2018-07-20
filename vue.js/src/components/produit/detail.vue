<template>
    <div>
        <article class="col-sm-4">
            <h1>Ajouter la produit</h1>
            <form v-on:submit.prevent="onSubmit">
                <div class="form-group" :class="{ 'form-group--error': $v.model.nom.$error }">
                    <label class="form__label">Nom</label>
                    <input class="form__input form-control" v-model.trim="$v.model.nom.$model"/>
                    <div v-if="!$v.model.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                    <div v-if="!$v.model.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                </div> 
                <div class="form-group" :class="{ 'form-group--error': $v.others.categoryId.$error }">
                    <label class="form__label">Catégories</label>
                    <select class="form-control" v-model.trim="$v.others.categoryId.$model">
                        <option :disabled="true" value="">--Sélectionner--</option>
                        <option v-for="categorie in categories" :value="categorie._id">{{categorie.nom}}</option>
                    </select>
                    <div v-if="!$v.others.categoryId.required" class="alert alert-danger">Catégorie est obligatoire</div> 
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.others.fournisseurId.$error }">
                    <label class="form__label">Fournisseurs</label>
                    <select class="form-control" v-model.trim="$v.others.fournisseurId.$model">
                        <option :disabled="true" value="">--Sélectionner--</option>
                        <option v-for="fournisseur in fournisseurs" :value="fournisseur._id">{{fournisseur.compagnie}}</option>
                    </select>
                    <div v-if="!$v.others.fournisseurId.required" class="alert alert-danger">Fournisseur est obligatoire</div> 
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.model.quantite.$error }">
                    <label class="form__label">Quantité</label>
                    <input class="form__input form-control" v-model.trim="$v.model.quantite.$model"/>
                    <div v-if="!$v.model.quantite.required" class="alert alert-danger">Quantité est obligatoire</div>
                    <div v-if="!$v.model.quantite.numeric" class="alert alert-danger">Quantité doit être digit</div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.model.prix.$error }">
                    <label class="form__label">Prix</label>
                    <input class="form__input form-control" v-model.trim="$v.model.prix.$model"/>
                    <div v-if="!$v.model.prix.required" class="alert alert-danger">Prix est obligatoire</div>
                    <div v-if="!$v.model.prix.decimal" class="alert alert-danger">Prix doit être décimal</div>
                </div>
                <div class="form-group" :class="{ 'form-group--error': $v.model.quantiteRestante.$error }">
                    <label class="form__label">Quantité restante</label>
                    <input class="form__input form-control" v-model.trim="$v.model.quantiteRestante.$model"/>
                    <div v-if="!$v.model.quantiteRestante.numeric" class="alert alert-danger">Quantité restante doit être digit</div>
                </div> 
                <div class="form-group" :class="{ 'form-group--error': $v.model.quantiteCommande.$error }">
                    <label class="form__label">Quantité commandée</label>
                    <input class="form__input form-control" v-model.trim="$v.model.quantiteCommande.$model"/>
                    <div v-if="!$v.model.quantiteCommande.numeric" class="alert alert-danger">Quantité commandée doit être digit</div>
                </div> 
                <div class="form-group" :class="{ 'form-group--error': $v.model.reapprovisionnement.$error }">
                    <label class="form__label">Réapprovisionnement</label>
                    <input class="form__input form-control" v-model.trim="$v.model.reapprovisionnement.$model"/>
                    <div v-if="!$v.model.reapprovisionnement.numeric" class="alert alert-danger">Réapprovisionnement doit être digit</div>
                </div>
                <div class="hpanel hblue">
                    <div class="panel-heading hbuilt"><strong>Discontinue</strong></div>
                    <div class="panel-body" style="height:60px;">
                        <div class="form-group">
                            <label class="form-check-inline">
                                <input class="form-check-input" type="radio" name="discontinue" :value="true" v-model="model.discontinue">&nbsp;Oui
                            </label>&nbsp;&nbsp;
                            <label class="form-check-inline">
                                <input class="form-check-input" type="radio" name="discontinue" :value="false" v-model="model.discontinue">&nbsp;Non
                            </label>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                    <input type="hidden" class="form-control" id="active" v-model="model.active" name="active">
                </div>
                <button type="submit" class="btn btn-success" :disabled="!$v.model.nom.required 
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
            </form>
        </article>

    </div>


</template>

<script>

import { alpha } from '../../inc/helper';
import { required, numeric, decimal } from 'vuelidate/lib/validators';
import { CategorieService } from '../../services/categorie';
import { FournisseurService } from '../../services/fournisseur';
import { ProduitService } from '../../services/produit';
import { Produit } from '../../classes/produit';

export default {
    name: 'ProduitDetail',
    data() 
    {
        return {
            categories : [],
            fournisseurs : [],
            produitService : new ProduitService(this.$http),
            categorieService : new CategorieService(this.$http),
            fournisseurService : new FournisseurService(this.$http),
            model : new Produit(),
            others : { categoryId : "", fournisseurId : ""}
         }
    },
    created()
    {
        this.categorieService.categorieListe().then(function(data)
        {
            var categories = data.body;
            console.log(data.body[0].dateCreation);
            this.categories = categories.length > 0?categories:"";
        });

        this.fournisseurService.fournisseurListe().then(function(data)
        {
            var fournisseurs = data.body;
            this.fournisseurs = fournisseurs.length > 0?fournisseurs:"";
        });

        if(this.$route.params.id)
        { 
            this.produitService.getProduitById(this.$route.params.id).then(data => this.response(this,data.body));
        }
    },
    methods : {
        response(obj,produits)
        {
            if(typeof produits === 'object')
            {
                this.model = produits;
                this.others.categoryId = produits.category[0]._id;
                this.others.fournisseurId = produits.fournisseur._id;
            }  
        },
        onSubmit()
        {
            var cte = this.categories.filter(data => data._id.indexOf(this.others.categoryId) !== -1);
            var fs = this.fournisseurs.filter(data => data._id.indexOf(this.others.fournisseurId) !== -1);
            
            if(this.$route.params.id)
            {
                this.model.category = cte; 
                this.model.fournisseur = fs[0];
                this.produitService.updateProduit(this.$route.params.id,this.model).then(data => data?this.$router.push({ name: "ListeProduit"}):"");
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
            
            this.produitService.saveProduit(obj).then(data => data?this.$router.push({ name: "ListeProduit"}):"");
        }
    },
    validations : {
        model : { 
            nom : {
                required,
                alpha
            },
            quantite : {
                required,
                numeric
            },
            prix : {
                required,
                decimal
            },
            quantiteRestante : {
                numeric
            },
            quantiteCommande : {
                numeric
            },
            reapprovisionnement : {
                numeric
            }
        },
        others : {
             categoryId : {
                 required 
             },
             fournisseurId : {
                 required
             }
        } 
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


</style>