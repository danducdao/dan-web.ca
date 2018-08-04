import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class GoogleMapService extends Service{

    constructor(private http:HttpClient) { super() }

    getPays():any
    {
        this.Path = "/countries";
        return this.http.get<any>(this.Url);
    }

    getVilles(countryCode):Observable<any>
    {
        this.Path = "/cities?abbrPays=" + countryCode;
        return this.http.get<Array<object>>(this.Url);
    }

    getRegions(countryCode):Observable<any>
    {
        this.Path = "/regions?abbrPays=" + countryCode;
        return this.http.get<Array<object>>(this.Url);
    }
}
