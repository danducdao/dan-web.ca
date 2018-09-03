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
  this.code_postale = "";
  this.pays = "";
  this.telephone = "";
  this.cellulaire = "";
  this.courriel = "";
  this.date_naissance = "";
  this.date_embauche = "";
  this.salaire = "";
  this.par = "";
  this.conge_vacance = "";
  this.conge_maladie = "";
  this.photo = "";
  this.note = "";
  this.active = 1;

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
