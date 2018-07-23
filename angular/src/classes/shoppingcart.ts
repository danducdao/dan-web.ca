/*
* Program : Class ShoppingCart
* Écrit par : Dan Duc Dao
*/

export class ShoppingCart
{
    public _id:string;
    public quantite:number;
    public prix:number;
    public nom:string;
    public total:number;

     constructor(id:string,quantite:number,prix:number,nom:string,total:number)
     {
        this._id = id;
        this.quantite = quantite;
        this.prix = prix;
        this.nom = nom;
        this.total = total;
     }
}
