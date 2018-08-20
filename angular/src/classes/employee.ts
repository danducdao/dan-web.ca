/*
* Program : Class Employee
* Écrit par : Dan Duc Dao
*/
import { Component, OnInit } from "@angular/core";
import { GoogleMapService } from "../services/googleMap.service";

export class Employee {
  public id: number;
  public nom: string;
  public prenom: string;
  public abrege: string;
  public titre: string;
  public statut: string;
  public genre: string;
  public adresse: string;
  public ville: string;
  public region: string;
  public codePostale: string;
  public pays: string;
  public telephone: string;
  public cellulaire: string;
  public courriel: string;
  public dateNaissance: string;
  public dateEmbauche: string;
  public salaire: string;
  public par: string;
  public congeVacance: number;
  public congeMaladie: number;
  public photo: string;
  public note: string;
  public active: number;

  constructor() {
    this.id = null;
    this.nom = "";
    this.prenom = "";
    this.abrege = "";
    this.titre = "";
    this.statut = "";
    this.genre = "";
    this.adresse = "";
    this.ville = "";
    this.region = "";
    this.codePostale = "";
    this.pays = "";
    this.telephone = "";
    this.cellulaire = "";
    this.courriel = "";
    this.dateNaissance = "";
    this.dateEmbauche = "";
    this.salaire = "";
    this.par = "";
    this.photo = "";
    this.note = "";
    this.active = 1;
  }

  get AbregeOpt(): Array<object> {
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

  get StatutOpt(): Array<object> {
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

  get GenreOpt(): Array<object> {
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

  get ParOpt(): Array<object> {
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
}
