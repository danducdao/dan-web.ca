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

const ProduitSchema = new Schema({
    nom:String,
    category:[CategorieSchema],
    quantite:String,
    prix:Number,
    quantiteRestante:Number,
    quantiteCommande:Number,
    reapprovisionnement:Number,
    Discontinue:Boolean
});

const Produit = mongoose.model('produit',ProduitSchema);

module.exports = Produit;
