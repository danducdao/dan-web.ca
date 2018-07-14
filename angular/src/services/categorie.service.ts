/*
* Program : classe CategorieService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RequestOptions} from '@angular/http'
import { Observable } from 'rxjs';
import { ICategorie } from '../interfaces/categorie';
import { Service } from './service';
import { Categorie } from '../classes/categorie';
import { HttpHeaders,HttpParams,HttpEvent } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class CategorieService extends Service
{
    constructor(private http:HttpClient) {
         super();
    }

    getCategorieList():Observable<ICategorie[]>
    {
        this.Path = "/categorie";
        return this.http.get<ICategorie[]>(this.Url);
    }

    getCategorieById(id:string):Observable<ICategorie>
    {
        this.Path = "/categorie?id=" + id;
        return this.http.get<ICategorie>(this.Url);
    }

    saveCategorie(newCategorie:any):Observable<ICategorie>
    {
        this.Path = "/categorie";
        return this.http.post<ICategorie>(this.Url,newCategorie);
    }

    updateCategorie(id:string,newCategorie:Categorie):any
    {
        this.Path = "/categorie/" + id;
        return this.http.put<ICategorie>(this.Url,newCategorie, this.HttpOptions);
    }
    
    removeCategorieById(id:string):Observable<ICategorie>
    {
        this.Path = "/categorie/" + id;
        return this.http.delete<ICategorie>(this.Url);
    }

}
