/*
Program : Mes premières classes
Écrit par : Dan Duc Dao
*/
//Classe Person
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getNomComplete = function () {
        return this.PreNom + " " + this.Nom;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.Nom = "Doe";
aPerson.PreNom = "Jonh";
var nomComplet = aPerson.getNomComplete();
console.log(nomComplet);
//Classe Person2
var Person2 = /** @class */ (function () {
    function Person2(nom, prenom) {
        this.Nom = nom;
        this.PreNom = prenom;
    }
    Person2.prototype.getNomComplete = function () {
        return this.Nom + " " + this.PreNom;
    };
    return Person2;
}());
var aPerson2 = new Person2("Charles Robert", "Darwin");
console.log(aPerson2.getNomComplete());
