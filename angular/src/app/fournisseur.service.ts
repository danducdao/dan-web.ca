/*
* Program : Service produit
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFournisseur } from './fournisseur';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService extends Service{

  constructor(private http:HttpClient) {
     super();
  }

  getFournisseurList(){
      this.Path = "/fournisseur";
      console.log(this.Url);
      return this.http.get<IFournisseur[]>(this.Url);
  }
}
