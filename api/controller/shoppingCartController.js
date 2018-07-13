/*
Program : Shopping cart controller
Écrit par : Dan Duc Dao
*/

const Produit = require('../model/produit');

module.exports = function(app)
{
      app.get('/shoppingCart',function(req,res,next)
      {
           Produit.Produit.find({ $and : [ { discontinue : { $ne : true } }, { active : true } ] }).then(function(result){
               res.send(result);
           }).catch(next);
      });
}
