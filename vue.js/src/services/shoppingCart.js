/*
* Program : Classe ProduitService
* Écrit par : Dan Duc Dao
*/

import { Service }  from '../services/service';

export var ShoppingCartService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

ShoppingCartService.prototype = {

    shoppingCartListe : function()
    {
        this.service.setPath('/shoppingCart');
        return this.http.get(this.service.getUrl());
    }
}