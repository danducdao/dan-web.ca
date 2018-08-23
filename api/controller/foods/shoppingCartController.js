/*
Program : Shopping cart controller
Écrit par : Dan Duc Dao
*/

"use strict";

module.exports = function(app, food) {
  app.get("/shoppingCartFood/:categorieId", function(req, res, next) {
    let id = req.params.categorieId;
    if (!id || id === "undefined") status = 400;
    food.query(
      "SELECT * FROM produits WHERE categorie_id = ? AND discontinue = ? AND active = ? ORDER BY nom",
      [id, 0, 1],
      function(error, results) {
        if (error) status = 500;
        if (results.length === 0) status = 204;
        return res.status(status).send(results);
      }
    );
  });

  app.get("/shoppingCartFood", function(req, res, next) {
    food.query(
      "SELECT * FROM produits WHERE discontinue = ? AND active = ? ORDER BY nom",
      [0, 1],
      function(error, results) {
        if (error) status = 500;
        if (results.length === 0) status = 204;
        return res.status(status).send(results);
      }
    );
  });
};
