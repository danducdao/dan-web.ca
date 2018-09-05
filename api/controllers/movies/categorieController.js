/*
Program : Movie categorie controller
Écrit par : Dan Duc Dao
*/

"use strict";

let status = 200;

module.exports = function(app, movie) {
  app.put("/movieadmin/categorie/:id", function(req, res, next) {
    movie.query(
      "UPDATE categories " +
        "INNER JOIN categorie_films ON categories.id = categorie_films.categorie_id " +
        "INNER JOIN films ON categorie_films.film_id = films.id " +
        "SET categories.active = ?, categorie_films.active = ?, films.active = ? " +
        "WHERE categories.id = ?",
      [0, 0, 0, req.params.id],
      function(error, result) {
        if (error) console.log(error) /*status = 500*/;
        else if (!result || result.affectedRows === 0) status = 400;
        if (status !== 400 && status !== 500) {
          return res.status(status).send({
            success: true
          });
        }
        return res.status(status).send({
          success: false
        });
      }
    );
  });
};
