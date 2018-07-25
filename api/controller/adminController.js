/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

const Employee = require('../model/admin');
const passwordHash = require('password-hash');
const multer = require('multer');
multer({limits: {fileSize: 100000000} });

module.exports = function(app)
{
      app.get('/admin',function(req,res,next)
      {
          Employee.findOne( { $and : [{ username : req.query.username } , { active : true } ] }).then(function(data){
             res.send({ success : passwordHash.verify(req.query.password, data.password) });
          }).catch(next);
      });
}
