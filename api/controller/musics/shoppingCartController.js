/*
Program : shopping cart music controller
Écrit par : Dan Duc Dao
*/

"use strict";

module.exports = function(app, music) {
  app.get("/shoppingCartMusic/genre", function(req, res, next) {
    music.query(
      "SELECT * FROM genres WHERE active = ? ORDER BY nom",
      1,
      function(error, results) {
        if (error) return;
        return res.send(results);
      }
    );
  });

  app.get("/shoppingCartMusic/album", function(req, res, next) {
    music.query(
      "SELECT * FROM albums WHERE active = ? ORDER BY titre",
      1,
      function(error, results) {
        if (error) return;
        return res.send(results);
      }
    );
  });

  app.get("/shoppingCartMusic/album/:id", function(req, res, next) {
    music.query(
      "SELECT artistes.nom AS artiste_nom, " +
        "genres.id AS genre_id, " +
        "genres.nom AS genre_nom, " +
        "albums.* " +
        "FROM albums " +
        "INNER JOIN artistes " +
        "ON artistes.id = albums.artiste_id " +
        "INNER JOIN genres " +
        "ON genres.id = albums.genre_id " +
        "WHERE albums.id = ? AND albums.active = ?",
      [req.params.id, 1],
      function(error, result) {
        if (error) return;
        return res.send(result[0]);
      }
    );
  });
};
