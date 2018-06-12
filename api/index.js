/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const produit_route = require('./routes/produit_route')

const app = express();

app.use(produit_route);

app.listen(process.env.port || 4000, function(){
    console.log('connection avec succès')
});
