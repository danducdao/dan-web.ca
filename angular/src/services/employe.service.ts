/*
* Program : Service Employee
* Écrit par : Dan Duc Dao
*/

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../interfaces/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeService {

  private url = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }

  getEmployees(){
      return [
                {"id" : 1, "name":"Andrew", "age":30},
                {"id" : 2, "name":"Brandon", "age":25},
                {"id" : 3, "name" : "Christina" , "age":26},
                {"id" : 4, "name" : "Elena", "age": 28}
              ];
     }
     getEmployeesDetail(){
          return this.http.get<IEmployee[]>(this.url);
     }
}
