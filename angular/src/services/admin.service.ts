/*
* Program : classe AdminService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "./service";
import { Admin } from "../classes/admin";

@Injectable({
  providedIn: "root"
})
export class AdminService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  authenticate(admin: Admin): Observable<any> {
    this.Path = "/admin/" + admin.username + "/" + admin.password;
    return this.http.get<any>(this.Url);
  }
}
