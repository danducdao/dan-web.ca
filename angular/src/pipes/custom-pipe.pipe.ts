/*
* Program : filtrer l'affichage des balises HTML
* Écrit par : Dan Duc Dao
*/

import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'isDiscontinueChecked',
  pure: false
})
export class CustomPipePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer = null){}
  transform(value:Boolean, args?: any): any {
       return value == true? this.sanitizer.bypassSecurityTrustHtml('<i class="fa fa-check"></i>') : '';
  }

}
