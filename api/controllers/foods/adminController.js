/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

"use strict";

const passwordHash = require("password-hash");

let status = 200;

module.exports = function(app, food) {
  app.get("/admin/:username/:password", function(req, res, next) {
    food.query(
      "SELECT password FROM admins WHERE username = ? AND active = ?",
      [req.params.username, 1],
      function(error, result) {
        if (error) status = 500;
        else if (result.length === 0) status = 204;
        if (status === 500 || status === 204) {
          return res.status(status).send(result[0]);
        }
        return res.status(status).send({
          success: passwordHash.verify(req.params.password, result[0].password)
        });
      }
    );
  });
};
