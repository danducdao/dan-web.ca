/*
* Program : Insérer de donnée
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Personne = require('../model/personne');
const Categorie = require('../model/categorie');
const Utilisateur = require('../model/utilisateur');
const Produit = require('../model/produit');


describe('Sauvegarder de données dans les collections',function(){

  beforeEach(function(done){

        var cat = new Categorie({
                                  nom:"Drinks",
                                  description:"Soft drinks, coffees, teas, beers, and ales",
                                  image:""
                                });
        cat.save().then(function(){
              assert(cat.isNew === false);
              cat = new Categorie({
                                    nom:"Condiments",
                                    description:"Sweet and savory sauces, relishes, spreads, and seasonings",
                                    image:""
                                  });
              return cat.save();
        }).then(function(){
              cat = new Categorie({
                                    nom:"Confections",
                                    description:"Desserts, candies, and sweet breads",
                                    image:""
                                  });
              return  cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Categorie({
                                    nom:"Dairy Products",
                                    description:"Cheeses",
                                    image:""
                                  });
              return cat.save();
        }).then(function(){
                assert(cat.isNew === false);
                cat = new Categorie({
                                      nom:"Grains/Cereals",
                                      description:"Breads, crackers, pasta, and cereal",
                                      image:""
                                    });

                return cat.save();
        }).then(function(){
               assert(cat.isNew === false);
               cat = new Categorie({
                                     nom:"Meat/Poultry",
                                     description:"Prepared meats",
                                     image:""
                                   });

                  return cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Categorie({
                                    nom:"Produce",
                                    description:"Dried fruit and bean curd",
                                    image:""
                                  });
                return cat.save();
        }).then(function(){
            assert(cat.isNew === false);
            cat = new Categorie({
                                  nom:"Seafood",
                                  description:"Seaweed and fish",
                                  image:""
                                });
        }).then(function(){
            done();
        });
  });

  it('Sauvegarder de données dans les collections', function(done){

         //Insérer des données dans collections
         var util;
         var prod;
         var pers = new Personne({
              nom:'Jonh Doe',
              poids:68
         });
         pers.save().then(function(){
             assert(pers.isNew === false);
             util = new Utilisateur({
                                       nom: "sue",
                                       age: 19,
                                       type: 1,
                                       statut: "P",
                                       favorites: { artiste: "Picasso", aliment: "pizza" },
                                       termine: [ 17, 3 ],
                                       badges: [ "blue", "black" ],
                                       points: [
                                        { points: 85, bonus: 20 },
                                        { points: 85, bonus: 10 }
                                       ]
                                   });
              return util.save();
         }).then(function(){
              assert(util.isNew === false);
              util = new Utilisateur({
                                        nom: "bob",
                                        age: 42,
                                        type: 1,
                                        statut: "A",
                                        favorites: { artiste: "Miro", aliment: "meringue" },
                                        termine: [ 11, 25 ],
                                        badges: [ "green" ],
                                        points: [
                                         { points: 85, bonus: 20 },
                                         { points: 64, bonus: 12 }
                                        ]
                                   });
               return util.save();
         }).then(function(){
              assert(util.isNew === false);
              util = new Utilisateur({
                                         nom: "ahn",
                                         age: 22,
                                         type: 2,
                                         statut: "A",
                                         favorites: { artiste: "Cassatt", aliment: "cake" },
                                         termine: [ 6 ],
                                         badges: [ "blue", "red" ],
                                         points: [
                                          { points: 81, bonus: 8 },
                                          { points: 55, bonus: 20 }
                                         ]
                                    });
               return util.save();
         }).then(function(){
              assert(util.isNew === false);
              util = new Utilisateur({
                                         nom: "xi",
                                         age: 34,
                                         type: 2,
                                         statut: "D",
                                         favorites: { artiste: "Chagall", aliment: "chocolate" },
                                         termine: [ 5, 11 ],
                                         badges: [ "red", "black" ],
                                         points: [
                                          { points: 53, bonus: 15 },
                                          { points: 51, bonus: 15 }
                                         ]
                                    });
               return util.save();
         }).then(function(){
               assert(util.isNew === false);
               util = new Utilisateur({
                                          nom: "xyz",
                                          age: 23,
                                          type: 2,
                                          statut: "D",
                                          favorites: { artiste: "Noguchi", aliment: "nougat" },
                                          termine: [ 14, 6 ],
                                          badges: [ "orange" ],
                                          points: [
                                           { points: 71, bonus: 20 }
                                          ]
                                     });
                return util.save();
         }).then(function(){
           assert(util.isNew === false);
           util = new Utilisateur({
                                      nom: "abc",
                                      age: 43,
                                      type: 1,
                                      statut: "A",
                                      favorites: { aliment: "pizza", artiste: "Picasso" },
                                      termine: [ 18, 12 ],
                                      badges: [ "black", "blue" ],
                                      points: [
                                       { points: 78, bonus: 8 },
                                       { points: 57, bonus: 7 }
                                      ]
                                });
            return util.save();
         }).then(function(){
             assert(util.isNew === false);
             Categorie.findOne({nom:"Drinks"}).then(function(result){
                  prod = new Produit({
                      nom:"Chai Tea",
                      categorieId:result._id,
                      quantite:"10 boxes x 20 bags",
                      prix:18.00,
                      quantiteRestante:39,
                      quantiteCommande:0,
                      reapprovisionnement:10,
                      Discontinue:false
                  });
                  prod.save().then(function(){
                      assert(prod.isNew === false);
                      done();
                  });
             });
         });
     })
});
