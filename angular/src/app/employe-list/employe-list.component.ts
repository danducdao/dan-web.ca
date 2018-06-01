import { Component, OnInit } from '@angular/core';
import { EmployeService } from '../employe.service';
@Component({
  selector: 'app-employe-list',
  templateUrl: './employe-list.component.html',
  styleUrls: ['./employe-list.component.css']
})
export class EmployeListComponent implements OnInit {

  public employees = [];
  constructor(private _employeService:EmployeService) { }

  ngOnInit() {
      this.employees = this._employeService.getEmployees();
  }

}
