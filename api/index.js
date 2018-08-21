/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require("express");
const mysql = require("mysql");
const bodyParse = require("body-parser");
const cors = require("cors");
const app = express();
const produitController = require("./controller/foods/produitController");
const categorieController = require("./controller/foods/categorieController");
const fournisseurController = require("./controller/foods/fournisseurController");
const googleMapController = require("./controller/foods/googleMapController");
const shoppingCartController = require("./controller/foods/shoppingCartController");
const adminController = require("./controller/foods/adminController");
const employeeController = require("./controller/foods/employeeController");
const emailController = require("./controller/foods/emailController");
const shoppingCartMusicController = require("./controller/musics/shoppingCartController");

// connection bd food
const food = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "food"
});

// connection bd music
const music = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "*****",
  database: "music"
});

// connect to database
food.connect();
music.connect();

//app.use(bodyParse.json());
app.use(bodyParse({ limit: "50mb" }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

//Produit controller
produitController(app, food);

//Categorie controller
categorieController(app, food);

//Fournisseur controller
fournisseurController(app, food);

//Google map controller
googleMapController(app);

//Shopping cart food controller
shoppingCartController(app, food);

//Admin controller
adminController(app, food);

//Employee controller
employeeController(app, food);

//Email controller
emailController(app);

//shopping cart music controller
shoppingCartMusicController(app, music);

app.use(function(err, req, res, next) {
  res.status(422).send({ erreur: err.message });
});

app.use(
  cors({
    origin: "*",
    credentials: true,
    exposedHeaders: ["Content-Type"]
  })
);

app.listen(4000, function() {
  console.log("connection avec succès");
});
