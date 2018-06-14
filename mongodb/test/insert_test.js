/*
* Program : Insérer de donnée
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');
const Personne = require('../model/personne');
const Utilisateur = require('../model/utilisateur');
const Produit = require('../model/produit');

describe('Sauvegarder de données dans les collections',function(){

  beforeEach(function(done){

        var cat = new Produit.Categorie({
                                  nom:"Drinks",
                                  description:"Soft drinks, coffees, teas, beers, and ales",
                                  image:""
                                });
        cat.save().then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Condiments",
                                    description:"Sweet and savory sauces, relishes, spreads, and seasonings",
                                    image:""
                                  });
              return cat.save();
        }).then(function(){
              cat = new Produit.Categorie({
                                    nom:"Confections",
                                    description:"Desserts, candies, and sweet breads",
                                    image:""
                                  });
              return  cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Dairy Products",
                                    description:"Cheeses",
                                    image:""
                                  });
              return cat.save();
        }).then(function(){
                assert(cat.isNew === false);
                cat = new Produit.Categorie({
                                      nom:"Grains/Cereals",
                                      description:"Breads, crackers, pasta, and cereal",
                                      image:""
                                    });

                return cat.save();
        }).then(function(){
               assert(cat.isNew === false);
               cat = new Produit.Categorie({
                                     nom:"Meat/Poultry",
                                     description:"Prepared meats",
                                     image:""
                                   });

                  return cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Produce",
                                    description:"Dried fruit and bean curd",
                                    image:""
                                  });
                return cat.save();
        }).then(function(){
            assert(cat.isNew === false);
            cat = new Produit.Categorie({
                                  nom:"Seafood",
                                  description:"Seaweed and fish",
                                  image:""
                                });
        }).then(function(){
            done();
        });
  });

  beforeEach(function(done){
          var fournisseur = new Produit.Fournisseur({
                                      compagnie:"Exotic Liquids",
                                      contact:"Charlotte Cooper",
                                      titre:"Purchasing Manager",
                                      address:"49 Gilbert St.",
                                      ville:"London",
                                      region:"",
                                      codePostal:"EC1 4SD",
                                      pays:"UK",
                                      telephone:"(171) 555-2222",
                                      fax:"",
                                      siteWeb:""
                                  });
          fournisseur.save().then(function(){
                assert(fournisseur.isNew === false);
                fournisseur = new Produit.Fournisseur({
                                            compagnie:"New Orleans Cajun Delights",
                                            contact:"Shelley Burke",
                                            titre:"Order Administrator",
                                            address:"P.O. Box 78934",
                                            ville:"New Orleans",
                                            region:"LA",
                                            codePostal:"70117",
                                            pays:"USA",
                                            telephone:"(100) 555-4822",
                                            fax:"",
                                            siteWeb:""
                                        });
                        return fournisseur.save();
                  }).then(function(){
                      assert(fournisseur.isNew === false);
                      fournisseur = new Produit.Fournisseur({
                                                  compagnie:"Grandma Kelly's Homestead",
                                                  contact:"Regina Murphy",
                                                  titre:"Sales Representative",
                                                  address:"707 Oxford Rd.",
                                                  ville:"Ann Arbor",
                                                  region:"MI",
                                                  codePostal:"48104",
                                                  pays:"USA",
                                                  telephone:"(313) 555-5735",
                                                  fax:"(313) 555-3349",
                                                  siteWeb:""
                                              });
                        return fournisseur.save();
                  }).then(function(){
                        assert(fournisseur.isNew === false);
                        fournisseur = new Produit.Fournisseur({
                                                    compagnie:"Tokyo Traders",
                                                    contact:"Yoshi Nagase",
                                                    titre:"Marketing Manager",
                                                    address:"9-8 Sekimai Musashino-shi",
                                                    ville:"Tokyo",
                                                    region:"",
                                                    codePostal:"100",
                                                    pays:"Japan",
                                                    telephone:"(03) 3555-5011",
                                                    fax:"",
                                                    siteWeb:""
                                                });
                            return fournisseur.save();
                  }).then(function(){
                       assert(fournisseur.isNew === false);
                       fournisseur = new Produit.Fournisseur({
                                                   compagnie:"Cooperativa de Quesos 'Las Cabras'",
                                                   contact:"Antonio del Valle Saavedra",
                                                   titre:"Export Administrator",
                                                   address:"Calle del Rosal 4",
                                                   ville:"Oviedo",
                                                   region:"Asturias",
                                                   codePostal:"33007",
                                                   pays:"Spain",
                                                   telephone:"(98) 598 76 54",
                                                   fax:"",
                                                   siteWeb:""
                                               });
                           return fournisseur.save();

                  }).then(function(){
                       assert(fournisseur.isNew === false);
                       fournisseur = new Produit.Fournisseur({
                                                   compagnie:"Mayumi's",
                                                   contact:"Antonio del Valle Saavedra",
                                                   titre:"Marketing Representative",
                                                   address:"92 Setsuko Chuo-ku",
                                                   ville:"Osaka",
                                                   region:"",
                                                   codePostal:"545",
                                                   pays:"Japan",
                                                   telephone:"(06) 431-7877",
                                                   fax:"",
                                                   siteWeb:""
                                               });
                           return fournisseur.save();
                  }).then(function(){
                       assert(fournisseur.isNew === false);
                       fournisseur = new Produit.Fournisseur({
                                                   compagnie:"Pavlova, Ltd.",
                                                   contact:"Ian Devling",
                                                   titre:"Marketing Manager",
                                                   address:"74 Rose St. Moonie Ponds",
                                                   ville:"Melbourne",
                                                   region:"Victoria",
                                                   codePostal:"3058",
                                                   pays:"Australia",
                                                   telephone:"(03) 444-2343",
                                                   fax:"(03) 444-6588",
                                                   siteWeb:""
                                               });
                           return fournisseur.save();
                  }).then(function(){
                       assert(fournisseur.isNew === false);
                       fournisseur = new Produit.Fournisseur({
                                                   compagnie:"Specialty Biscuits, Ltd.",
                                                   contact:"Peter Wilson",
                                                   titre:"Sales Representative",
                                                   address:"29 King's Way",
                                                   ville:"Manchester",
                                                   region:"",
                                                   codePostal:"M14 GSD",
                                                   pays:"UK",
                                                   telephone:"(161) 555-4448",
                                                   fax:"",
                                                   siteWeb:""
                                               });
                           return fournisseur.save();
                  }).then(function(){
                         assert(fournisseur.isNew === false);
                         fournisseur = new Produit.Fournisseur({
                                                     compagnie:"PB Knäckebröd AB",
                                                     contact:"Lars Peterson",
                                                     titre:"Sales Agent",
                                                     address:"Kaloadagatan 13",
                                                     ville:"Göteborg",
                                                     region:"",
                                                     codePostal:"S-345 67",
                                                     pays:"Sweden",
                                                     telephone:"031-987 65 43",
                                                     fax:"031-987 65 91",
                                                     siteWeb:""
                                                 });
                             return fournisseur.save();
                  }).then(function(){
                       done();
                  });
  });
  it('Sauvegarder de données dans collection personne', function(done){
        var pers = new Personne({
             nom:'Jonh Doe',
             poids:68
        });
        pers.save().then(function(){
            assert(pers.isNew === false);
            done();
          });
  });
  it('Sauvegarder de données dans collection utilisateur', function(done){

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
                     done();
           });
    });
    it('Sauvegarder de données dans collection produits de catégorie Drinks', function(done){

            Produit.Categorie.findOne({nom:"Drinks"}).then(function(result){
                    assert(result.nom === "Drinks");
                    var prod = new Produit.Produit({
                        nom:"Chai Tea",
                        category:[  {
                                        nom:result.nom,
                                        description:result.description,
                                        image:result.image
                                      }
                                    ],
                        fournisseur:{
                                        compagnie:"Exotic Liquids",
                                        contact:"Charlotte Cooper",
                                        titre:"Purchasing Manager",
                                        address:"49 Gilbert St.",
                                        ville:"London",
                                        region:"",
                                        codePostal:"EC1 4SD",
                                        pays:"UK",
                                        telephone:"(171) 555-2222",
                                        fax:"",
                                        siteWeb:""
                                    },
                        quantite:"10 boxes x 20 bags",
                        prix:18.00,
                        quantiteRestante:39,
                        quantiteCommande:0,
                        reapprovisionnement:10,
                        Discontinue:false
                    });
                    prod.save().then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Chang",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:{
                                                              compagnie:"Exotic Liquids",
                                                              contact:"Charlotte Cooper",
                                                              titre:"Purchasing Manager",
                                                              address:"49 Gilbert St.",
                                                              ville:"London",
                                                              region:"",
                                                              codePostal:"EC1 4SD",
                                                              pays:"UK",
                                                              telephone:"(171) 555-2222",
                                                              fax:"",
                                                              siteWeb:""
                                                          },
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
                        prod = new Produit.Produit({
                                              nom:"Laughing Lumberjack Lager",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Guaraná Fantástica",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Sasquatch Ale",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Steeleye Stout",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Côte de Blaye",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Chartreuse verte",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Ipoh Coffee",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Outback Lager",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Rhönbräu Klosterbier",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
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
                        prod = new Produit.Produit({
                                              nom:"Lakkalikööri",
                                              category:[  {
                                                              nom:result.nom,
                                                              description:result.description,
                                                              image:result.image
                                                            }
                                                          ],
                                              fournisseur:"",
                                              quantite:"500 ml",
                                              prix:18.00,
                                              quantiteRestante:57,
                                              quantiteCommande:0,
                                              reapprovisionnement:20,
                                              Discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                       done();
                    });
          });
    });

    it('Sauvegarder de données dans collection produits de catégorie Condiments', function(done){

            Produit.Categorie.findOne({nom:"Condiments"}).then(function(result){
                        assert(result.nom === "Condiments");
                        var prod = new Produit.Produit({
                            nom:"Aniseed Syrup",
                            category:[  {
                                            nom:result.nom,
                                            description:result.description,
                                            image:result.image
                                          }
                                        ],
                            fournisseur:{
                                            compagnie:"Exotic Liquids",
                                            contact:"Charlotte Cooper",
                                            titre:"Purchasing Manager",
                                            address:"49 Gilbert St.",
                                            ville:"London",
                                            region:"",
                                            codePostal:"EC1 4SD",
                                            pays:"UK",
                                            telephone:"(171) 555-2222",
                                            fax:"",
                                            siteWeb:""
                                        },
                            quantite:"12 - 550 ml bottles",
                            prix:10.00,
                            quantiteRestante:63,
                            quantiteCommande:70,
                            reapprovisionnement:25,
                            Discontinue:false
                        });
                        prod.save().then(function(){
                            assert(prod.isNew === false);
                            prod = new Produit.Produit({
                                    nom:"Original Frankfurter grüne Soße",
                                    category:[  {
                                                    nom:result.nom,
                                                    description:result.description,
                                                    image:result.image
                                                  }
                                                ],
                                    fournisseur:"",
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
                             prod = new Produit.Produit({
                                     nom:"Sirop d'érable",
                                     category:[  {
                                                     nom:result.nom,
                                                     description:result.description,
                                                     image:result.image
                                                   }
                                                 ],
                                     fournisseur:"",
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
                              prod = new Produit.Produit({
                                      nom:"Vegie-spread",
                                      category:[  {
                                                      nom:result.nom,
                                                      description:result.description,
                                                      image:result.image
                                                    }
                                                  ],
                                      fournisseur:"",
                                      quantite:"15 - 625 g jars",
                                      prix:43.90,
                                      quantiteRestante:24,
                                      quantiteCommande:0,
                                      reapprovisionnement:5,
                                      Discontinue:false
                                  });
                               return prod.save();
                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Chef Anton's Cajun Seasoning",
                                     category:[  {
                                                     nom:result.nom,
                                                     description:result.description,
                                                     image:result.image
                                                   }
                                                 ],
                                     fournisseur:{
                                                     compagnie:"New Orleans Cajun Delights",
                                                     contact:"Shelley Burke",
                                                     titre:"Order Administrator",
                                                     address:"P.O. Box 78934",
                                                     ville:"New Orleans",
                                                     region:"LA",
                                                     codePostal:"70117",
                                                     pays:"USA",
                                                     telephone:"(100) 555-4822",
                                                     fax:"",
                                                     siteWeb:""
                                                 },
                                     quantite:"48 - 6 oz jars",
                                     prix:22.00,
                                     quantiteRestante:53,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     Discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Chef Anton's Gumbo Mix",
                                     category:[  {
                                                     nom:result.nom,
                                                     description:result.description,
                                                     image:result.image
                                                   }
                                                 ],
                                     fournisseur:{
                                                     compagnie:"New Orleans Cajun Delights",
                                                     contact:"Shelley Burke",
                                                     titre:"Order Administrator",
                                                     address:"P.O. Box 78934",
                                                     ville:"New Orleans",
                                                     region:"LA",
                                                     codePostal:"70117",
                                                     pays:"USA",
                                                     telephone:"(100) 555-4822",
                                                     fax:"",
                                                     siteWeb:""
                                                 },
                                     quantite:"36 boxes",
                                     prix:21.35,
                                     quantiteRestante:0,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     Discontinue:true
                                 });
                                 return prod.save();
                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Grandma's Boysenberry Spread",
                                     category:[  {
                                                     nom:result.nom,
                                                     description:result.description,
                                                     image:result.image
                                                   }
                                                 ],
                                     fournisseur:{
                                                     compagnie:"Grandma Kelly's Homestead",
                                                     contact:"Regina Murphy",
                                                     titre:"Sales Representative",
                                                     address:"707 Oxford Rd.",
                                                     ville:"Ann Arbor",
                                                     region:"MI",
                                                     codePostal:"48104",
                                                     pays:"USA",
                                                     telephone:"(313) 555-5735",
                                                     fax:"(313) 555-3349",
                                                     siteWeb:""
                                                 },
                                     quantite:"12 - 8 oz jars",
                                     prix:25.00,
                                     quantiteRestante:120,
                                     quantiteCommande:0,
                                     reapprovisionnement:25,
                                     Discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Northwoods Cranberry Sauce",
                                     category:[  {
                                                     nom:result.nom,
                                                     description:result.description,
                                                     image:result.image
                                                   }
                                                 ],
                                     fournisseur:{
                                                     compagnie:"Grandma Kelly's Homestead",
                                                     contact:"Regina Murphy",
                                                     titre:"Sales Representative",
                                                     address:"707 Oxford Rd.",
                                                     ville:"Ann Arbor",
                                                     region:"MI",
                                                     codePostal:"48104",
                                                     pays:"USA",
                                                     telephone:"(313) 555-5735",
                                                     fax:"(313) 555-3349",
                                                     siteWeb:""
                                                 },
                                     quantite:"12 - 12 oz jars",
                                     prix:40.00,
                                     quantiteRestante:6,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     Discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                               done();
                           })
                });
       });

       it('Sauvegarder de données dans collection produits de catégorie Confections', function(done){
              Produit.Categorie.findOne({nom:"Confections"}).then(function(result){
                     assert(result.nom === "Confections");
                     prod = new Produit.Produit({
                         nom:"Teatime Chocolate Biscuits",
                         category:[  {
                                         nom:result.nom,
                                         description:result.description,
                                         image:result.image
                                       }
                                     ],
                         fournisseur:"",
                         quantite:"10 boxes x 12 pieces",
                         prix:9.20,
                         quantiteRestante:25,
                         quantiteCommande:0,
                         reapprovisionnement:5,
                         Discontinue:false
                     });
                     prod.save().then(function(){
                         assert(prod.isNew === false);
                         prod = new Produit.Produit({
                             nom:"Teatime Chocolate Biscuits",
                             category:[  {
                                             nom:result.nom,
                                             description:result.description,
                                             image:result.image
                                           }
                                         ],
                             fournisseur:{
                                             compagnie:"Specialty Biscuits, Ltd.",
                                             contact:"Peter Wilson",
                                             titre:"Sales Representative",
                                             address:"29 King's Way",
                                             ville:"Manchester",
                                             region:"",
                                             codePostal:"M14 GSD",
                                             pays:"UK",
                                             telephone:"(161) 555-4448",
                                             fax:"",
                                             siteWeb:""
                                         },
                             quantite:"10 boxes x 12 pieces",
                             prix:9.20,
                             quantiteRestante:25,
                             quantiteCommande:0,
                             reapprovisionnement:5,
                             Discontinue:false
                         });
                         return prod.save();

                      }).then(function(){
                         assert(prod.isNew === false);
                         prod = new Produit.Produit({
                            nom:"Sir Rodney's Marmalade",
                            category:[  {
                                            nom:result.nom,
                                            description:result.description,
                                            image:result.image
                                          }
                                        ],
                            fournisseur:{
                                            compagnie:"Specialty Biscuits, Ltd.",
                                            contact:"Peter Wilson",
                                            titre:"Sales Representative",
                                            address:"29 King's Way",
                                            ville:"Manchester",
                                            region:"",
                                            codePostal:"M14 GSD",
                                            pays:"UK",
                                            telephone:"(161) 555-4448",
                                            fax:"",
                                            siteWeb:""
                                        },
                            quantite:"30 gift boxes",
                            prix:81.00,
                            quantiteRestante:40,
                            quantiteCommande:0,
                            reapprovisionnement:0,
                            Discontinue:false
                        });
                        return prod.save();

                      }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                           nom:"Sir Rodney's Scones",
                           category:[  {
                                           nom:result.nom,
                                           description:result.description,
                                           image:result.image
                                         }
                                       ],
                           fournisseur:{
                                           compagnie:"Specialty Biscuits, Ltd.",
                                           contact:"Peter Wilson",
                                           titre:"Sales Representative",
                                           address:"29 King's Way",
                                           ville:"Manchester",
                                           region:"",
                                           codePostal:"M14 GSD",
                                           pays:"UK",
                                           telephone:"(161) 555-4448",
                                           fax:"",
                                           siteWeb:""
                                       },
                           quantite:"24 pkgs. x 4 pieces",
                           prix:10.00,
                           quantiteRestante:3,
                           quantiteCommande:40,
                           reapprovisionnement:5,
                           Discontinue:false
                       });
                       return prod.save();
                      }).then(function(){
                          done();
                      })
                });
          });
});

/*
Produit.Categorie.findOne({nom:"Dairy Products"}).then(function(result){
      prod = new Produit.Produit({
          nom:"Gorgonzola Telino",
          category:[  {
                          nom:result.nom,
                          description:result.description,
                          image:result.image
                        }
                      ],
          fournisseur:"",
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
});*/
