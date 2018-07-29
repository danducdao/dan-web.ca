/*
* Program : Class DetailCategorie
* Écrit par : Dan Duc Dao
*/

export class Categorie
{
     public _id:string;
     public nom:string;
     public description:string;
     public photo:string;
     public dateCreation:string;
     public active:boolean;

     constructor()
     {
       this.nom = "";
       this.description = "";
       this.photo = "";
       this.dateCreation = new Date().toLocaleDateString("en-US");
       this.active=true;
     }
}
