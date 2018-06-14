/*
* Program : Interface IProduit
* Écrit par : Dan Duc Dao
*/

export interface IProduit{
    nom:String,
    category:any[],
    fournisseur:Object,
    quantite:String,
    prix:Number,
    quantiteRestante:Number,
    quantiteCommande:Number,
    reapprovisionnement:Number,
    Discontinue:Boolean
}
