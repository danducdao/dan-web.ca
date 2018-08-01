/*
* Program : Class Admin
* Écrit par : Dan Duc Dao
*/

export class Admin
{
     public _id:string;
     public employee:any;
     public username:string;
     public password:string;
     public dateCreation:string;
     public active:boolean;

     constructor()
     {
       this.employee = { nom : "", prenom:""};
       this.username = "";
       this.password = "";
       this.dateCreation = new Date().toLocaleDateString("en-US");
       this.active=true;
     }
}
