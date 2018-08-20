/*
Program : Fournisseur controller
Écrit par : Dan Duc Dao
*/

"use strict";

module.exports = function(app, food) {
  app.get("/fournisseur", function(req, res, next) {
    food.query("SELECT * FROM fournisseurs ORDER BY nom", function(
      error,
      results
    ) {
      if (error) console.log(error);
      return res.send(results);
    });
  });

  app.get("/fournisseur/:id", function(req, res, next) {
    food.query(
      "SELECT * FROM fournisseurs WHERE id = ?",
      req.params.id,
      function(error, result) {
        if (error) return;
        return res.send(result[0]);
      }
    );
  });
};
