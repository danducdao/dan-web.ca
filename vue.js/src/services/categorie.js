import { Service }  from '../services/service';

export var CategorieService = function(http)
{
    this.service = new Service();
    this.http = http;  
};

CategorieService.prototype = {

    categorieListe : function()
    {
        this.service.setPath('/categorie');
        return this.http.get(this.service.getUrl());
    },

    getCategorieById : function(id)
    {
        this.service.setPath('/categorie?id=' + id);
        return this.http.get(this.service.getUrl());
    },

    updateCategorie : function(id,categorie)
    { 
        this.service.setPath('/categorie/' + id);
        return this.http.put(this.service.getUrl(),categorie);
    },

    removeCategorieById : function(id)
    {
        this.service.setPath('/categorie/' + id);
        return this.http.delete(this.service.getUrl());
    }
}