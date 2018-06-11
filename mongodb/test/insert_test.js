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

<<<<<<< HEAD
=======

>>>>>>> 56b6cb06c7946d81f8e87ec4db0ee21ea7d3c494
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

<<<<<<< HEAD
  it('Sauvegarder de données dans collection personne', function(done){
          var pers = new Personne({
               nom:'Jonh Doe',
               poids:68
          });
          pers.save().then(function(){
              assert(pers.isNew === false);
              var util = new Utilisateur({
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
                util.save().then(function(){
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
               Categorie.findOne({nom:"Drinks"}).then(function(result){
                    var prod = new Produit({
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
                        prod = new Produit({
                                              nom:"Chang",
                                              categorieId:result._id,
                                              quantite:"24 - 12 oz bottles",
                                              prix:19.00,
                                              quantiteRestante:17,
                                              quantiteCommande:40,
                                              reapprovisionnement:25,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Laughing Lumberjack Lager",
                                              categorieId:result._id,
                                              quantite:"24 - 12 oz bottles",
                                              prix:14.00,
                                              quantiteRestante:52,
                                              quantiteCommande:0,
                                              reapprovisionnement:10,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Guaraná Fantástica",
                                              categorieId:result._id,
                                              quantite:"12 - 355 ml cans",
                                              prix:4.50,
                                              quantiteRestante:20,
                                              quantiteCommande:0,
                                              reapprovisionnement:0,
                                              Discontinue:true
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Sasquatch Ale",
                                              categorieId:result._id,
                                              quantite:"24 - 12 oz bottles",
                                              prix:14.00,
                                              quantiteRestante:111,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Steeleye Stout",
                                              categorieId:result._id,
                                              quantite:"24 - 12 oz bottles",
                                              prix:18.00,
                                              quantiteRestante:20,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Côte de Blaye",
                                              categorieId:result._id,
                                              quantite:"12 - 75 cl bottles",
                                              prix:263.50,
                                              quantiteRestante:17,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Chartreuse verte",
                                              categorieId:result._id,
                                              quantite:"750 cc per bottle",
                                              prix:18.00,
                                              quantiteRestante:69,
                                              quantiteCommande:0,
                                              reapprovisionnement:5,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Ipoh Coffee",
                                              categorieId:result._id,
                                              quantite:"16 - 500 g tins",
                                              prix:46.00,
                                              quantiteRestante:17,
                                              quantiteCommande:10,
                                              reapprovisionnement:25,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Outback Lager",
                                              categorieId:result._id,
                                              quantite:"24 - 355 ml bottles",
                                              prix:15.00,
                                              quantiteRestante:15,
                                              quantiteCommande:10,
                                              reapprovisionnement:30,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Rhönbräu Klosterbier",
                                              categorieId:result._id,
                                              quantite:"24 - 0.5 l bottles",
                                              prix:7.75,
                                              quantiteRestante:125,
                                              quantiteCommande:0,
                                              reapprovisionnement:25,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit({
                                              nom:"Lakkalikööri",
                                              categorieId:result._id,
                                              quantite:"500 ml",
                                              prix:18.00,
                                              quantiteRestante:57,
                                              quantiteCommande:0,
                                              reapprovisionnement:20,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                      Categorie.findOne({nom:"Condiments"}).then(function(result){

                            var prod = new Produit({
                                nom:"Aniseed Syrup",
                                categorieId:result._id,
                                quantite:"12 - 550 ml bottles",
                                prix:10.00,
                                quantiteRestante:63,
                                quantiteCommande:70,
                                reapprovisionnement:25,
                                Discontinue:false
                            });
                            prod.save().then(function(){
                                assert(prod.isNew === false);
                                prod = new Produit({
                                        nom:"Original Frankfurter grüne Soße",
                                        categorieId:result._id,
                                        quantite:"12 boxes",
                                        prix:13.00,
                                        quantiteRestante:0,
                                        quantiteCommande:25,
                                        reapprovisionnement:25,
                                        Discontinue:false
                                    });
                                 return prod.save();
                             }).then(function(){
                                 assert(prod.isNew === false);
                                 prod = new Produit({
                                         nom:"Sirop d'érable",
                                         categorieId:result._id,
                                         quantite:"24 - 500 ml bottles",
                                         prix:28.50,
                                         quantiteRestante:113,
                                         quantiteCommande:0,
                                         reapprovisionnement:25,
                                         Discontinue:false
                                     });
                                  return prod.save();
                              }).then(function(){
                                  assert(prod.isNew === false);
                                  prod = new Produit({
                                          nom:"Vegie-spread",
                                          categorieId:result._id,
                                          quantite:"15 - 625 g jars",
                                          prix:43.90,
                                          quantiteRestante:24,
                                          quantiteCommande:0,
                                          reapprovisionnement:5,
                                          Discontinue:false
                                      });
                                   return prod.save();
                               }).then(function(){
                                 Categorie.findOne({nom:"Confections"}).then(function(result){
                                       prod = new Produit({
                                           nom:"Teatime Chocolate Biscuits",
                                           categorieId:result._id,
                                           quantite:"10 boxes x 12 pieces",
                                           prix:9.20,
                                           quantiteRestante:25,
                                           quantiteCommande:0,
                                           reapprovisionnement:5,
                                           Discontinue:false
                                       });
                                       prod.save().then(function(){
                                           assert(prod.isNew === false);
                                           Categorie.findOne({nom:"Dairy Products"}).then(function(result){
                                                 prod = new Produit({
                                                     nom:"Gorgonzola Telino",
                                                     categorieId:result._id,
                                                     quantite:"12 - 100 g pkgs",
                                                     prix:12.50,
                                                     quantiteRestante:0,
                                                     quantiteCommande:70,
                                                     reapprovisionnement:20,
                                                     Discontinue:false
                                                 });
                                                 prod.save().then(function(){
                                                     assert(prod.isNew === false);
                                                     done();
                                                 });
                                           });
                                       })
                                 });
                             })
                        });
                    });
                 });
             });
        });
    });
=======
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
>>>>>>> 56b6cb06c7946d81f8e87ec4db0ee21ea7d3c494
});
