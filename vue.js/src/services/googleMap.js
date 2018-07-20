/*
* Program : Classe GoogleMapService
* Écrit par : Dan Duc Dao
*/

import { Service }  from '../services/service';

export var GoogleMapService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

GoogleMapService.prototype = {

    getVilles:function()
    {
        this.service.setPath('/city');
        return this.http.get(this.service.getUrl());
    }
};