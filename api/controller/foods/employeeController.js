/*
Program : Employee controller
Écrit par : Dan Duc Dao
*/

"use strict";

const passwordHash = require("password-hash");
const moment = require("moment");

let status = 200;

module.exports = function(app, food) {
  app.post("/employee", function(req, res, next) {
    let employee = req.body.employee;
    let admin = req.body.admin;
    food.query(
      "INSERT employees(nom," +
        "prenom," +
        "abrege," +
        "titre," +
        "statut," +
        "genre," +
        "adresse," +
        "ville," +
        "region," +
        "codePostale," +
        "pays," +
        "telephone," +
        "cellulaire," +
        "courriel," +
        "dateNaissance," +
        "dateEmbauche," +
        "salaire," +
        "par," +
        "congeVacance," +
        "congeMaladie," +
        "photo," +
        "note," +
        "created_at) " +
        "VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
      [
        employee.nom,
        employee.prenom,
        employee.abrege,
        employee.titre,
        employee.statut,
        employee.genre,
        employee.adresse,
        employee.ville,
        employee.region,
        employee.codePostale,
        employee.pays,
        employee.telephone,
        employee.cellulaire,
        employee.courriel,
        employee.dateNaissance,
        employee.dateEmbauche,
        employee.salaire,
        employee.par,
        employee.congeVacance,
        employee.congeMaladie,
        employee.photo,
        employee.note,
        moment().format("YYYY-MM-DD hh:mm:ss")
      ],
      function(error, result) {
        if (error) status = 500;
        if (!result || result.insertId === 0) status = 400;
        if (status !== 400 && status !== 500) {
          admin.password = passwordHash.generate(admin.password);
          food.query(
            "INSERT admins (employee_id, username, password, confirmpassword, created_at) VALUES(?,?,?,?,?)",
            [
              result.insertId,
              admin.username,
              admin.password,
              admin.password,
              moment().format("YYYY-MM-DD hh:mm:ss")
            ],
            function(error, result) {
              if (error) status = 500;
              if (!result || result.insertId === 0) status = 400;
            }
          );
        }
        return res.status(status).send({ success: true });
      }
    );
  });
};
