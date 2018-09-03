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
  public quantite_par_unite: number;
  public prix: number;
  public quantite_en_stock: number;
  public quantite_commande: number;
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
    this.quantite_par_unite = null;
    this.prix = null;
    this.quantite_en_stock = null;
    this.quantite_commande = null;
    this.reapprovisionnement = null;
    this.discontinue = null;
    this.active = 1;
  }
}
