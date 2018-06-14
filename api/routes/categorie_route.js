/*
* Program : Router produit
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const router = express.Router();
const Produit = require('../model/produit');

router.get('/categorie',function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin', '*');
   if(!req.query.id)
   {
       Produit.Categorie.find({}).then(function(result){
            res.send(result);
       });
   }else{
       Produit.Categorie.findOne({_id:req.query.id}).then(function(result){
            res.send(result);
       });
   }
});

router.post('/categorie',function(req,res,next){
    res.send({type:"POST CATEGORIE"});
});

router.put('/categorie/:id',function(req,res,next){
     res.send({type:"PUT CATEGORIE"});
});

router.delete('/categorie/:id',function(req,res,next){
     res.send({type:"DELETE CATEGORIE"});
});

module.exports = router;
