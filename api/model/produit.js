/*
* Program : Créer modèle Produit
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorieSchema = new Schema({
      nom:String,
      description:String,
      image:String
});

const Categorie = mongoose.model('categorie',CategorieSchema);

const FournisseurSchema = new Schema({
      compagnie:String,
      contact:String,
      titre:String,
      address:String,
      ville:String,
      region:String,
      codePostal:String,
      pays:String,
      telephone:String,
      fax:String,
      siteWeb:String
});

const Fournisseur = mongoose.model('fournisseur',FournisseurSchema);

const ProduitSchema = new Schema({
    nom:String,
    category:[CategorieSchema],
    fournisseur:FournisseurSchema,
    quantite:String,
    prix:Number,
    quantiteRestante:Number,
    quantiteCommande:Number,
    reapprovisionnement:Number,
    discontinue:Boolean
});

const Produit = mongoose.model('produit',ProduitSchema);

module.exports = {
                   Produit:Produit,
                   Categorie:Categorie,
                   Fournisseur:Fournisseur
                 }
