/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

"use strict";

const multer = require("multer");
const moment = require("moment");
multer({ limits: { fileSize: 100000000 } });

module.exports = function(app, food) {
  app.get("/categorie", function(req, res, next) {
    food.query("SELECT * FROM categories ORDER BY nom", function(
      error,
      results
    ) {
      if (error) return;
      return res.send(results);
    });
  });

  app.get("/categorie/:id", function(req, res, next) {
    food.query("SELECT * FROM categories WHERE id = ?", req.params.id, function(
      error,
      result
    ) {
      if (error) return;
      return res.send(result[0]);
    });
  });

  app.post("/categorie", function(req, res, next) {
    let categorie = req.body;
    food.query(
      "INSERT categories (nom,description,photo,created_at) VALUES(?,?,?,?)",
      [
        categorie.nom,
        categorie.description,
        categorie.photo,
        moment().format("YYYY-MM-DD hh:mm:ss")
      ],
      function(error) {
        if (error) return;
        return res.send({ success: true });
      }
    );
  });

  app.put("/categorie/:id", function(req, res, next) {
    let categorie = req.body;
    food.query(
      "UPDATE categories SET nom = ?, description=?, photo = ?, active = ?, updated_at = ? WHERE id = ?",
      [
        categorie.nom,
        categorie.description,
        categorie.photo,
        categorie.active,
        moment().format("YYYY-MM-DD hh:mm:ss"),
        req.params.id
      ],
      function(error) {
        if (error) return;
        return res.send({ success: true });
      }
    );
  });

  app.delete("/categorie/:id", function(req, res, next) {
    let categorie_id = req.params.id;
    food.query(
      "UPDATE categories SET active = ? WHERE id = ?",
      [0, categorie_id],
      function(error) {
        if (error) return;
        food.query(
          "SELECT count(*) AS num FROM produits WHERE categorie_id = ? AND active = ?",
          [100, 1],
          function(error, results) {
            if (error) console.error("Erreur :" + error);
            if (results[0].num > 0) {
              food.query(
                "UPDATE produits SET active = ? WHERE categorie_id = ?",
                [0, categorie_id],
                function(error) {
                  if (error) console.error("Erreur :" + error);
                  else return res.send({ success: true });
                }
              );
            }
          }
        );
        return res.send({ success: true });
      }
    );
  });
};
