/*
* Program : Requête sur des collections
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Produit = require('../model/produit');

describe('Requête sur des collections',function(){
      it('Trouver les produits qui coûtent $18', function(done){
              Produit.find({prix :{ $eq: 18 }}).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2) + '\n');
                  })
                  console.log('\r');
                  done();
              });
        });

        it('Trouver les produits qui coûtent plus que $18', function(done){
                Produit.find({prix : { $gt: 18 }}).then(function(result){
                    console.log('\r');
                    result.forEach(function(produit){
                        console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2) + '\n');
                    });
                    console.log('\r');
                    done();
                });
          });

          it('Trouver les produits qui coûtent $18 et $14', function(done){
                  Produit.find({prix : { $in: [ 14, 18 ] } }).then(function(result){
                      console.log('\r');
                      result.forEach(function(produit){
                          console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2) + '\n');
                      });
                      console.log('\r');
                      done();
                  });
          });

          it('Trouver les produits qui coûtent $18 et quantité restant égale à 57', function(done){
              Produit.find({$and: [ { prix: { $eq:18 } }, { quantiteRestante: {$eq:57 } } ] }).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2) + " avec une quantité restante de " + produit.quantiteRestante +  '\n');
                  })
                  console.log('\r');
                  done();
              });
          });

          it('Trouver les produits qui coûtent moins de $18', function(done){
              Produit.find({prix: { $not: { $gt: 18 } } }).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2));
                  })
                  console.log('\r');
                  done();
              });
          });

          it('Trouver les produits qui ont une quantité restante supérieure à la quantité commdandée', function(done){
              Produit.find({$expr: { $gt: [ "$quantiteRestante", "$quantiteCommande" ]}}).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit,index){
                      console.log(++index + " - " + produit.nom);
                  })
                  console.log('\r');
                  done();
              });
          });
  });
