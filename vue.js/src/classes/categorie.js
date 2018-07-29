/*
* Program : Classe Categorie
* Écrit par : Dan Duc Dao
*/

export var Categorie = function()
{
    this._id = "";
    this.nom = "";
    this.description = "";
    this.photo = "";
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true; 
}