/*
* Program : Set up express
* Écrit par : Dan Duc Dao
*/

const express = require('express');
const bodyParse = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const Produit = require('./model/produit');
const fs = require('fs');

const app = express();

mongoose.connect('mongodb://localhost/test');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/categorie',function(req,res,next){
   if(req.query.id)
   {
       Produit.Categorie.findOne({_id:req.query.id}).then(function(result){
            res.send(result);
       });
   }else{
       Produit.Categorie.find({}).then(function(result){
            res.send(result);
       });
   }
});

app.post('/categorie',function(req,res,next){
    res.send({type:"POST CATEGORIE"});
});

app.put('/categorie/:id',function(req,res,next){
      Produit.Categorie.findByIdAndUpdate({_id:req.params.id},req.body).then(function(result){
           res.send(result);
      });
});

app.delete('/categorie/:id',function(req,res,next){
     res.send({type:"DELETE CATEGORIE"});
});

app.get('/produit',function(req,res,next){
  if(req.query.id)
  {
    Produit.Produit.findOne({_id:req.query.id}).then(function(result){
         res.send(result);
     });

  }else{
    Produit.Produit.find({}).then(function(result){
         res.send(result);
     });
  }
});

app.post('/produit',function(req,res,next){
     Produit.Produit.create(req.body).then(function(result){
         res.send(result);
     });
});

app.put('/produit/:id',function(req,res,next){
    Produit.Produit.findByIdAndUpdate({_id:req.params.id},req.body).then(function(result){
         res.send(result);
    });
});

app.delete('/produit/:id',function(req,res,next){
     res.send({type:"DELETE PRODUIT"});
});

app.get('/fournisseur',function(req,res,next){
  if(!req.query.id)
  {
    Produit.Fournisseur.find({}).then(function(result){
         res.send(result);
     });
  }else{
    Produit.Fournisseur.find({_id:req.query.id}).then(function(result){
         res.send(result);
     });
  }
});

app.get('/city', function(req,res)
{
   fs.readFile("./public/city.list.json", "utf8", function(err, data){
      if(err) throw err;
       data = data.split('\n');
       var villes = [];
       for(var i = 0; i < data.length; i++) {
            if(data[i] === "")
               continue;
            var json = JSON.parse(data[i]);
            villes.push(json);
       }
       res.send(villes);
    });
});
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
