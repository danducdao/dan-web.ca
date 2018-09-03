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
        "code_postale," +
        "pays," +
        "telephone," +
        "cellulaire," +
        "courriel," +
        "date_naissance," +
        "date_embauche," +
        "salaire," +
        "par," +
        "conge_vacance," +
        "conge_maladie," +
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
        employee.code_postale,
        employee.pays,
        employee.telephone,
        employee.cellulaire,
        employee.courriel,
        employee.date_naissance,
        employee.date_embauche,
        employee.salaire,
        employee.par,
        employee.conge_vacance,
        employee.conge_maladie,
        employee.photo,
        employee.note,
        moment().format("YYYY-MM-DD hh:mm:ss")
      ],
      function(error, result) {
        if (error) console.log(error) /*status = 500*/;
        else if (!result || result.insertId === 0) status = 400;
        let status2 = 200;
        if (status !== 400 && status !== 500) {
          admin.password = passwordHash.generate(admin.password);
          food.query(
            "INSERT admins (employee_id, username, password, confirm_password, created_at) VALUES(?,?,?,?,?)",
            [
              result.insertId,
              admin.username,
              admin.password,
              admin.password,
              moment().format("YYYY-MM-DD hh:mm:ss")
            ],
            function(error, result) {
              if (error) status2 = 500;
              else if (!result || result.insertId === 0) status2 = 400;
            }
          );
        }
        if (status === 200 && status2 === 200)
          return res.status(status).send({ success: true });
        else {
          if (status !== 200)
            return res.status(status).send({ success: false });
          else if (status2 !== 200)
            return res.status(status2).send({ success: false });
        }
      }
    );
  });
};
