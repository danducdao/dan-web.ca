/*
* Program : classe EmailService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "./service";

@Injectable({
  providedIn: "root"
})
export class EmailService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  send(email: any): Observable<any> {
    this.Path =
      "/send?nom=" +
      email.nom +
      "&sujet=" +
      email.sujet +
      "&courriel=" +
      email.courriel +
      "&message=" +
      email.message;

    return this.http.get<any>(this.Url);
  }
}
