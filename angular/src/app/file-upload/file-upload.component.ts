/*
* Program : classe FileUploadComponent
* Écrit par : Dan Duc Dao
*/

import { Component, OnInit, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  errors: Array<string> = [];
  dragAreaClass: string = 'dragarea';

  @Input() fileExt: string = "JPG, GIF, PNG";
  @Input() maxFiles: number = 5;
  @Input() maxSize: number = 5; // 5MB
  @Output() uploadStatus = new EventEmitter();
  @Output() FileToSave = new EventEmitter();

  constructor() { }

  ngOnInit() {}

  onFileChange(event):void{
         let files = event.target.files;
         this.saveFiles(files);
   }
   saveFiles(files):void
   {
        this.errors = [];
        if (files.length > 0 && !this.isValidFileExtension(files))
        {
            this.uploadStatus.emit(false);
            return;
        }
        if (files.length > 0)
        {
             var reader = new FileReader();
             reader.readAsDataURL(files[0]);
             var that = this;
             reader.onload = function () {
                  that.FileToSave.emit(reader.result);
                  that.uploadStatus.emit(true);
             };
             reader.onerror = function (error) {
                 console.log('Erreur: ', error);
             };
        }
    }
    private isValidFileExtension(files):boolean
    {
        var extensions = (this.fileExt.split(',')).map(function (x) { return x.toLocaleUpperCase().trim() });

        for (var i = 0; i < files.length; i++)
        {
            var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
            var exists = extensions.includes(ext);
            if (!exists)
            {
                this.errors.push("Erreur (Extension): " + files[i].name);
            }
            this.isValidFileSize(files[i]);
        }
        return this.errors.length>0?false:true;
    }
    private isValidFileSize(file):void
    {
        var fileSizeinMB = file.size / (1024 * 1000);
        var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
        if (size > this.maxSize)
            this.errors.push("Erreur (Taille Fichier): " + file.name + ": dépasser la limite de taille de fichier " + this.maxSize + "MB ( " + size + "MB )");
    }
    @HostListener('dragover', ['$event']) onDragOver(event):void
    {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    @HostListener('dragenter', ['$event']) onDragEnter(event):void
    {
        this.dragAreaClass = "droparea";
        event.preventDefault();
    }
    @HostListener('dragend', ['$event']) onDragEnd(event):void
    {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    @HostListener('dragleave', ['$event']) onDragLeave(event):void
    {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
    }
    @HostListener('drop', ['$event']) onDrop(event):void
    {
        this.dragAreaClass = "dragarea";
        event.preventDefault();
        event.stopPropagation();
        var files = event.dataTransfer.files;
        this.saveFiles(files);
    }
}
