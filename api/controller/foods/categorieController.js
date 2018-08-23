/*
Program : Categorie controller
Écrit par : Dan Duc Dao
*/

"use strict";

const multer = require("multer");
const moment = require("moment");
multer({ limits: { fileSize: 100000000 } });

let status = 200;

module.exports = function(app, food) {
  app.get("/categorie", function(req, res, next) {
    food.query("SELECT * FROM categories ORDER BY nom", function(
      error,
      results
    ) {
      if (error) status = 500;
      if (results.length === 0) status = 204;
      return res.status(status).send(results);
    });
  });

  app.get("/categorie/:id", function(req, res, next) {
    let id = req.params.id;
    if (!id || id === "undefined") status = 400;
    food.query("SELECT * FROM categories WHERE id = ?", id, function(
      error,
      result
    ) {
      if (error) status = 500;
      if (result.length === 0) status = 204;
      return res.status(status).send(result[0]);
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
      function(error, result) {
        if (error) status = 500;
        if (!result || result.insertId === 0) status = 400;
        return res.status(status).send({ success: true });
      }
    );
  });

  app.put("/categorie", function(req, res, next) {
    let categorie = req.body;
    let id = categorie.id;
    let active = categorie.active;
    food.query(
      "UPDATE categories SET nom = ?, description=?, photo = ?, active = ?, updated_at = ? WHERE id = ?",
      [
        categorie.nom,
        categorie.description,
        categorie.photo,
        active,
        moment().format("YYYY-MM-DD hh:mm:ss"),
        id
      ],
      function(error, result) {
        if (error) status = 500;
        if (!result || result.affectedRows === 0) status = 400;
        if (status !== 400 && status !== 500) {
          food.query(
            "SELECT count(*) AS num FROM produits WHERE categorie_id = ?",
            [id],
            function(error, result) {
              if (error) status = 500;
              if (result.length > 0 && result[0].num > 0) {
                food.query(
                  "UPDATE produits SET active = ? WHERE categorie_id = ?",
                  [active, id],
                  function(error, result) {
                    if (error) status = 500;
                    if (!result || result.affectedRows === 0) status = 400;
                  }
                );
              }
            }
          );
        }
        return res.status(status).send({ success: true });
      }
    );
  });

  app.delete("/categorie/:id", function(req, res, next) {
    let id = req.params.id;
    if (!id || id === "undefined") status = 400;
    food.query(
      "UPDATE categories SET active = ? WHERE id = ?",
      [0, id],
      function(error, result) {
        if (error) status = 500;
        if (!result || result.affectedRows === 0) status = 400;
        if (status !== 400 && status !== 500) {
          food.query(
            "SELECT count(*) AS num FROM produits WHERE categorie_id = ? AND active = ?",
            [id, 1],
            function(error, result) {
              if (error) status = 500;
              if (result.length > 0 && result[0].num > 0) {
                food.query(
                  "UPDATE produits SET active = ? WHERE categorie_id = ?",
                  [0, id],
                  function(error, result) {
                    if (error) status = 500;
                    if (!result || result.affectedRows === 0) status = 400;
                  }
                );
              }
            }
          );
        }
        return res.status(status).send({ success: true });
      }
    );
  });
};
