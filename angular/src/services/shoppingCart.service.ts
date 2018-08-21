/*
* Program : classe ShoppingCartService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "./service";
import { IProduit } from "../interfaces/produit";

@Injectable({
  providedIn: "root"
})
export class ShoppingCartService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  shoppingCartByCategorieId(categorieId): Observable<IProduit[]> {
    this.Path = "/shoppingCartFood/" + categorieId;
    return this.http.get<IProduit[]>(this.Url);
  }
}
