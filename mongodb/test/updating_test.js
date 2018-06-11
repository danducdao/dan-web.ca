/*
* Program : Mettre à jour les données de la collection personne
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Personne = require('../model/personne');

describe('Mettre à jour les données de la collection personne',function(){
      it('Mettre à jour les données de la collection personne', function(done){
            Personne.findOneAndUpdate({nom:'Jonh Doe'},{nom:'Jonh-Doe'}).then(function(){
                 Personne.findOne({nom:"Jonh-Doe"}).then(function(result){
                      assert(result.nom === "Jonh-Doe");
                      done();
                 });
            });
      });
});
