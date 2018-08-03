/*
* Program : Classe AdminService
* Écrit par : Dan Duc Dao
*/

import { Service } from "./service";

export var EmailService = function(http) {
  this.service = new Service();
  this.http = http;
};

EmailService.prototype = {
  send: function(email) {
    this.service.setPath(
      "/send?nom=" +
        email.nom +
        "&sujet=" +
        email.sujet +
        "&courriel=" +
        email.courriel +
        "&message=" +
        email.message
    );
    return this.http.get(this.service.getUrl());
  }
};
