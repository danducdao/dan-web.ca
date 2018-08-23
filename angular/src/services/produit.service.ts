/*
* Program : classe ProduitService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from "@angular/core";
import { HttpClient, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { IProduit } from "../interfaces/produit";
import { Service } from "./service";
import { Produit } from "../classes/produit";

@Injectable({
  providedIn: "root"
})
export class ProduitService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  getProduitList(): Observable<IProduit[]> {
    this.Path = "/produit";
    return this.http.get<IProduit[]>(this.Url);
  }

  getProduitById(id: string): Observable<IProduit> {
    this.Path = "/produit/" + id;
    return this.http.get<IProduit>(this.Url);
  }

  updateProduit(produit: Produit): Observable<any> {
    this.Path = "/produit";
    return this.http.put<any>(this.Url, produit);
  }

  saveProduit(produit: any): Observable<any> {
    this.Path = "/produit";
    return this.http.post<any>(this.Url, produit);
  }

  removeProduitById(id: string): Observable<any> {
    this.Path = "/produit/" + id;
    return this.http.delete<any>(this.Url);
  }
}
