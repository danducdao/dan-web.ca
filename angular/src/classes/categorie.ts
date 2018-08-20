/*
* Program : Class Categorie
* Écrit par : Dan Duc Dao
*/

export class Categorie {
  public id: number;
  public nom: string;
  public description: string;
  public photo: string;
  public active: number;

  constructor() {
    this.id = null;
    this.nom = "";
    this.description = "";
    this.photo = "";
    this.active = 1;
  }
}
