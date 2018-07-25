/*
* Program : Classe AdminService
* Écrit par : Dan Duc Dao
*/

import { Service }  from './service';

export var AdminService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

AdminService.prototype = {

    authenticate : function(admin)
    {
        this.service.setPath('/admin?username=' + admin.username + '&password=' + admin.password);
        return this.http.get(this.service.getUrl());
    }
}