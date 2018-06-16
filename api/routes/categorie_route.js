/*
* Program : Router produit
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const router = express.Router();
const Produit = require('../model/produit');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/categorie',function(req,res,next){

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

  //res.header("Access-Control-Allow-Origin", "*");
//res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    //  res.setHeader('Content-Type', 'application/json; charset=utf-8');
    //  res.setHeader('Access-Control-Allow-Headers', 'Authorization');
      //res.append('Access-Control-Allow-Origin', '*');
    //  Produit.Categorie.findByIdAndUpdate({_id:req.params.id},req.body).then(function(categorie){
           res.send({tes:"tesssxxx"});
      //});

});

router.delete('/categorie/:id',function(req,res,next){
     res.send({type:"DELETE CATEGORIE"});
});

module.exports = router;
