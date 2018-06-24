/*
* Program : Service Categorie
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from '../interfaces/categorie';
import { IProduit } from '../interfaces/produit';
import { Service } from './service';
import { Categorie } from '../classes/categorie';
import { HttpHeaders,HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategorieService extends Service {

  constructor(private http:HttpClient) {
       super();
  }

  getCategorieList(){
      this.Path = "/categorie";
      return this.http.get<ICategorie[]>(this.Url);
  }

  getCategorieById(id:string){
      this.Path = "/categorie?id=" + id;
      return this.http.get<ICategorie>(this.Url);
  }

  updateCategorie(id:string,newCategorie:Categorie){
      this.Path = "/categorie/" + id;
      return this.http.put<ICategorie>(this.Url,newCategorie, this.HttpOptions);
  }
}
