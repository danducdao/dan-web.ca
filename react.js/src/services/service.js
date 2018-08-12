/*
* Program : Classe Service 
* Écrit par : Dan Duc Dao
*/

import axios from "axios";

export var Service = function() {
  this.protocol = "http://";
  this.domain = "localhost:8000/api";
  this.path = "";
};

Service.prototype.setPath = function(path) {
  this.path = path;
};

Service.prototype.getUrl = function() {
  return this.protocol + this.domain + this.path;
};

Service.prototype.getRequest = function() {
  return axios.get(this.getUrl());
};
