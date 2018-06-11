/*
* Program : Requête sur des collections
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Produit = require('../model/produit');

describe('Trouver les produits qui coûtent $18.00',function(){
      it('Trouver les produits qui coûtent $18.00', function(done){
              Produit.find({prix :{ $eq: 18 }}).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(produit.nom + " coûte $" + produit.prix.toFixed(2) + '\n');
                  })
                  console.log('\r');
                  done();
              })
        });

        it('Trouver les produits qui coûtent plus que $18.00', function(done){
                Produit.find({prix : { $gt: 18 }}).then(function(result){
                    console.log('\r');
                    result.forEach(function(produit){
                        console.log(produit.nom + " coûte $" + produit.prix.toFixed(2) + '\n');
                    })
                    console.log('\r');
                    done();
                })
          });
  });
