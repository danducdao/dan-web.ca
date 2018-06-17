/*
* Program : Interface IProduit
* Écrit par : Dan Duc Dao
*/

export interface IProduit{
    nom:string,
    category:any[],
    fournisseur:any,
    quantite:string,
    prix:number,
    quantiteRestante:number,
    quantiteCommande:number,
    reapprovisionnement:number,
    discontinue:boolean
}
