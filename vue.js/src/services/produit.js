/*
* Program : Classe ProduitService
* Écrit par : Dan Duc Dao
*/

import { Service } from "../services/service";

export var ProduitService = function() {
  this.service = new Service();
};

ProduitService.prototype = {
  produitListe: function() {
    this.service.setUrl("/produit");
    return this.service.http.get(this.service.getUrl());
  },

  getProduitById: function(id) {
    this.service.setUrl("/produit/" + id);
    return this.service.http.get(this.service.getUrl());
  },

  saveProduit: function(produit) {
    this.service.setUrl("/produit");
    return this.service.http.post(this.service.getUrl(), produit);
  },

  updateProduit: function(produit) {
    this.service.setUrl("/produit");
    return this.service.http.put(this.service.getUrl(), produit);
  },

  removeProduitById: function(id) {
    this.service.setUrl("/produit/" + id);
    return this.service.http.delete(this.service.getUrl());
  }
};
