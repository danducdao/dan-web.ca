/*
* Program : Requête sur des collections
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Produit = require('../model/produit');

describe('Requête sur des collections',function(){
      it('Trouver les produits qui coûtent $18', function(done){
              Produit.Produit.find({prix :{ $eq: 18 }}).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2));
                  })
                  console.log('\r');
                  done();
              });
        });

        it('Trouver les produits qui coûtent plus que $18', function(done){
                Produit.Produit.find({prix : { $gt: 18 }}).then(function(result){
                    console.log('\r');
                    result.forEach(function(produit){
                        console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2));
                    });
                    console.log('\r');
                    done();
                });
          });

          it('Trouver les produits qui coûtent $18 et $14', function(done){
                  Produit.Produit.find({prix : { $in: [ 14, 18 ] } }).then(function(result){
                      console.log('\r');
                      result.forEach(function(produit){
                          console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2));
                      });
                      console.log('\r');
                      done();
                  });
          });

          it('Trouver les produits qui coûtent $18 et quantité restante égale à 57', function(done){
              Produit.Produit.find({$and: [ { prix: { $eq:18 } }, { quantiteRestante: {$eq:57 } } ] }).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2) + " avec une quantité restante de " + produit.quantiteRestante);
                  });
                  console.log('\r');
                  done();
              });
          });

          it('Trouver les produits qui coûtent moins de $18', function(done){
              Produit.Produit.find({prix: { $not: { $gt: 18 } } }).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit){
                      console.log(" - " + produit.nom + " coûte $" + produit.prix.toFixed(2));
                  });
                  console.log('\r');
                  done();
              });
          });

          it('Trouver les produits qui ont une quantité restante supérieure à la quantité commdandée', function(done){
              Produit.Produit.find({$expr: { $gt: [ "$quantiteRestante", "$quantiteCommande" ]}}).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit,index){
                      console.log(++index + " - " + produit.nom);
                  });
                  console.log('\r');
                  done();
              });
          });

          it('Calculer la quantité restante d\'un produit en fonction de la condition du prix', function(done){
              Produit.Produit.find({
                            $expr: {
                                     $lt:[ {
                                        $cond : {
                                                   if : { $gte: ["$prix", 18] },
                                                   then: { $divide: ["$quantiteRestante", 2] },
                                                   else: { $divide: ["$quantiteRestante", 4] }
                                                 }
                                           },5 ] }
                           }).then(function(result){
                  console.log('\r');
                  result.forEach(function(produit,index){
                      console.log(++index + " - " + produit.nom + ". Prix : " + produit.prix + ". La quantité restante :" + produit.quantiteRestante);
                  });
                  console.log('\r');
                  done();
              });
          });
  });
