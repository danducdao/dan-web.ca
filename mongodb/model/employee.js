/*
* Program : Créer modèle Employee
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
      nom:String,
      prenom:String,
      abreviation:String,
      titre:String,
      statut:String,
      genre:String,
      address:String,
      ville:String,
      region:String,
      codepostale:String,
      pays:String,
      telephone:String,
      cellulaire:String,
      extension:String,
      email:String,
      datenaissance:String,
      dateembauche:String,
      salaire:{ montant: Number, par : String },
      congevacance:Number,
      congemaladie:Number,
      photo:String,
      note:String,
      dateCreation:String,
      active:Boolean
});

const Employee = mongoose.model('employee',EmployeeSchema);

module.exports = Employee;
