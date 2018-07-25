/*
* Program : Classe Categorie
* Écrit par : Dan Duc Dao
*/

export var Employee = function()
{
    this.nom="";
    this.prenom="";
    this.abreviation="";
    this.titre="";
    this.statut="";
    this.genre="";
    this.address="";
    this.ville="";
    this.region="";
    this.codepostale="";
    this.pays="";
    this.telephone="";
    this.cellulaire="";
    this.extension="";
    this.email="";
    this.datenaissance="";
    this.dateembauche="";
    this.salaire={};
    this.congevacance="";
    this.congemaladie="";
    this.photo="";
    this.note="";
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true; 
}