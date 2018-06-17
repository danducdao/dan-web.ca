/*
* Program : Liste des employées
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';

@Component({
  selector: 'app-employee',
  template: `
      <h2>Liste des employées</h2>
      <ul *ngFor="let employe of employees">
           <li>{{ employe.name }}</li>
      </ul>
      <hr>
      <h2>Liste détail d'employé </h2>
      <ul *ngFor="let employe of employeesDetail; let i = index">
           <li>{{ i }} - {{ employe.name }} - {{ employe.age}} ans</li>
      </ul>
  `,
  styles: []
})
export class ListeEmployeeComponent implements OnInit {

  public employees:any[];
  public employeesDetail:any[];

  constructor(private _employeService:EmployeService) { }

  ngOnInit() {
      this.employees = this._employeService.getEmployees();
      this._employeService.getEmployeesDetail()
                          .subscribe(data => this.employeesDetail = data);
  }

}
