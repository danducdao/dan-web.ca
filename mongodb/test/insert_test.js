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

  it('Sauvegarder de données dans collection categorie', function(done){
        var cat = new Produit.Categorie({
                                  nom:"Drinks",
                                  description:"Soft drinks, coffees, teas, beers, and ales",
                                  image:"./assets/images/beverages.gif"
                                });
        cat.save().then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Condiments",
                                    description:"Sweet and savory sauces, relishes, spreads, and seasonings",
                                    image:"./assets/images/condiments.gif"
                                  });
              return cat.save();
        }).then(function(){
              cat = new Produit.Categorie({
                                    nom:"Confections",
                                    description:"Desserts, candies, and sweet breads",
                                    image:"./assets/images/confections.gif"
                                  });
              return  cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Dairy Products",
                                    description:"Cheeses",
                                    image:"./assets/images/diary.gif"
                                  });
              return cat.save();
        }).then(function(){
                assert(cat.isNew === false);
                cat = new Produit.Categorie({
                                      nom:"Grains/Cereals",
                                      description:"Breads, crackers, pasta, and cereal",
                                      image:"./assets/images/cereals.gif"
                                    });

                return cat.save();
        }).then(function(){
               assert(cat.isNew === false);
               cat = new Produit.Categorie({
                                     nom:"Meat/Poultry",
                                     description:"Prepared meats",
                                     image:"./assets/images/meat.gif"
                                   });

                  return cat.save();
        }).then(function(){
              assert(cat.isNew === false);
              cat = new Produit.Categorie({
                                    nom:"Produce",
                                    description:"Dried fruit and bean curd",
                                    image:"./assets/images/produce.gif"
                                  });
                return cat.save();
        }).then(function(){
            assert(cat.isNew === false);
            cat = new Produit.Categorie({
                                  nom:"Seafood",
                                  description:"Seaweed and fish",
                                  image:"./assets/images/seafood.gif"
                                });
        }).then(function(){
            done();
        });
  });

  it('Sauvegarder de données dans collection fournisseur', function(done){
          F1 = new Produit.Fournisseur({
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
                F1.save().then(function(){
                assert(F1.isNew === false);
                F2 = new Produit.Fournisseur({
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
                        return F2.save();
                  }).then(function(){
                      assert(F2.isNew === false);
                      F3 = new Produit.Fournisseur({
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
                        return F3.save();
                  }).then(function(){
                        assert(F3.isNew === false);
                        F4 = new Produit.Fournisseur({
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
                            return F4.save();
                  }).then(function(){
                       assert(F4.isNew === false);
                       F5 = new Produit.Fournisseur({
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
                           return F5.save();
                  }).then(function(){
                       assert(F5.isNew === false);
                       F6 = new Produit.Fournisseur({
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
                           return F6.save();
                  }).then(function(){
                       assert(F6.isNew === false);
                       F7 = new Produit.Fournisseur({
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
                           return F7.save();
                  }).then(function(){
                       assert(F7.isNew === false);
                       F8 = new Produit.Fournisseur({
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
                           return F8.save();
                  }).then(function(){
                         assert(F8.isNew === false);
                         F9 = new Produit.Fournisseur({
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
                             return F9.save();
                  }).then(function(){
                    assert(F9.isNew === false);
                    F10 = new Produit.Fournisseur({
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
                        return F10.save();

                  }).then(function(){
                    assert(F10.isNew === false);
                    F11 = new Produit.Fournisseur({
                                                compagnie:"Refrescos Americanas LTDA",
                                                contact:"Carlos Diaz",
                                                titre:"Marketing Manager",
                                                address:"Av. das Americanas 12.890",
                                                ville:"Sao Paulo",
                                                region:"",
                                                codePostal:"5442",
                                                pays:"Brazil",
                                                telephone:"(11) 555 4640",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F11.save();

                  }).then(function(){
                    assert(F11.isNew === false);
                    F12 = new Produit.Fournisseur({
                                                compagnie:"Heli Süßwaren GmbH & Co. KG",
                                                contact:"Petra Winkler",
                                                titre:"Sales Manager",
                                                address:"Tiergartenstraße 5",
                                                ville:"Berlin",
                                                region:"",
                                                codePostal:"10785",
                                                pays:"Germany",
                                                telephone:"(010) 9984510",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F12.save();

                  }).then(function(){
                    assert(F12.isNew === false);
                    F13 = new Produit.Fournisseur({
                                                compagnie:"Plutzer Lebensmittelgroßmärkte AG",
                                                contact:"Martin Bein",
                                                titre:"International Marketing Mgr.",
                                                address:"Bogenallee 51",
                                                ville:"Frankfurt",
                                                region:"",
                                                codePostal:"60439",
                                                pays:"Germany",
                                                telephone:"(069) 992755",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F13.save();

                  }).then(function(){
                    assert(F13.isNew === false);
                    F14 = new Produit.Fournisseur({
                                                compagnie:"Nord-Ost-Fisch Handelsgesellschaft mbH",
                                                contact:"Sven Petersen",
                                                titre:"Coordinator Foreign Markets",
                                                address:"Frahmredder 112a",
                                                ville:"Cuxhaven",
                                                region:"",
                                                codePostal:"27478",
                                                pays:"Germany",
                                                telephone:"(04721) 8713",
                                                fax:"(04721) 8714",
                                                siteWeb:""
                                            });
                        return F14.save();

                  }).then(function(){
                        assert(F14.isNew === false);
                        F15 = new Produit.Fournisseur({
                                                    compagnie:"Formaggi Fortini s.r.l.",
                                                    contact:"Elio Rossi",
                                                    titre:"Sales Representative",
                                                    address:"Viale Dante, 75",
                                                    ville:"Ravenna",
                                                    region:"",
                                                    codePostal:"48100",
                                                    pays:"Italy",
                                                    telephone:"(0544) 60323",
                                                    fax:"(0544) 60603",
                                                    siteWeb:""
                                                });
                            return F15.save();

                  }).then(function(){
                        assert(F15.isNew === false);
                        F16 = new Produit.Fournisseur({
                                                    compagnie:"Norske Meierier",
                                                    contact:"Beate Vileid",
                                                    titre:"Marketing Manager",
                                                    address:"Hatlevegen 5",
                                                    ville:"Sandvika",
                                                    region:"",
                                                    codePostal:"1320",
                                                    pays:"Norway",
                                                    telephone:"(0)2-953010",
                                                    fax:"",
                                                    siteWeb:""
                                                });
                            return F16.save();
                  }).then(function(){
                    assert(F16.isNew === false);
                    F17 = new Produit.Fournisseur({
                                                compagnie:"Bigfoot Breweries",
                                                contact:"Cheryl Saylor",
                                                titre:"Regional Account Rep.",
                                                address:"3400 - 8th Avenue Suite 210",
                                                ville:"Bend",
                                                region:"OR",
                                                codePostal:"97101",
                                                pays:"USA",
                                                telephone:"(503) 555-9931",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F17.save();

                  }).then(function(){
                    assert(F17.isNew === false);
                    F18 = new Produit.Fournisseur({
                                                compagnie:"Svensk Sjöföda AB",
                                                contact:"Michael Björn",
                                                titre:"Sales Representative",
                                                address:"Brovallavägen 231",
                                                ville:"Stockholm",
                                                region:"OR",
                                                codePostal:"S-123 45",
                                                pays:"Sweden",
                                                telephone:"08-123 45 67",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F18.save();

                  }).then(function(){
                    assert(F18.isNew === false);
                    F19 = new Produit.Fournisseur({
                                                compagnie:"Aux joyeux ecclésiastiques",
                                                contact:"Guylène Nodier",
                                                titre:"Sales Manager",
                                                address:"203, Rue des Francs-Bourgeois",
                                                ville:"Paris",
                                                region:"OR",
                                                codePostal:"75004",
                                                pays:"France",
                                                telephone:"(1) 03.83.00.68",
                                                fax:"(1) 03.83.00.62",
                                                siteWeb:""
                                            });
                        return F19.save();

                  }).then(function(){
                    assert(F19.isNew === false);
                    F21 = new Produit.Fournisseur({
                                                compagnie:"New England Seafood Cannery",
                                                contact:"Robb Merchant",
                                                titre:"Wholesale Account Agent",
                                                address:"Order Processing Dept. 2100 Paul Revere Blvd.",
                                                ville:"Boston",
                                                region:"MA",
                                                codePostal:"02134",
                                                pays:"USA",
                                                telephone:"(617) 555-3267",
                                                fax:"(617) 555-3389",
                                                siteWeb:""
                                            });
                        return F21.save();

                  }).then(function(){
                    assert(F21.isNew === false);
                    F22 = new Produit.Fournisseur({
                                                compagnie:"Leka Trading",
                                                contact:"Chandra Leka",
                                                titre:"Owner",
                                                address:"471 Serangoon Loop, Suite #402",
                                                ville:"Singapore",
                                                region:"",
                                                codePostal:"0512",
                                                pays:"Singapore",
                                                telephone:"555-8787",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F22.save();
                  }).then(function(){
                    assert(F22.isNew === false);
                    F23 = new Produit.Fournisseur({
                                                compagnie:"Lyngbysild",
                                                contact:"Niels Petersen",
                                                titre:"Sales Manager",
                                                address:"Lyngbysild Fiskebakken 10",
                                                ville:"Lyngby",
                                                region:"",
                                                codePostal:"2800",
                                                pays:"Denmark",
                                                telephone:"43844108",
                                                fax:"43844115",
                                                siteWeb:""
                                            });
                        return F23.save();
                  }).then(function(){
                    assert(F23.isNew === false);
                    F24 = new Produit.Fournisseur({
                                                compagnie:"Zaanse Snoepfabriek",
                                                contact:"Dirk Luchte",
                                                titre:"Accounting Manager",
                                                address:"Verkoop Rijnweg 22",
                                                ville:"Zaandam",
                                                region:"",
                                                codePostal:"9999 ZZ",
                                                pays:"Netherlands",
                                                telephone:"(12345) 1212",
                                                fax:"(12345) 1210",
                                                siteWeb:""
                                            });
                        return F24.save();
                  }).then(function(){
                    assert(F24.isNew === false);
                    F25 = new Produit.Fournisseur({
                                                compagnie:"Karkki Oy",
                                                contact:"Anne Heikkonen",
                                                titre:"Product Manager",
                                                address:"Valtakatu 12",
                                                ville:"Lappeenranta",
                                                region:"",
                                                codePostal:"53120",
                                                pays:"Finland",
                                                telephone:"(953) 10956",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F25.save();
                  }).then(function(){
                    assert(F25.isNew === false);
                    F26 = new Produit.Fournisseur({
                                                compagnie:"G'day, Mate",
                                                contact:"Wendy Mackenzie",
                                                titre:"Sales Representative",
                                                address:"170 Prince Edward Parade Hunter's Hill",
                                                ville:"Sydney",
                                                region:"NSW",
                                                codePostal:"2042",
                                                pays:"Australia",
                                                telephone:"(02) 555-5914",
                                                fax:"(02) 555-4873",
                                                siteWeb:""
                                            });
                        return F26.save();
                  }).then(function(){
                    assert(F26.isNew === false);
                    F27 = new Produit.Fournisseur({
                                                compagnie:"Ma Maison",
                                                contact:"Jean-Guy Lauzon",
                                                titre:"Marketing Manager",
                                                address:"2960 Rue St. Laurent",
                                                ville:"Montréal",
                                                region:"Québec",
                                                codePostal:"H1J 1C3",
                                                pays:"Canada",
                                                telephone:"(514) 555-9022",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F27.save();
                  }).then(function(){
                    assert(F27.isNew === false);
                    F28 = new Produit.Fournisseur({
                                                compagnie:"Pasta Buttini s.r.l.",
                                                contact:"Giovanni Giudici",
                                                titre:"Order Administrator",
                                                address:"Via dei Gelsomini, 153",
                                                ville:"Salerno",
                                                region:"",
                                                codePostal:"84100",
                                                pays:"Italy",
                                                telephone:"(089) 6547665",
                                                fax:"(089) 6547667",
                                                siteWeb:""
                                            });
                        return F28.save();
                  }).then(function(){
                    assert(F28.isNew === false);
                    F29 = new Produit.Fournisseur({
                                                compagnie:"Escargots Nouveaux",
                                                contact:"Marie Delamare",
                                                titre:"Sales Manager",
                                                address:"22, rue H. Voiron",
                                                ville:"Montceau",
                                                region:"",
                                                codePostal:"71300",
                                                pays:"France",
                                                telephone:"85.57.00.07",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F29.save();
                  }).then(function(){
                    assert(F29.isNew === false);
                    F30 = new Produit.Fournisseur({
                                                compagnie:"Gai pâturage",
                                                contact:"Eliane Noz",
                                                titre:"Sales Representative",
                                                address:"Bat. B 3, rue des Alpes",
                                                ville:"Annecy",
                                                region:"",
                                                codePostal:"74000",
                                                pays:"France",
                                                telephone:"38.76.98.58",
                                                fax:"",
                                                siteWeb:""
                                            });
                        return F30.save();
                  }).then(function(){
                    assert(F30.isNew === false);
                    F31 = new Produit.Fournisseur({
                                                compagnie:"Forêts d'érables",
                                                contact:"Chantal Goulet",
                                                titre:"Accounting Manager",
                                                address:"148 rue Chasseur",
                                                ville:"Ste-Hyacinthe",
                                                region:"Québec",
                                                codePostal:"J2S 7S8",
                                                pays:"Canada",
                                                telephone:"(514) 555-2955",
                                                fax:"(514) 555-2921",
                                                siteWeb:""
                                            });
                        return F31.save();
                  }).then(function(){
                      done();
                  })
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

            Produit.Categorie.findOne({nom:"Drinks"}).then(function(categorie){
                    assert(categorie.nom === "Drinks");
                    var prod = new Produit.Produit({
                        nom:"Chai Tea",
                        category:[  {
                                        _id:categorie._id,
                                        nom:categorie.nom,
                                        description:categorie.description,
                                        image:categorie.image
                                      }
                                    ],
                        fournisseur: F1,
                        quantite:"10 boxes x 20 bags",
                        prix:18.00,
                        quantiteRestante:39,
                        quantiteCommande:0,
                        reapprovisionnement:10,
                        discontinue:false
                    });
                    prod.save().then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Chang",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F1,
                                              quantite:"24 - 12 oz bottles",
                                              prix:19.00,
                                              quantiteRestante:17,
                                              quantiteCommande:40,
                                              reapprovisionnement:25,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Laughing Lumberjack Lager",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F17,
                                              quantite:"24 - 12 oz bottles",
                                              prix:14.00,
                                              quantiteRestante:52,
                                              quantiteCommande:0,
                                              reapprovisionnement:10,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Guaraná Fantástica",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F11,
                                              quantite:"12 - 355 ml cans",
                                              prix:4.50,
                                              quantiteRestante:20,
                                              quantiteCommande:0,
                                              reapprovisionnement:0,
                                              discontinue:true
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Sasquatch Ale",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F17,
                                              quantite:"24 - 12 oz bottles",
                                              prix:14.00,
                                              quantiteRestante:111,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Steeleye Stout",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F17,
                                              quantite:"24 - 12 oz bottles",
                                              prix:18.00,
                                              quantiteRestante:20,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Côte de Blaye",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F19,
                                              quantite:"12 - 75 cl bottles",
                                              prix:263.50,
                                              quantiteRestante:17,
                                              quantiteCommande:0,
                                              reapprovisionnement:15,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Chartreuse verte",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F19,
                                              quantite:"750 cc per bottle",
                                              prix:18.00,
                                              quantiteRestante:69,
                                              quantiteCommande:0,
                                              reapprovisionnement:5,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Ipoh Coffee",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F22,
                                              quantite:"16 - 500 g tins",
                                              prix:46.00,
                                              quantiteRestante:17,
                                              quantiteCommande:10,
                                              reapprovisionnement:25,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Outback Lager",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F7,
                                              quantite:"24 - 355 ml bottles",
                                              prix:15.00,
                                              quantiteRestante:15,
                                              quantiteCommande:10,
                                              reapprovisionnement:30,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Rhönbräu Klosterbier",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F13,
                                              quantite:"24 - 0.5 l bottles",
                                              prix:7.75,
                                              quantiteRestante:125,
                                              quantiteCommande:0,
                                              reapprovisionnement:25,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                                              nom:"Lakkalikööri",
                                              category:[  {
                                                              _id:categorie._id,
                                                              nom:categorie.nom,
                                                              description:categorie.description,
                                                              image:categorie.image
                                                            }
                                                          ],
                                              fournisseur:F25,
                                              quantite:"500 ml",
                                              prix:18.00,
                                              quantiteRestante:57,
                                              quantiteCommande:0,
                                              reapprovisionnement:20,
                                              discontinue:false
                                          });
                        return prod.save();
                    }).then(function(){
                       done();
                    });
          });
    });

    it('Sauvegarder de données dans collection produits de catégorie Condiments', function(done){

            Produit.Categorie.findOne({nom:"Condiments"}).then(function(categorie){
                        assert(categorie.nom === "Condiments");
                        var prod = new Produit.Produit({
                            nom:"Aniseed Syrup",
                            category:[  {
                                            _id:categorie._id,
                                            nom:categorie.nom,
                                            description:categorie.description,
                                            image:categorie.image
                                          }
                                        ],
                            fournisseur:F1,
                            quantite:"12 - 550 ml bottles",
                            prix:10.00,
                            quantiteRestante:63,
                            quantiteCommande:70,
                            reapprovisionnement:25,
                            discontinue:false
                        });
                        prod.save().then(function(){
                            assert(prod.isNew === false);
                            prod = new Produit.Produit({
                                    nom:"Original Frankfurter grüne Soße",
                                    category:[  {
                                                    _id:categorie._id,
                                                    nom:categorie.nom,
                                                    description:categorie.description,
                                                    image:categorie.image
                                                  }
                                                ],
                                    fournisseur:F13,
                                    quantite:"12 boxes",
                                    prix:13.00,
                                    quantiteRestante:0,
                                    quantiteCommande:25,
                                    reapprovisionnement:25,
                                    discontinue:false
                                });
                             return prod.save();
                         }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Sirop d'érable",
                                     category:[  {
                                                     _id:categorie._id,
                                                     nom:categorie.nom,
                                                     description:categorie.description,
                                                     image:categorie.image
                                                   }
                                                 ],
                                     fournisseur:F31,
                                     quantite:"24 - 500 ml bottles",
                                     prix:28.50,
                                     quantiteRestante:113,
                                     quantiteCommande:0,
                                     reapprovisionnement:25,
                                     discontinue:false
                                 });
                              return prod.save();
                          }).then(function(){
                              assert(prod.isNew === false);
                              prod = new Produit.Produit({
                                      nom:"Vegie-spread",
                                      category:[  {
                                                      _id:categorie._id,
                                                      nom:categorie.nom,
                                                      description:categorie.description,
                                                      image:categorie.image
                                                    }
                                                  ],
                                      fournisseur:F7,
                                      quantite:"15 - 625 g jars",
                                      prix:43.90,
                                      quantiteRestante:24,
                                      quantiteCommande:0,
                                      reapprovisionnement:5,
                                      discontinue:false
                                  });
                               return prod.save();
                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Chef Anton's Cajun Seasoning",
                                     category:[  {
                                                     _id:categorie._id,
                                                     nom:categorie.nom,
                                                     description:categorie.description,
                                                     image:categorie.image
                                                   }
                                                 ],
                                     fournisseur:F2,
                                     quantite:"48 - 6 oz jars",
                                     prix:22.00,
                                     quantiteRestante:53,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Chef Anton's Gumbo Mix",
                                     category:[  {
                                                     _id:categorie._id,
                                                     nom:categorie.nom,
                                                     description:categorie.description,
                                                     image:categorie.image
                                                   }
                                                 ],
                                     fournisseur:F2,
                                     quantite:"36 boxes",
                                     prix:21.35,
                                     quantiteRestante:0,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     discontinue:true
                                 });
                                 return prod.save();
                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Grandma's Boysenberry Spread",
                                     category:[  {
                                                     _id:categorie._id,
                                                     nom:categorie.nom,
                                                     description:categorie.description,
                                                     image:categorie.image
                                                   }
                                                 ],
                                     fournisseur:F3,
                                     quantite:"12 - 8 oz jars",
                                     prix:25.00,
                                     quantiteRestante:120,
                                     quantiteCommande:0,
                                     reapprovisionnement:25,
                                     discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                             assert(prod.isNew === false);
                             prod = new Produit.Produit({
                                     nom:"Northwoods Cranberry Sauce",
                                     category:[  {
                                                     _id:categorie._id,
                                                     nom:categorie.nom,
                                                     description:categorie.description,
                                                     image:categorie.image
                                                   }
                                                 ],
                                     fournisseur:F3,
                                     quantite:"12 - 12 oz jars",
                                     prix:40.00,
                                     quantiteRestante:6,
                                     quantiteCommande:0,
                                     reapprovisionnement:0,
                                     discontinue:false
                                 });
                                 return prod.save();

                           }).then(function(){
                               done();
                           })
                });
       });

       it('Sauvegarder de données dans collection produits de catégorie Confections', function(done){
              Produit.Categorie.findOne({nom:"Confections"}).then(function(categorie){
                     assert(categorie.nom === "Confections");
                     prod = new Produit.Produit({
                         nom:"Teatime Chocolate Biscuits",
                         category:[  {
                                         _id:categorie._id,
                                         nom:categorie.nom,
                                         description:categorie.description,
                                         image:categorie.image
                                       }
                                     ],
                         fournisseur:F8,
                         quantite:"10 boxes x 12 pieces",
                         prix:9.20,
                         quantiteRestante:25,
                         quantiteCommande:0,
                         reapprovisionnement:5,
                         discontinue:false
                     });
                     prod.save().then(function(){
                         assert(prod.isNew === false);
                         prod = new Produit.Produit({
                             nom:"Teatime Chocolate Biscuits",
                             category:[  {
                                             _id:categorie._id,
                                             nom:categorie.nom,
                                             description:categorie.description,
                                             image:categorie.image
                                           }
                                         ],
                             fournisseur:F8,
                             quantite:"10 boxes x 12 pieces",
                             prix:9.20,
                             quantiteRestante:25,
                             quantiteCommande:0,
                             reapprovisionnement:5,
                             discontinue:false
                         });
                         return prod.save();

                      }).then(function(){
                         assert(prod.isNew === false);
                         prod = new Produit.Produit({
                            nom:"Sir Rodney's Marmalade",
                            category:[  {
                                            _id:categorie._id,
                                            nom:categorie.nom,
                                            description:categorie.description,
                                            image:categorie.image
                                          }
                                        ],
                            fournisseur:F8,
                            quantite:"30 gift boxes",
                            prix:81.00,
                            quantiteRestante:40,
                            quantiteCommande:0,
                            reapprovisionnement:0,
                            discontinue:false
                        });
                        return prod.save();

                      }).then(function(){
                        assert(prod.isNew === false);
                        prod = new Produit.Produit({
                           nom:"Sir Rodney's Scones",
                           category:[  {
                                           _id:categorie._id,
                                           nom:categorie.nom,
                                           description:categorie.description,
                                           image:categorie.image
                                         }
                                       ],
                           fournisseur:F8,
                           quantite:"24 pkgs. x 4 pieces",
                           prix:10.00,
                           quantiteRestante:3,
                           quantiteCommande:40,
                           reapprovisionnement:5,
                           discontinue:false
                       });
                       return prod.save();
                      }).then(function(){
                          done();
                      })
                });
          });
          it('Sauvegarder de données dans collection produits de catégorie Dairy Products', function(done){
                 Produit.Categorie.findOne({nom:"Dairy Products"}).then(function(categorie){
                        assert(categorie.nom === "Dairy Products");
                        prod = new Produit.Produit({
                            nom:"Queso Cabrales",
                            category:[  {
                                            _id:categorie._id,
                                            nom:categorie.nom,
                                            description:categorie.description,
                                            image:categorie.image
                                          }
                                        ],
                            fournisseur:F5,
                            quantite:"1 kg pkg.",
                            prix:21.00,
                            quantiteRestante:22,
                            quantiteCommande:30,
                            reapprovisionnement:30,
                            discontinue:false
                        });
                        prod.save().then(function(){
                            assert(prod.isNew === false);
                            prod = new Produit.Produit({
                                nom:"Queso Manchego La Pastora",
                                category:[  {
                                                _id:categorie._id,
                                                nom:categorie.nom,
                                                description:categorie.description,
                                                image:categorie.image
                                              }
                                            ],
                                fournisseur:F5,
                                quantite:"110 - 500 g pkgs.",
                                prix:38.00,
                                quantiteRestante:86,
                                quantiteCommande:0,
                                reapprovisionnement:0,
                                discontinue:false
                            });
                            return prod.save();

                        }).then(function(){
                             assert(prod.isNew === false);
                             done();
                        })

                });

          });
});
