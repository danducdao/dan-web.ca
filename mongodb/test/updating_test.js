/*
* Program : Mettre à jour la la collection personne
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Personne = require('../model/personne');
const Categorie = require('../model/categorie');
const Utilisateur = require('../model/utilisateur');
const Produit = require('../model/produit');

describe('Sauvegarder de données dans les collections',function(){
      it('Sauvegarder de données dans collection personne', function(done){
            Personne.findOneAndUpdate({nom:'Jonh Doe'},{nom:'Jonh-Doe'}).then(function(){
                 Personne.findOne({nom:"Jonh-Doe"}).then(function(result){
                      assert(result.nom === "Jonh-Doe");
                      done();
                 });
            });
      });
});
