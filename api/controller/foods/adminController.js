/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

"use strict";

const passwordHash = require("password-hash");

module.exports = function(app, food) {
  app.get("/admin/:username/:password", function(req, res, next) {
    food.query(
      "SELECT password FROM admins WHERE username = ? AND active = ?",
      [req.params.username, 1],
      function(error, results) {
        if (error) return;
        return res.send({
          success: passwordHash.verify(req.params.password, results[0].password)
        });
      }
    );
  });
};
