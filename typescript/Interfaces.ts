/*
Program : Interface & Classe
Écrit par : Dan Duc Dao
*/

interface IPerson{
    Nom:string;
    Prenom:string;
    UserName:string;
    Password:string;
    getAdmminInfo():string;
}

class Admin implements IPerson{
    Nom:string;
    Prenom:string;
    private userName:string;
    private password:string;

    constructor(nom:string,prenom:string){
       this.Nom = nom;
       this.Prenom = prenom;
    }

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

    getAdmminInfo(){
       var info = "Nom complet : " + this.Prenom + " " + this.Nom + "\n";
       info += "User name : " + this.UserName + "\n";
       info += "Password : "  + this.Password;
       return info;
    }
}

let admin = new Admin('Doe','Jonh');
admin.UserName = "Jonh.Doe@exemple.com";
admin.Password = "1234";
console.log(admin.getAdmminInfo());
