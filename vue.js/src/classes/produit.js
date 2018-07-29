/*
* Program : Classe Produit
* Écrit par : Dan Duc Dao
*/

export var Produit = function()
{
    this._id = "";
    this.nom = "";
    this.category = [];
    this.fournisseur = {};
    this.quantite = "";
    this.prix = "";
    this.quantiteRestante = "";
    this.quantiteCommande = "";
    this.reapprovisionnement = "";
    this.discontinue = false;
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true;  
}