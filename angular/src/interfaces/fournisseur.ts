/*
* Program : Interface IFournisseur
* Écrit par : Dan Duc Dao
*/

export interface IFournisseur
{
      _id:string;
      compagnie:string;
      contact:string;
      titre:string;
      address:string;
      ville:string;
      region:string;
      codePostal:string;
      pays:string;
      telephone:string;
      fax:string;
      siteWeb:string;
      dateCreation:string;
      active:boolean;
}
