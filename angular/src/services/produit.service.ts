/*
* Program : classe ProduitService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient,HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduit } from '../interfaces/produit';
import { Service } from './service';
import { Produit } from '../classes/produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService extends Service{

  constructor(private http:HttpClient) {
       super();
  }

  getProduitList():Observable<IProduit[]>{
      this.Path = "/produit";
      return this.http.get<IProduit[]>(this.Url);
  }

  getProduitById(id:string):Observable<IProduit>{
      this.Path = "/produit?id=" + id;
      return this.http.get<IProduit>(this.Url);
  }

  updateProduit(id:string,newProduit:Produit):Observable<HttpEvent<IProduit>>{
      this.Path = "/produit/" + id;
      return this.http.put<IProduit>(this.Url, newProduit, this.HttpOptions);
  }
  saveProduit(newProduit:any):Observable<IProduit>{
      this.Path = "/produit";
      return this.http.post<IProduit>(this.Url,newProduit);
  }
}
