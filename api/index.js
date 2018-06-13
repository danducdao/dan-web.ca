/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const produit_route = require('./routes/produit_route');
const categorie_route = require('./routes/categorie_route');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());
app.use(produit_route);
app.use(categorie_route);

app.use(function(err,req,res,next){
    res.send({ erreur: err});
});

app.use(cors({
  origin: 'http://localhost:4200',
  credentials: true,
  exposedHeaders: ['Content-Type'],
}));

app.listen(process.env.port || 4000, function(){
    console.log('connection avec succès')
});
