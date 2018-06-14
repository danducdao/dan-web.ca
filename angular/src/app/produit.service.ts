/*
* Program : Appele REST API
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduit } from './produit';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ProduitService extends Service{

  constructor(private http:HttpClient) {
       super();
  }

  getProduitList(){
      this.Path = "/produit";
      return this.http.get<IProduit[]>(this.Url);
  }
}
