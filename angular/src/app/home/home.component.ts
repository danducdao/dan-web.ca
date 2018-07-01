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

  public ngCodeEvolution:Tuto;
  public NgTheNetNinja:Tuto;

  constructor(private _sanitizer: DomSanitizer) {}

  ngOnInit() {
      this.ngCodeEvolution = new Tuto(func.NgCodeEvolution()[0],this._sanitizer);
      this.NgTheNetNinja = new Tuto(func.NgCodeEvolution()[1],this._sanitizer);
  }

}
