/*
* Program : Class ShoppingCart
* Écrit par : Dan Duc Dao
*/

export class ShoppingCart {
  public id: number;
  public quantite: number;
  public prix: number;
  public nom: string;
  public total: number;

  constructor(
    id: number,
    quantite: number,
    prix: number,
    nom: string,
    total: number
  ) {
    this.id = id;
    this.quantite = quantite;
    this.prix = prix;
    this.nom = nom;
    this.total = total;
  }
}
