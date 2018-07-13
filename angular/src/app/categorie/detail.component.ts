/*
* Program : Liste des catégories
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit } from '@angular/core';
import { CategorieService } from 'src/services/categorie.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/classes/categorie';
import { Regex } from 'src/classes/regex';

enum ImageSizeEnum{
     None = 0,
     Height = 135,
     Width = 192
};

@Component({
  selector: 'app-categorie',
  templateUrl: './detail.component.html',
  styles: [`
              .ng-valid[required], .ng-valid.required  {
                   border-left: 5px solid #42A948; /* green */
              }

              .ng-invalid:not(form)  {
                   border-left: 5px solid #a94442; /* red */
              }
              .parent {
                   position: relative;
                   display: inline-block;
              }
          `]
})

export class DetailCategorieComponent implements OnInit {

  public model:Categorie;
  public nodigitPattern:string = Regex.NoDigitPattern();
  public image:string;
  public uploadStatus:boolean = false;
  public height:number = ImageSizeEnum.None;
  public width:number = ImageSizeEnum.None;
  private file:string;
  private id:string;

  constructor(private _categorieService:CategorieService,private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
        this.id = this.route.snapshot.params.id;
        this.model = new Categorie();
        this._categorieService.getCategorieById(this.id).subscribe(data => this.response(this,data));
  }
  response(obj,data):void
  {
      obj.model.nom = data.nom;
      obj.model.description = data.description;
      obj.image = data.image;
      obj.uploadStatus = obj.image?true:false;
      obj.height = obj.image?ImageSizeEnum.Height:ImageSizeEnum.None;
      obj.width = obj.image?ImageSizeEnum.Width:ImageSizeEnum.None;
  }
  onSubmit():void
  {
      if(this.id)
      {
          this._categorieService.updateCategorie(this.id,this.model)
                                .subscribe(data =>{
                                                      if(data)
                                                      {
                                                         this.router.navigateByUrl('/admin/categorie');
                                                      }
                                                  });
      }
   }
   FileToSave(file:string):void
   {
       this.file = file;
   }
   refreshImages(status:boolean):void
   {
        if (status == true)
        {
          this.height = ImageSizeEnum.Height;
          this.width = ImageSizeEnum.Width;
          this.uploadStatus = status;
          this.image = this.file;
          this.model.image = this.image;
        }
    }
    removeImage(event:any):void
    {
        this.height = ImageSizeEnum.None;
        this.width = ImageSizeEnum.None;
        this.model.image = "";
        this.image = "";
        this.uploadStatus=false;
        event.preventDefault();
    }
}
