/*
* Program : Class Produit
* Écrit par : Dan Duc Dao
*/

export class Produit {
  public id: number;
  public nom: string;
  public categorie_id: number;
  public fournisseur_id: number;
  public fournisseur_nom: string;
  public categorie_nom: string;
  public quantiteParUnite: number;
  public prix: number;
  public quantiteEnStock: number;
  public quantiteCommande: number;
  public reapprovisionnement: number;
  public discontinue: number;
  public active: number;

  constructor() {
    this.id = null;
    this.nom = "";
    this.categorie_id = null;
    this.fournisseur_id = null;
    this.fournisseur_nom = "";
    this.categorie_nom = "";
    this.quantiteParUnite = null;
    this.prix = null;
    this.quantiteEnStock = null;
    this.quantiteCommande = null;
    this.reapprovisionnement = null;
    this.discontinue = null;
    this.active = 1;
  }
}
