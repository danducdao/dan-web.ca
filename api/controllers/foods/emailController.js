/*
Program : Email controller
Écrit par : Dan Duc Dao
*/

"use strict";

const multer = require("multer");
multer({ limits: { fileSize: 100000000 } });
const nodemailer = require("nodemailer");

module.exports = function(app) {
  app.get("/send", function(req, res, next) {
    let body = req.query.message;
    body += "<br>";
    body += req.query.nom;

    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: "minhthua011@gmail.com",
        pass: "*****"
      }
    });
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
        res.send({ erreur: "Problème de connection du serveur courriel" });
      } else {
        let mailOptions = {
          from: " 'Jonh Doe' minhthua011@gmail.com",
          to: req.query.courriel,
          subject: req.query.sujet,
          text: "",
          html: body
        };
        transporter.sendMail(mailOptions, (error, info) => {
          if (error) {
            console.log(error);
            res.send({ erreur: error });
            return;
          }
          console.log({
            success: true,
            "Message a été envoyé avec succès: %s": info.messageId
          });
          res.send({
            success: true,
            "Message a été envoyé avec succès: %s": info.messageId
          });
        });
      }
    });
  });
};
