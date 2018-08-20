/*
* Program : filtrer la liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Pipe, PipeTransform } from '@angular/core';
import { ICategorie } from '../interfaces/categorie';

@Pipe({
  name: 'filtreCategory'
})

export class FiltreCategoryPipe implements PipeTransform {

  constructor() { }

  transform(value:ICategorie[], filtrePar:string): ICategorie[]{
       filtrePar = filtrePar ? filtrePar : null;
       return filtrePar ? value.filter( (categorie:ICategorie) => categorie.id === parseInt(filtrePar) ) : value;
   }
}
