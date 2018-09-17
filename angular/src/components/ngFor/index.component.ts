/*
* Program : Liste des employées
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../../services/employee.service";

@Component({
  selector: "app-ngFor-index",
  templateUrl: "../../views/ngFor/index.html",
  styles: []
})
export class NgForComponent implements OnInit {
  public employees: any[];
  public employeesDetail: any[];

  constructor(private _employeService: EmployeeService) {}

  ngOnInit() {
    this.employees = this._employeService.getEmployees();
  }
}
