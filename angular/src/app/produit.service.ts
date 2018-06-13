/*
* Program : Appele REST API
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduit } from './produit';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  private _url:string;

  constructor(private http:HttpClient) {
        this.Url = "http://localhost:4000/produit"
  }

  set Url(url:string){
      this._url = url;
  }

  get Url():string{
      return this._url;
  }

  getProduitList(){
      return this.http.get<IProduit[]>(this.Url);
  }
}
