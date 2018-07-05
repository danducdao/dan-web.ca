/*
* Program : filtrer la liste des produits
* Écrit par : Dan Duc Dao
*/

import { Pipe, PipeTransform } from '@angular/core';
import { IProduit } from '../interfaces/produit';

@Pipe({
  name: 'filtreProduit'
})

export class FiltreProduitPipe implements PipeTransform {

  transform(value:IProduit[], filtrePar:any[],motAChercher:string):IProduit[] {

          let produits:IProduit[] = [];

          if(motAChercher && filtrePar[0].isChecked){
              produits = produits.concat(value.filter((produit:IProduit) => produit.nom.toLocaleLowerCase().indexOf(motAChercher.toLocaleLowerCase()) !== -1));
          }

          if(motAChercher && filtrePar[1].isChecked){
                produits = produits.concat(value.filter((produit:IProduit) => produit.category[0].nom.toLocaleLowerCase().indexOf(motAChercher.toLocaleLowerCase()) !== -1));
          }

          if(motAChercher && filtrePar[2].isChecked){
                produits = produits.concat(value.filter((produit:IProduit) => <number>produit.quantite == parseInt(motAChercher)));
          }

          if(motAChercher && filtrePar[3].isChecked){
                produits = produits.concat(value.filter((produit:IProduit) => <number>produit.prix == parseFloat(motAChercher)));
          }

          if(produits.length == 0)
          {
             return value;
          }
          return produits;
    }
}
