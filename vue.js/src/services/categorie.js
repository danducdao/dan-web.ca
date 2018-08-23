/*
* Program : Classe CategorieService
* Écrit par : Dan Duc Dao
*/

import { Service } from "../services/service";

export var CategorieService = function() {
  this.service = new Service();
};

CategorieService.prototype = {
  categorieListe: function() {
    this.service.setUrl("/categorie");
    return this.service.http.get(this.service.getUrl());
  },

  getCategorieById: function(id) {
    this.service.setUrl("/categorie/" + id);
    return this.service.http.get(this.service.getUrl());
  },

  saveCategorie: function(categorie) {
    this.service.setUrl("/categorie");
    return this.service.http.post(this.service.getUrl(), categorie);
  },

  updateCategorie: function(categorie) {
    this.service.setUrl("/categorie");
    return this.service.http.put(this.service.getUrl(), categorie);
  },

  removeCategorieById: function(id) {
    this.service.setUrl("/categorie/" + id);
    return this.service.http.delete(this.service.getUrl());
  }
};
