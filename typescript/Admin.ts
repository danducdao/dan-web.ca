/*
Program : Inheritance classe
Écrit par : Dan Duc Dao
*/

import {Person} from './Person'

class Admin extends Person{

     private userName:string;
     private password:string;

     set UserName(username:string){
        this.userName = username;
     }
     get UserName():string{
        return this.userName;
     }

     set Password(password:string){
         this.password = password;
     }

     get Password():string{
         return this.password;
     }

     constructor(nom:string,prenom:string){
         super(nom,prenom);
     }

     getAdmminInfo(){
         var info = "Nom complet : " + super.getNomComplete() + "\n";
         info += "User name : " + this.UserName + "\n";
         info += "Password : " + this.Password;
         return info;
     }
}

let admin = new Admin('Doe','Jonh');
admin.UserName = "JonhDoe@exemple.com";
admin.Password = "1234";
console.log(admin.getAdmminInfo());
