/*
* Program : Classe AdminService
* Écrit par : Dan Duc Dao
*/

import { Service } from "./service";

export var AdminService = function() {
  this.service = new Service();
};

AdminService.prototype = {
  authenticate: function(admin) {
    this.service.setUrl("/admin/" + admin.username + "/" + admin.password);
    return this.service.http.get(this.service.getUrl());
  }
};
