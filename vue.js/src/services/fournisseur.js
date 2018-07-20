/*
* Program : Classe FournisseurService
* Écrit par : Dan Duc Dao
*/

import { Service }  from './service';

export var FournisseurService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

FournisseurService.prototype = {

    fournisseurListe : function()
    {
        this.service.setPath('/fournisseur');
        return this.http.get(this.service.getUrl());
    }
}