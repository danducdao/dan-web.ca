/*
* Program : Class Produit
* Écrit par : Dan Duc Dao
*/

export class Produit
{
    public _id:string;
    public nom:string;
    public category:any[];
    public fournisseur:any;
    public quantite:any;
    public prix:any;
    public quantiteRestante:any;
    public quantiteCommande:any;
    public reapprovisionnement:any;
    public discontinue:boolean;
    public dateCreation:string;
    public active:boolean;

    constructor()
    {
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
}
