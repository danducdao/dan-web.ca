var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.getNomComplete = function () {
        return this.Nom + " " + this.PreNom;
    };
    return Person;
}());
var aPerson = new Person();
aPerson.Nom = "Jonh";
aPerson.PreNom = "Doe";
var nomComplet = aPerson.getNomComplete();
console.log(nomComplet);
