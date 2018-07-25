/*
* Program : Classe Admin
* Écrit par : Dan Duc Dao
*/

export var Admin = function()
{
    this.employee={};
    this.username="";
    this.password="";
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true; 
}