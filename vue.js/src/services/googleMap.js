/*
* Program : Classe GoogleMapService
* Écrit par : Dan Duc Dao
*/

import { Service }  from './service';

export var GoogleMapService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

GoogleMapService.prototype = {

    getGoogleMapVilles:function()
    {
        this.service.setPath('/googleMapCities');
        return this.http.get(this.service.getUrl());
    },

    getPays:function(){
        this.service.setPath('/countries'); 
        return this.http.get(this.service.getUrl());
    },

    getVilles:function(abbrPays){
        this.service.setPath('/cities?abbrPays=' + abbrPays); 
        return this.http.get(this.service.getUrl());
    },

    getRegions:function(abbrPays){
        this.service.setPath('/regions?abbrPays=' + abbrPays); 
        return this.http.get(this.service.getUrl());
    }
};