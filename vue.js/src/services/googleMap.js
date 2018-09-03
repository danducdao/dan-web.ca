/*
* Program : Classe GoogleMapService
* Écrit par : Dan Duc Dao
*/

import { Service } from "./service";

export var GoogleMapService = function() {
  this.service = new Service();
};

GoogleMapService.prototype = {
  getGoogleMapVilles: function() {
    this.service.setUrl("/googleMapCities");
    return this.service.http.get(this.service.getUrl());
  },

  getPays: function() {
    this.service.setUrl("/countries");
    return this.service.http.get(this.service.getUrl());
  },

  getVilles: function(abbrPays) {
    this.service.setUrl("/cities?abbrPays=" + abbrPays);
    return this.service.http.get(this.service.getUrl());
  },

  getRegions: function(abbrPays) {
    this.service.setUrl("/regions?abbrPays=" + abbrPays);
    return this.service.http.get(this.service.getUrl());
  }
};
