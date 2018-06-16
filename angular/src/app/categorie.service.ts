/*
* Program : Class CategorieService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from './categorie';
import { Service } from './service';
import { DetailCategorie } from './detail-categorie';
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

  getCategorieById(id:String){
      this.Path = "/categorie?id=" + id;
      return this.http.get<ICategorie>(this.Url);
  }

  updateCategorie(id:string,newCategorie:DetailCategorie){
      this.Path = "/categorie/" + id;
      return this.http.put<ICategorie>(this.Url,newCategorie, this.HttpOptions);
  }
}
