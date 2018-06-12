/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const produit_route = require('./routes/produit_route');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());
app.use(produit_route);

app.listen(process.env.port || 4000, function(){
    console.log('connection avec succès')
});
