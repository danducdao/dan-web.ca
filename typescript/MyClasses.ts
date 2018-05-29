/*
Program : Mes premières classes
Écrit par : Dan Duc Dao
*/

//Classe Person
class Person{
    Nom : string;
    PreNom : string;
    constructor(){}
    getNomComplete():string{
        return this.PreNom + " " + this.Nom;
    }
}
let aPerson : Person = new Person();
aPerson.Nom = "Doe";
aPerson.PreNom = "Jonh";
var nomComplet = aPerson.getNomComplete();
console.log(nomComplet);

//Classe Person2
class Person2{
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

let aPerson2 : Person2 = new Person2("Darwin","Charles Robert");
console.log(aPerson2.getNomComplete());
