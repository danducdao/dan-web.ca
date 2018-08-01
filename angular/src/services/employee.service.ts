import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Service } from './service';
import { Employee } from '../classes/employee';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends Service{

  constructor(private http:HttpClient) { super() }

  saveEmployee(employee:Employee,admin:Admin):Observable<any>
  {
      this.Path = "/employee";
      return this.http.post<{success:boolean}>(this.Url,{'employee':employee,'admin':admin});
  }
}
