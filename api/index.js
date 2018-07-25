/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const produitController = require('./controller/produitController');
const categorieController = require('./controller/categorieController');
const fournisseurController = require('./controller/fournisseurController');
const googleMapController =  require('./controller/googleMapController');
const shoppingCartController = require('./controller/shoppingCartController');
const adminController = require('./controller/adminController');

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

//app.use(bodyParse.json());
app.use(bodyParse({limit: '50mb'}))

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//Produit controller
produitController(app);

//Categorie controller
categorieController(app)

//Fournisseur controller
fournisseurController(app);

//Google map controller
googleMapController(app);

//Shopping cart controller
shoppingCartController(app);

//Admin controller
adminController(app);

app.use(function(err,req,res,next){
    res.status(422).send({ erreur: err.message});
});

app.use(cors({
  origin: '*',
  credentials: true,
  exposedHeaders: ['Content-Type'],
}));

app.listen(4000, function(){
    console.log('connection avec succès')
});
