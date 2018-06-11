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

      it('Incrémente le poid de Jonh-Doe', function(done){
            Personne.update({nom:'Jonh-Doe'},{$inc:{poids:1}}).then(function(){
                 Personne.findOne({nom:"Jonh-Doe"}).then(function(result){
                      assert(result.poids === 69);
                      done();
                 });
            });
      });
});
