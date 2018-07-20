/*
* Program : Classe ProduitService
* Écrit par : Dan Duc Dao
*/

import { Service }  from '../services/service';

export var ProduitService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

ProduitService.prototype = {

    produitListe : function()
    {
        this.service.setPath('/produit');
        return this.http.get(this.service.getUrl());
    },

    getProduitById : function(id)
    {
        this.service.setPath('/produit?id=' + id);
        return this.http.get(this.service.getUrl());
    },

    saveProduit : function(newProduit)
    {
        this.service.setPath('/produit');
        return this.http.post(this.service.getUrl(),newProduit);
    },

    updateProduit : function(id,newProduit)
    {
        this.service.setPath("/produit/" + id);
        return this.http.put(this.service.getUrl(),newProduit);
    },

    removeProduitById : function(id)
    {
        this.service.setPath("/produit/" + id);
        return this.http.delete(this.service.getUrl());
    }
}