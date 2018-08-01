/*
* Program : Classe Employee
* Écrit par : Dan Duc Dao
*/

export var Employee = function() {
  this.nom = "";
  this.prenom = "";
  this.abrege = "";
  this.titre = "";
  this.statut = "";
  this.genre = "";
  this.address = "";
  this.ville = "";
  this.region = "";
  this.codePostale = "";
  this.pays = "";
  this.telephone = "";
  this.cellulaire = "";
  this.email = "";
  this.dateNaissance = "";
  this.dateEmbauche = "";
  this.salaire = { montant: "", par: "" };
  this.congeVacance = "";
  this.congeMaladie = "";
  this.photo = "";
  this.note = "";
  this.dateCreation = new Date().toLocaleDateString("en-US");
  this.active = true;

  Object.defineProperties(this, {
    AbregeOpt: {
      get() {
        return [
          {
            name: "M.",
            value: "M"
          },
          {
            name: "Mme.",
            value: "Mme"
          },
          {
            name: "Mlle.",
            value: "Mlle"
          },
          {
            name: "Dr.",
            value: "Dr"
          }
        ];
      }
    },
    StatutOpt: {
      get() {
        return [
          {
            name: "Célibataire",
            value: "C"
          },
          {
            name: "Marié",
            value: "M"
          },
          {
            name: "Divorcé",
            value: "D"
          },
          {
            name: "Veuve",
            value: "V"
          }
        ];
      }
    },
    GenreOpt: {
      get() {
        return [
          {
            name: "Homme",
            value: "H"
          },
          {
            name: "Femme",
            value: "F"
          }
        ];
      }
    },
    ParOpt: {
      get() {
        return [
          {
            name: "Heure",
            value: "H"
          },
          {
            name: "Année",
            value: "A"
          },
          {
            name: "Semaine",
            value: "S"
          },
          {
            name: "Chaque 2 semaine",
            value: "2S"
          }
        ];
      }
    },
    PaysOpt: {
      set(value) {
        this.paysOpt = value;
      },
      get() {
        return this.paysOpt;
      }
    },
    VillesOpt: {
      set(value) {
        this.villesOpt = value;
      },
      get() {
        return this.villesOpt;
      }
    },
    RegionsOpt: {
      set(value) {
        this.regionsOpt = value;
      },
      get() {
        return this.regionsOpt;
      }
    }
  });
};
