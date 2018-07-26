/*
* Program : Class Admin
* Écrit par : Dan Duc Dao
*/

export class Admin
{
     public _id:string;
     public employee:object;
     public username:string;
     public password:string;
     public dateCreation:string;
     public active:boolean;

     constructor()
     {
       this.employee = {};
       this.username = "";
       this.password = "";
       this.dateCreation = new Date().toLocaleDateString("en-US");
       this.active=true;
     }
}
