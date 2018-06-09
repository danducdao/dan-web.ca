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
