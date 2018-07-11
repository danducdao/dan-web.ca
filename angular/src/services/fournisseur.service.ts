/*
* Program : classe FournisseurService
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFournisseur } from '../interfaces/fournisseur';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class FournisseurService extends Service{

    constructor(private http:HttpClient) {
       super();
    }

    getFournisseurList():Observable<IFournisseur[]>{
        this.Path = "/fournisseur";
        return this.http.get<IFournisseur[]>(this.Url);
    }
}
