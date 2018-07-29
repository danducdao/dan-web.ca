/*
Program : Produit controller
Écrit par : Dan Duc Dao
*/

const Produit = require('../model/produit');

module.exports = function(app){
      app.get('/produit',function(req,res,next)
      {
            if(req.query.id)
            {
                  Produit.Produit.findOne( { $and : [ { _id:req.query.id }, { active : true } ] }).then(function(result){
                     res.send(result);
                  }).catch(next);
            }else{
                  Produit.Produit.find({ active : true }).sort({ nom : 'asc'}).then(function(result){
                     res.send(result);
                  });
            }
      });

      app.post('/produit',function(req,res,next)
      {
            Produit.Produit.create(req.body).then(function(result){
               res.send(result);
            }).catch(next);
      });

      app.put('/produit/:id',function(req,res,next)
      {
            Produit.Produit.findByIdAndUpdate({_id:req.params.id},req.body).then(function(result){
                 res.send(result);
            }).catch(next);
      });

      app.delete('/produit/:id',function(req,res,next)
      {
            Produit.Produit.findByIdAndUpdate({_id:req.params.id},{ active: false }).then(function(result){
                 res.send(result);
            }).catch(next);
      });
}
