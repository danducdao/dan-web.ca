/*
* Program : Classe Employee
* Écrit par : Dan Duc Dao
*/

export var Employee = function()
{
    this.nom="";
    this.prenom="";
    this.abrege="";
    this.titre="";
    this.statut="";
    this.genre="";
    this.address="";
    this.ville="";
    this.region="";
    this.codePostale="";
    this.pays="";
    this.telephone="";
    this.cellulaire="";
    this.email="";
    this.dateNaissance="";
    this.dateEmbauche="";
    this.salaire={montant:"",par:""};
    this.congeVacance="";
    this.congeMaladie="";
    this.photo="";
    this.note="";
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true; 
}