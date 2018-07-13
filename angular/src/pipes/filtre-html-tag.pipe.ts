import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'filtreHtmlTag'
})
export class FiltreHtmlTagPipe implements PipeTransform {

  constructor(private sanitizer: DomSanitizer = null){}

  transform(value:Boolean, args?: any): any {
      let HTMLTag:string;
      switch(args)
      {
          case "check-square-icon":
              HTMLTag =  '<i class="fa fa-check-square"></i>';
              break;
          default:
              HTMLTag='';
              console.error("Erreur! Manque de balise HTML");
              break;
      }
      return value == true && HTMLTag? this.sanitizer.bypassSecurityTrustHtml(HTMLTag) : '';
  }

}
