/*
Program : Fournisseur controller
Écrit par : Dan Duc Dao
*/

const Produit = require('../model/produit');

module.exports = function(app){
    app.get('/fournisseur',function(req,res,next){
      if(!req.query.id)
      {
        Produit.Fournisseur.find({}).then(function(result){
             res.send(result);
         });
      }else{
        Produit.Fournisseur.find({_id:req.query.id}).then(function(result){
             res.send(result);
         }).catch(next);
      }
    });
}
