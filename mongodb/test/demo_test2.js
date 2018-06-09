/*
* Program : Insérer de donnée
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Personne = require('../model/personne');

describe('sauvegarder de donnée',function(){
     it('sauvegarder de donnée dan bd', function(done){
         var pers = new Personne({
              name:'Jonh Doe',
              poids:68
         });
         pers.save().then(function(){
             assert(pers.isNew === false);
             done();
         });
     })
});
