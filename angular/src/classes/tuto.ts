/*
* Program : Class Tuto
* Écrit par : Dan Duc Dao
*/

import { DomSanitizer } from '@angular/platform-browser';

export class Tuto {

     public url:any;
     public titre:string;
     public count:number;
     public i:number;
     public itemSelected:string;
     private myVideos:any[] = [];
     private _sanitizer: DomSanitizer;

     constructor(myVideos:any[],_sanitizer: DomSanitizer){
        this._sanitizer = _sanitizer;
        this.myVideos = myVideos;
        this.i = 0;
        this.setVideo(this.myVideos[0].url,this.myVideos[0].titre);
     }
     setVideo(url:string,titre:string):void{
         this.url = this._sanitizer.bypassSecurityTrustResourceUrl(url);
         this.titre = titre;
         this.count = this.i + 1;
     }
     next():void{
          var i = 0;
          if(this.i < this.myVideos.length - 1)
          {
             var i = ++this.i;
          }else{
              this.i = 0;
              i = this.i;
          }
          this.setVideo(this.myVideos[i].url,this.myVideos[i].titre);
     }
     previous():void{
         var i = 0
         if(this.i > 0)
         {
             i = --this.i;
         }else{
             this.i = this.myVideos.length - 1;
             i = this.i;
         }
         this.setVideo(this.myVideos[i].url,this.myVideos[i].titre);
      }
      listItem():any[]{
          let listItem:any[] = [];
          this.myVideos.forEach((data,index) => {
               listItem.push({
                                 "titre" : data.titre,
                                 "id" : index
                             });
          });
          return listItem
      }
      selectedItem():void{
          this.i = parseInt(this.itemSelected);
          this.count = this.i + 1;
          this.setVideo(this.myVideos[this.i].url,this.myVideos[this.i].titre);
      }
}
