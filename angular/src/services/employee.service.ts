import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Service } from "./service";
import { Employee } from "../classes/employee";
import { IEmployee } from "../interfaces/employee";
import { Admin } from "../classes/admin";

@Injectable({
  providedIn: "root"
})
export class EmployeeService extends Service {
  constructor(private http: HttpClient) {
    super();
  }

  saveEmployee(employee: Employee, admin: Admin): Observable<any> {
    this.Path = "/employee";
    return this.http.post<{ success: boolean }>(this.Url, {
      employee: employee,
      admin: admin
    });
  }

  getEmployees(): any[] {
    return [
      { id: 1, name: "Andrew", age: 30 },
      { id: 2, name: "Brandon", age: 25 },
      { id: 3, name: "Christina", age: 26 },
      { id: 4, name: "Elena", age: 28 }
    ];
  }

  getEmployeesDetail(): Observable<IEmployee[]> {
    return this.http.get<IEmployee[]>(this.Url);
  }
}
