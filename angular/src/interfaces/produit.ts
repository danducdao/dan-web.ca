/*
* Program : Interface IProduit
* Écrit par : Dan Duc Dao
*/

export interface IProduit {
  id: number;
  nom: string;
  categorie_id: number;
  fournisseur_id: number;
  fournisseur_nom: string;
  categorie_nom: string;
  quantiteParUnite: number;
  prix: number;
  quantiteEnStock: number;
  quantiteCommande: number;
  reapprovisionnement: number;
  discontinue: number;
  active: number;
}
