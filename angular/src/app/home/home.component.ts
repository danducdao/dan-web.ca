/*
Program : Tutoriel sur youtube
Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import * as func from 'src/inc/tutoriel';
import { Tuto } from 'src/classes/tuto';

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

  public IntroductionAngular6:Tuto;
  public IntroductionAngular2:Tuto;
  public RestAPI:Tuto;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
      let index:number = 0;
      this.IntroductionAngular6 = new Tuto(func.youtubeEmbedUrls()[index],this._sanitizer);
      this.IntroductionAngular2 = new Tuto(func.youtubeEmbedUrls()[++index],this._sanitizer);
      this.RestAPI = new Tuto(func.youtubeEmbedUrls()[++index],this._sanitizer);
  }

}
