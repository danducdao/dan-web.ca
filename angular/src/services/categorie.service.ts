/*
* Program : classe CategorieService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ICategorie } from "../interfaces/categorie";
import { Categorie } from "../classes/categorie";
import { Service } from "./service";

@Injectable({
  providedIn: "root"
})
export class CategorieService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  getCategorieList(): Observable<ICategorie[]> {
    this.Path = "/categorie";
    return this.http.get<ICategorie[]>(this.Url);
  }

  getCategorieById(id: string): Observable<ICategorie> {
    this.Path = "/categorie/" + id;
    return this.http.get<ICategorie>(this.Url);
  }

  saveCategorie(newCategorie: any): Observable<any> {
    this.Path = "/categorie";
    return this.http.post<any>(this.Url, newCategorie);
  }

  updateCategorie(id: string, newCategorie: Categorie): Observable<any> {
    this.Path = "/categorie/" + id;
    return this.http.put<any>(this.Url, newCategorie, this.HttpOptions);
  }

  removeCategorieById(id: string): Observable<any> {
    this.Path = "/categorie/" + id;
    return this.http.delete<any>(this.Url);
  }
}
