/*
Program : Fournisseur controller
Écrit par : Dan Duc Dao
*/

"use strict";

let status = 200;

module.exports = function(app, food) {
  app.get("/fournisseur", function(req, res, next) {
    food.query("SELECT * FROM fournisseurs ORDER BY nom", function(
      error,
      results
    ) {
      if (error) status = 500;
      else if (results.length === 0) status = 204;
      return res.status(status).send(results);
    });
  });

  app.get("/fournisseur/:id", function(req, res, next) {
    let id = req.params.id;
    if (!id || id === "undefined") return res.status(400).send();
    food.query("SELECT * FROM fournisseurs WHERE id = ?", id, function(
      error,
      result
    ) {
      if (error) status = 500;
      else if (result.length === 0) status = 204;
      return res.status(status).send(result[0]);
    });
  });
};
