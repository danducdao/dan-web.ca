/*
* Program : Créer modèle Personne
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonneSchema = new Schema({
      nom:String,
      poids:Number,
      dateCreation:String
});

const Personne = mongoose.model('personne',PersonneSchema);

module.exports = Personne;
