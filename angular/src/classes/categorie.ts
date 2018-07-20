/*
* Program : Class DetailCategorie
* Écrit par : Dan Duc Dao
*/

export class Categorie {
     public _id:string;
     public nom:string;
     public description:string;
     public image:string;
     public active:boolean

     constructor(){
       this.nom = "",
       this.description = "",
       this.image = ""
       this.active=true;
     }
}
