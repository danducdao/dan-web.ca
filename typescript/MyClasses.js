"use strict";
/*
Program : Mes premières classes
Écrit par : Dan Duc Dao
*/
exports.__esModule = true;
//Classe Person
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getNomComplete = function () {
        return this.PreNom + " " + this.Nom;
    };
    return Person;
}());
exports.Person = Person;
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
        return this.PreNom + " " + this.Nom;
    };
    return Person2;
}());
exports.Person2 = Person2;
var aPerson2 = new Person2("Darwin", "Charles Robert");
console.log(aPerson2.getNomComplete());
