/*
* Program : Class Employee
* Écrit par : Dan Duc Dao
*/
import { Component, OnInit } from '@angular/core';
import { GoogleMapService } from '../services/google-map.service';

export class Employee {
    public _id:string;
    public nom:string;
    public prenom:string;
    public abrege:string;
    public titre:string;
    public statut:string;
    public genre:string;
    public address:string;
    public ville:string;
    public region:string;
    public codePostale:string;
    public pays:string;
    public telephone:string;
    public cellulaire:string;
    public email:string;
    public dateNaissance:string;
    public dateEmbauche:string;
    public salaire:{ montant: number, par : string };
    public congeVacance:number;
    public congeMaladie:number;
    public photo:string;
    public note:string;
    public dateCreation:string;
    public active:boolean;

    constructor()
    {
          this.nom = "";
          this.prenom="";
          this.abrege="";
          this.titre="";
          this.statut="";
          this.genre="";
          this.address="";
          this.ville="";
          this.region="";
          this.codePostale="";
          this.pays="";
          this.telephone=""
          this.cellulaire="";
          this.email="";
          this.dateNaissance="";
          this.dateEmbauche="";
          this.salaire={ montant:null,par:"" }
          this.photo="";
          this.note="";
          this.dateCreation=new Date().toLocaleDateString("en-US");;
          this.active=true;
    }

    get AbregeOpt():Array<object>
    {
        return [{name:'M.',value:'M'},{name:'Mme.',value:'Mme'},{name:'Mlle.',value:'Mlle'},{name:'Dr.',value:'Dr'}];
    }

    get StatutOpt():Array<object>
    {
         return [{name:'Célibataire',value:'C'},{name:'Marié',value:'M'},{name:'Divorcé',value:'D'},{name:'Veuve',value:'V'}];
    }

    get GenreOpt():Array<object>
    {
        return [{name:'Homme',value:'H'},{name:'Femme',value:'F'}];
    }

    get ParOpt():Array<object>
    {
       return [{name:'Heure',value:'H'},{name:'Année',value:'A'},{name:'Semaine',value:'S'},{name:'Chaque 2 semaine',value:'2S'}];
    }
}
