/*
Program : Movie acteur controller
Écrit par : Dan Duc Dao
*/

"use strict";

let status = 200;

module.exports = function(app, movie) {
  app.put("/movieadmin/acteur/:id", function(req, res, next) {
    movie.query(
      "UPDATE acteurs " +
        "INNER JOIN acteur_films ON acteurs.id = acteur_films.acteur_id " +
        "SET acteurs.active = ?, acteur_films.active = ? " +
        "WHERE acteurs.id = ?",
      [0, 0, req.params.id],
      function(error, result) {
        if (error) status = 500;
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
