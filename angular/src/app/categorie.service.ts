import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICategorie } from './categorie';
import { Service } from './service';

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
      return this.http.get<ICategorie[]>(this.Url);
  }

}
