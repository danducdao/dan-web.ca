/*
* Program : Classe LocalStorage
* Écrit par : Dan Duc Dao
*/

export var LocalStorage = function()
{}

LocalStorage.prototype = {

    setItem : function(name,value)
    {
        localStorage.setItem(name, JSON.stringify(value));
    },

    getItem : function(name)
    {
       return JSON.parse(localStorage.getItem(name));
    },

    removeItem : function(name)
    {
       localStorage.removeItem(name);
    },

    itemExist : function(name)
    {
       return JSON.parse(localStorage.getItem(name)) ? true : false;
    }
}

