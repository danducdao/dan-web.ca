/*
* Program : Classe Service 
* Écrit par : Dan Duc Dao
*/

import axios from "axios";

export class Service {
  constructor() {
    this.protocol = "http://";
    this.domain = "localhost:8000/api";
    this.path = "";
  }

  get(path) {
    if (typeof path == undefined || path == "") return;
    return axios.get(this.protocol + this.domain + path);
  }
}
