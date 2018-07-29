/*
Program : Employee controller
Écrit par : Dan Duc Dao
*/

const Employee = require('../model/employee');
const Admin = require('../model/admin');
const passwordHash = require('password-hash');
const multer = require('multer');
multer({limits: {fileSize: 100000000} });

module.exports = function(app)
{
    app.post('/employee',function(req,res,next)
    {
        var data = req.body;
        Employee.create(data.employee).then(function(result){
            data.admin.password = passwordHash.generate(data.admin.password);
            data.admin.confirmPassword = data.admin.password;
            Admin.create(data.admin).then(function(result){
               res.send(result);
            }).catch(next);
        });
    });
}
