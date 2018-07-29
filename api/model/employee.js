/*
* Program : Créer modèle Employee
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
      nom:String,
      prenom:String,
      abrege:String,
      titre:String,
      statut:String,
      genre:String,
      address:String,
      ville:String,
      region:String,
      codePostale:String,
      pays:String,
      telephone:String,
      cellulaire:String,
      email:String,
      dateNaissance:String,
      dateEmbauche:String,
      salaire:{ montant: Number, par : String },
      congeVacance:Number,
      congeMaladie:Number,
      photo:String,
      note:String,
      dateCreation:String,
      active:Boolean
});

const Employee= mongoose.model('employee',EmployeeSchema);

module.exports = Employee;
