/*
* Program : Créer modèle Utilisateur
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UtilisateurSchema = new Schema({
      nom:String,
      age:Number,
      type:Number,
      statut:String,
      favorites:{ artiste:String, aliment:String},
      termine:[ Number, Number ],
      badges:[ String, String ],
      points:[
         { points:Number, bonus:Number },
         { points:Number, bonus:Number }
      ],
      dateCreation:String
});

const  Utilisateur= mongoose.model('utilisateur',UtilisateurSchema);

module.exports = Utilisateur;
