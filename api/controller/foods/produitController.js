/*
Program : Produit controller
Écrit par : Dan Duc Dao
*/

"use strict";
const moment = require("moment");

module.exports = function(app, food) {
  app.get("/produit", function(req, res, next) {
    food.query(
      "SELECT fournisseurs.nom AS fournisseur_nom, categories.nom AS categorie_nom,produits.* " +
        "FROM produits LEFT JOIN categories " +
        "ON produits.categorie_id = categories.id " +
        "LEFT JOIN fournisseurs " +
        "ON produits.fournisseur_id = fournisseurs.id " +
        "ORDER BY produits.nom",
      1,
      function(error, results) {
        if (error) return;
        return res.send(results);
      }
    );
  });

  app.get("/produit/:id", function(req, res, next) {
    food.query(
      "SELECT * FROM produits WHERE id = ? ORDER BY nom",
      req.params.id,
      function(error, result) {
        if (error) return;
        return res.send(result[0]);
      }
    );
  });

  app.post("/produit", function(req, res, next) {
    let produit = req.body;
    food.query(
      "INSERT produits(nom," +
        "fournisseur_id," +
        "categorie_id," +
        "quantiteParUnite," +
        "prix," +
        "quantiteEnStock," +
        "quantiteCommande," +
        "reapprovisionnement," +
        "discontinue," +
        "created_at) " +
        "VALUES(?,?,?,?,?,?,?,?,?,?)",
      [
        produit.nom,
        produit.fournisseur_id,
        produit.categorie_id,
        produit.quantiteParUnite,
        produit.prix,
        produit.quantiteEnStock,
        produit.quantiteCommande,
        produit.reapprovisionnement,
        produit.discontinue,
        moment().format("YYYY-MM-DD hh:mm:ss")
      ],
      function(error) {
        if (error) return;
        return res.send({ success: true });
      }
    );
  });

  app.put("/produit/:id", function(req, res, next) {
    let produit = req.body;
    food.query(
      "UPDATE produits SET nom = ?," +
        "fournisseur_id = ?," +
        "categorie_id = ?," +
        "quantiteParUnite = ?," +
        "prix = ?," +
        "quantiteEnStock = ?," +
        "quantiteCommande = ?," +
        "reapprovisionnement = ?," +
        "discontinue = ?," +
        "active = ?," +
        "updated_at = ? " +
        "WHERE id = ?",
      [
        produit.nom,
        produit.fournisseur_id,
        produit.categorie_id,
        produit.quantiteParUnite,
        produit.prix,
        produit.quantiteEnStock,
        produit.quantiteCommande,
        produit.reapprovisionnement,
        produit.discontinue,
        produit.active,
        moment().format("YYYY-MM-DD hh:mm:ss"),
        req.params.id
      ],
      function(error) {
        if (error) return;
        return res.send({ success: true });
      }
    );
  });

  app.delete("/produit/:id", function(req, res, next) {
    food.query(
      "UPDATE produits SET active = ? WHERE id = ?",
      [0, req.params.id],
      function(error) {
        if (error) return;
        return res.send({ success: true });
      }
    );
  });
};
