/*
* Program : Classe Service 
* Écrit par : Dan Duc Dao
*/

import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export var Service = function() {
  this.protocol = "http://";
  this.domain = "localhost:4000";
  this.url = "";
  this.http = Vue.http;
};

Service.prototype.setUrl = function(path) {
  this.url = this.protocol + this.domain + path;
};

Service.prototype.getUrl = function() {
  return this.url;
};
