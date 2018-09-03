/*
Program : Produit controller
Écrit par : Dan Duc Dao
*/

"use strict";
const moment = require("moment");

let status = 200;

module.exports = function(app, food) {
  app.get("/produit", function(req, res, next) {
    food.query(
      "SELECT fournisseurs.nom AS fournisseur_nom, " +
        "categories.nom AS categorie_nom, " +
        "produits.* " +
        "FROM produits LEFT JOIN categories " +
        "ON produits.categorie_id = categories.id " +
        "LEFT JOIN fournisseurs " +
        "ON produits.fournisseur_id = fournisseurs.id " +
        "ORDER BY produits.nom",
      1,
      function(error, results) {
        if (error) status = 500;
        else if (results.length === 0) status = 204;
        return res.status(status).send(results);
      }
    );
  });

  app.get("/produit/:id", function(req, res, next) {
    let id = req.params.id;
    if (!id || id === "undefined") return res.status(400).send();
    food.query("SELECT * FROM produits WHERE id = ? ORDER BY nom", id, function(
      error,
      result
    ) {
      if (error) status = 500;
      else if (result.length === 0) status = 204;
      return res.status(status).send(result[0]);
    });
  });

  app.post("/produit", function(req, res, next) {
    let produit = req.body;
    food.query(
      "INSERT produits(nom," +
        "fournisseur_id," +
        "categorie_id," +
        "quantite_par_unite," +
        "prix," +
        "quantite_en_stock," +
        "quantite_commande," +
        "reapprovisionnement," +
        "created_at) " +
        "VALUES(?,?,?,?,?,?,?,?,?)",
      [
        produit.nom,
        produit.fournisseur_id,
        produit.categorie_id,
        produit.quantite_par_unite,
        (produit.prix = produit.prix === "" ? null : produit.prix),
        (produit.quantite_en_stock =
          produit.quantite_en_stock === "" ? null : produit.quantite_en_stock),
        (produit.quantite_commande =
          produit.quantite_commande === "" ? null : produit.quantite_commande),
        (produit.reapprovisionnement =
          produit.reapprovisionnement === ""
            ? null
            : produit.reapprovisionnement),
        moment().format("YYYY-MM-DD hh:mm:ss")
      ],
      function(error, result) {
        if (error) status = 500;
        else if (!result || result.insertId === 0) status = 400;
        return res.status(status).send({ success: true });
      }
    );
  });

  app.put("/produit", function(req, res, next) {
    let produit = req.body;
    food.query(
      "UPDATE produits SET nom = ?," +
        "fournisseur_id = ?," +
        "categorie_id = ?," +
        "quantite_par_unite = ?," +
        "prix = ?," +
        "quantite_en_stock = ?," +
        "quantite_commande = ?," +
        "reapprovisionnement = ?," +
        "discontinue = ?," +
        "active = ?," +
        "updated_at = ? " +
        "WHERE id = ?",
      [
        produit.nom,
        produit.fournisseur_id,
        produit.categorie_id,
        produit.quantite_par_unite,
        (produit.prix = produit.prix === "" ? null : produit.prix),
        (produit.quantite_en_stock =
          produit.quantite_en_stock === "" ? null : produit.quantite_en_stock),
        (produit.quantite_commande =
          produit.quantite_commande === "" ? null : produit.quantite_commande),
        (produit.reapprovisionnement =
          produit.reapprovisionnement === ""
            ? null
            : produit.reapprovisionnement),
        produit.discontinue,
        produit.active,
        moment().format("YYYY-MM-DD hh:mm:ss"),
        produit.id
      ],
      function(error, result) {
        if (error) status = 500;
        else if (!result || result.affectedRows === 0) status = 400;
        return res.status(status).send({ success: true });
      }
    );
  });

  app.delete("/produit/:id", function(req, res, next) {
    let id = req.params.id;
    if (!id || id === "undefined")
      return res.status(400).send({ success: false });
    food.query("UPDATE produits SET active = ? WHERE id = ?", [0, id], function(
      error
    ) {
      if (error) status = 500;
      else if (!result || result.affectedRows === 0) status = 400;
      return res.status(status).send({ success: true });
    });
  });
};
