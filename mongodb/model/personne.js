/*
* Program : Créer modèle Personne
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PersonneSchema = new Schema({
      name:String,
      poids:Number
});

const Personne = mongoose.model('personne',PersonneSchema);

module.exports = Personne;
