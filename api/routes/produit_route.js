/*
* Program : Router produit
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const router = express.Router();
const Produit = require('../model/produit');

router.get('/produit',function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin', '*');
   Produit.find({}).then(function(result){
        res.send(result);
    });
});

router.post('/produit',function(req,res,next){
    res.send({type:"POST PRODUIT"});
});

router.put('/produit/:id',function(req,res,next){
     res.send({type:"PUT PRODUIT"});
});

router.delete('/produit/:id',function(req,res,next){
     res.send({type:"DELETE PRODUIT"});
});

module.exports = router;
