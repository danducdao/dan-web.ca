export class Produit {

  public nom:string;
  public category:any[];
  public fournisseur:any;
  public quantite:string;
  public prix:number;
  public quantiteRestante:number;
  public quantiteCommande:number;
  public reapprovisionnement:number;
  public discontinue:boolean;

  constructor(){
    this.nom = "";
    this.category = [""];
    this.fournisseur = {};
    this.quantite = "";
    this.prix = 0;
    this.quantiteRestante = 0;
    this.quantiteCommande = 0;
    this.reapprovisionnement = 0;
    this.discontinue = false;

   }
}
