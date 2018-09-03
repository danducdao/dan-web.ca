/*
* Program : Classe EmployeeService
* Écrit par : Dan Duc Dao
*/

import { Service } from "./service";

export var EmployeeService = function(http) {
  this.service = new Service();
};

EmployeeService.prototype = {
  saveEmployee: function(employee, admin) {
    this.service.setUrl("/employee");
    return this.service.http.post(this.service.getUrl(), {
      employee: employee,
      admin: admin
    });
  }
};
