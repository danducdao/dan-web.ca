/*
* Program : Créer modèle Categorie
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

module.exports = Categorie;
