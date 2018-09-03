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
  quantite_par_unite: number;
  prix: number;
  quantite_en_stock: number;
  quantite_commande: number;
  reapprovisionnement: number;
  discontinue: number;
  active: number;
}
