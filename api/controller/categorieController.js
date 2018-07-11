/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

const Produit = require('../model/produit');
const multer  = require('multer');
multer({limits: {fileSize: 100000000} });

module.exports = function(app){
      app.get('/categorie',function(req,res,next){
         if(req.query.id)
         {
             Produit.Categorie.findOne({_id:req.query.id}).then(function(result){
                  res.send(result);
             }).catch(next);
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
            }).catch(next);
      });

      app.delete('/categorie/:id',function(req,res,next){
           res.send({type:"DELETE CATEGORIE"});
      });
}
