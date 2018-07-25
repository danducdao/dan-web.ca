/*
* Program : connection bd
* Écrit par : Dan Duc Dao
*/

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

before(function(done){
    mongoose.connect('mongodb://localhost/test');
    mongoose.connection.once('open', function(){
         console.log('connection avec succès');
         done();
    }).once('error',function(error){
        console.log('erreur',error);
    });
});

//Drop collections personnes
before(function(done){
     mongoose.connection.collections.personnes.drop(function(){
          done();
     });

});

//Drop collection categories
before(function(done){
     mongoose.connection.collections.categories.drop(function(){
          done();
     });
});

//Drop collection employees
before(function(done){
     mongoose.connection.collections.employees.drop(function(){
          done();
     });
});

//Drop collection admins
before(function(done){
     mongoose.connection.collections.admins.drop(function(){
          done();
     });
});

//Drop collection produit
before(function(done){
     mongoose.connection.collections.produits.drop(function(){
          done();
     });
});

//Drop collection fournisseur
before(function(done){
     mongoose.connection.collections.fournisseurs.drop(function(){
          done();
     });
});
