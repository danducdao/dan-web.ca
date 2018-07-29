/*
* Program : Créer modèle Admin
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdminSchema = new Schema({
      employee:{ nom:String,prenom:String},
      username:String,
      password:String,
      confirmPassword:String,
      dateCreation:String,
      active:Boolean
});

const Admin = mongoose.model('admin',AdminSchema);

module.exports = Admin;
