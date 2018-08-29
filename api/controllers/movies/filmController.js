/*
Program : Film controller
Écrit par : Dan Duc Dao
*/

"use strict";

let status = 200;

module.exports = function(app, movie) {
  app.put("/movieadmin/film/:id", function(req, res, next) {
    movie.query(
      "UPDATE films SET active = ? WHERE id = ?",
      [0, req.params.id],
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
