/*
Program : Shopping cart controller
Écrit par : Dan Duc Dao
*/

"use strict";

module.exports = function(app, food) {
  app.get("/shoppingCartFood/:categorieId", function(req, res, next) {
    food.query(
      "SELECT * FROM produits WHERE categorie_id = ? AND discontinue = ? AND active = ? ORDER BY nom",
      [req.params.categorieId, 0, 1],
      function(error, results) {
        if (error) console.log(error);
        console.log("nnnn");
        console.log(results);
        return res.send(results);
      }
    );
  });
};
