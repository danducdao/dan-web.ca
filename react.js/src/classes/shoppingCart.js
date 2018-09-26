/*
* Program : Classe ShoppingCart
* Écrit par : Dan Duc Dao
*/

export class ShoppingCart {
  constructor(id, quantite, prix, nom, total) {
    this.id = id;
    this.quantite = quantite;
    this.prix = prix;
    this.nom = nom;
    this.total = total;
  }
}
