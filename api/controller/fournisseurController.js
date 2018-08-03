/*
Program : Fournisseur controller
Écrit par : Dan Duc Dao
*/

"use strict";

const Produit = require("../model/produit");

module.exports = function(app) {
  app.get("/fournisseur", function(req, res, next) {
    if (!req.query.id) {
      Produit.Fournisseur.find({ active: true })
        .sort({ compagnie: "asc" })
        .then(function(result) {
          res.send(result);
        });
    } else {
      Produit.Fournisseur.findOne({
        $and: [{ _id: req.query.id }, { active: true }]
      })
        .then(function(result) {
          res.send(result);
        })
        .catch(next);
    }
  });
};
