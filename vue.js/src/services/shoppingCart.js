/*
* Program : Classe ShoppingCartService
* Écrit par : Dan Duc Dao
*/

import { Service } from "../services/service";

export var ShoppingCartService = function() {
  this.service = new Service();
};

ShoppingCartService.prototype = {
  shoppingCartByCategorieId: function(id) {
    this.service.setUrl("/shoppingCartFood/" + id);
    return this.service.http.get(this.service.getUrl());
  },

  shoppingCartListe: function() {
    this.service.setUrl("/shoppingCartFood");
    return this.service.http.get(this.service.getUrl());
  }
};
