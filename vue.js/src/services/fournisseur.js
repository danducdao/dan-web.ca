/*
* Program : Classe FournisseurService
* Écrit par : Dan Duc Dao
*/

import { Service } from "./service";

export var FournisseurService = function() {
  this.service = new Service();
};

FournisseurService.prototype = {
  fournisseurListe: function() {
    this.service.setUrl("/fournisseur");
    return this.service.http.get(this.service.getUrl());
  }
};
