/*
Program : Youtube tutorial
Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as tuto from 'src/inc/tutoriel';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [`
              #main .title{
                text-align:left;
              }
              #previous{
                  float:left;
              }
              #next{
                  float:right;
              }
              .titre{
                  min-height:50px;
                  padding:10px;
                  font-weight:bold;
                  font-size:20px;
                  text-align:center;
              }
          `]
})
export class HomeComponent implements OnInit {

  public safeURL:any;
  public titre:string;
  public count:number;
  private videosURLs:any = new Object();
  private videosTitles:any = new Object();
  private i:number = 0;
  private btnNext:HTMLElement;
  private btnPrevious:HTMLElement;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.setVideo(
                      tuto.getCodeEvolutionTuto()[this.i].url,
                      tuto.getCodeEvolutionTuto()[this.i].titre,
                      this.i
                   );
      this.btnNext = document.getElementById("next")
      this.btnPrevious = document.getElementById("previous")
  }
  setVideo(url,titre,i){
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(url);
      this.titre = titre;
      this.count = ++i;
  }
  next(){
       var i = 0;
       if(this.i < tuto.getCodeEvolutionTuto().length - 1)
       {
          var i = ++this.i;
       }else{
           this.i = 0;
           i = this.i;
       }
       this.setVideo(tuto.getCodeEvolutionTuto()[i].url,tuto.getCodeEvolutionTuto()[i].titre,i);
  }
  previous(){
      var i = 0
      if(this.i > 0)
      {
          i = --this.i;
      }else{
          this.i = tuto.getCodeEvolutionTuto().length - 1;
          i = this.i;
      }
      this.setVideo(tuto.getCodeEvolutionTuto()[i].url,tuto.getCodeEvolutionTuto()[i].titre,i);
   }
}
