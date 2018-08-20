/*
* Program : Class Service
* Écrit par : Dan Duc Dao
*/

import { HttpHeaders } from "@angular/common/http";

export class Service {
  private protocol: string;
  private domain: string;
  private path: string;
  private url: string;

  constructor() {
    this.protocol = "http://";
    this.domain = "localhost:4000";
  }

  set Path(path: string) {
    if (path.indexOf("/") === -1) {
      this.path += "/" + path;
    } else {
      this.path = path;
    }
    this.url = this.protocol + this.domain + this.path;
  }

  get Url(): string {
    return this.url;
  }

  get HttpOptions(): any {
    let httpOptions = {
      headers: new HttpHeaders({
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept",
        "Content-Type": "application/json; charset=utf-8",
        "Access-Control-Allow-Origin": "*"
      })
    };
    return httpOptions;
  }
}
