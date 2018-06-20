import { Pipe, PipeTransform } from '@angular/core';
import { IProduit } from '../interfaces/produit';
@Pipe({
  name: 'filtreProduit'
})
export class FiltreProduitPipe implements PipeTransform {

  transform(value:IProduit[], filtrePar:string): IProduit[] {
        filtrePar = filtrePar ? filtrePar.toLocaleLowerCase() : null;
        return filtrePar ? value.filter((produit:IProduit) => produit.nom.toLocaleLowerCase().indexOf(filtrePar) !== -1) : value;
  }

}
