/*
* Program : Router produit
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const router = express.Router();
const Categorie = require('../model/categorie');

router.get('/categorie',function(req,res,next){
   res.setHeader('Access-Control-Allow-Origin', '*');
   if(!req.query.id)
   {
       Categorie.find({}).then(function(result){
            res.send(result);
       });
   }else{
       Categorie.findOne({_id:req.query.id}).then(function(result){
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
