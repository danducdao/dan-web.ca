/*
* Program : Classe EmployeeService
* Écrit par : Dan Duc Dao
*/

import { Service }  from './service';

export var EmployeeService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

EmployeeService.prototype = {

    saveEmployee : function(employee,admin)
    {
        this.service.setPath('/employee');
        return this.http.post(this.service.getUrl(),{'employee':employee,'admin':admin});
    }
}