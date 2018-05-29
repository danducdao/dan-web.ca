/*
Program : Classe Person
Écrit par : Dan Duc Dao
*/
export class Person{
    Nom : string;
    PreNom : string;
    constructor(nom:string,prenom:string){
       this.Nom = nom;
       this.PreNom = prenom;
    }
    getNomComplete():string{
        return this.PreNom + " " + this.Nom;
    }
}

var p = new Pesron('tt','tt');
p.
