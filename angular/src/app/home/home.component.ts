/*
Pogram : Youtube tutorial
Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

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
    `]
})
export class HomeComponent implements OnInit {

  public safeURL;
  private videosURLs = [];
  private i:number = 0;
  public isDisabled = false;
  constructor(private _sanitizer: DomSanitizer) {
        this.videosURLs = [
           "https://www.youtube.com/embed/0eWrpsCLMJQ",
           "https://www.youtube.com/embed/FVPGJHinItI",
           "https://www.youtube.com/embed/mDoHtD1hI3I",
           "https://www.youtube.com/embed/16rQyEQtpyQ",
           "https://www.youtube.com/embed/2a6OfacW_-I",
           "https://www.youtube.com/embed/N8FBmB2jme8",
           "https://www.youtube.com/embed/Y6OP-lPJxgs",
           "https://www.youtube.com/embed/q256X6-u9Q8",
           "https://www.youtube.com/embed/ZfIc1_oj7uM",
           "https://www.youtube.com/embed/Oo0-r_YhoJs",
           "https://www.youtube.com/embed/DOWwWsbG1Sw",
           "https://www.youtube.com/embed/nWst87nQmZQ",
           "https://www.youtube.com/embed/WiDn2y1Ktws",
           "https://www.youtube.com/embed/Du3p6QYGs3A",
           "https://www.youtube.com/embed/BGy8DdGw_WE",
           "https://www.youtube.com/embed/y8lwG8IM82k",
           "https://www.youtube.com/embed/pwuGBvOPFYI",
           "https://www.youtube.com/embed/OFPIGlxunL0",
           "https://www.youtube.com/embed/69VeYoKzL6I",
           "https://www.youtube.com/embed/vj0kUzKOgGQ",
           "https://www.youtube.com/embed/LmIsbzt-S_E",
           "https://www.youtube.com/embed/TmTGQiLBS5A",
           "https://www.youtube.com/embed/Nehk4tBxD4o",
           "https://www.youtube.com/embed/QC6wRxXT26I",
           "https://www.youtube.com/embed/qh5nHv-4aw0",
           "https://www.youtube.com/embed/KRV9jZwl0Ig",
           "https://www.youtube.com/embed/gnTFkl2AF-w",
           "https://www.youtube.com/embed/qktmk-7Kot8",
           "https://www.youtube.com/embed/ZoeZxpfTCXk",
           "https://www.youtube.com/embed/RkV_LozGP3w",
           "https://www.youtube.com/embed/ScaKGrW5s0I"
        ];
  }
  ngOnInit() {
      this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videosURLs[this.i]);
  }

  next(){
       if(this.i < this.videosURLs.length - 1)
       {
         if(document.getElementById("previous").getAttribute("disabled"))
         {
           document.getElementById("previous").removeAttribute("disabled");
         }
          this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videosURLs[++this.i]);
       }else{
          document.getElementById("next").setAttribute("disabled", "disabled");
       }
  }

  previous(){

     if(this.i > 0)
     {
        if(document.getElementById("next").getAttribute("disabled"))
        {
          document.getElementById("next").removeAttribute("disabled");
        }
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl(this.videosURLs[--this.i]);
     }else{
         document.getElementById("previous").setAttribute("disabled", "disabled");
     }
  }
}
