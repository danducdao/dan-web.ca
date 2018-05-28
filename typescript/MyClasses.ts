class Person{
    Nom : string;
    PreNom : string;
    getNomComplete():string{
        return this.Nom + " " + this.PreNom;
    }
}
let aPerson : Person = new Person();
aPerson.Nom = "Jonh";
aPerson.PreNom = "Doe";
var nomComplet = aPerson.getNomComplete();
console.log(nomComplet);
