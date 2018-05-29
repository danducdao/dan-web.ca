"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Program : Classe Person
Écrit par : Dan Duc Dao
*/
var Person = /** @class */ (function () {
    function Person(nom, prenom) {
        this.Nom = nom;
        this.PreNom = prenom;
    }
    Person.prototype.getNomComplete = function () {
        return this.PreNom + " " + this.Nom;
    };
    return Person;
}());
exports.Person = Person;
