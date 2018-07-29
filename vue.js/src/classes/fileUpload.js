/*
* Program : Classe fileUpload
* Écrit par : Dan Duc Dao
*/

const HEIGHT = 135, WIDTH = 192, NONE = 0;

export var FileUpload = function()
{
    this.uploadStatus = 0;
    this.height = HEIGHT;
    this.width = WIDTH;
    this.styleXRemove = {
        position:'absolute',
        top:0,
        right:0,
        borderRadius:'10px',
        margin:'1px 2px 0px 0px',
        display : 'inherit'
    }
}

FileUpload.prototype.UploadStatus = function(uploadStatus)
{
    this.uploadStatus =uploadStatus; 
}

FileUpload.prototype.FileToSave = function(file,model)
{ 
    if(this.uploadStatus)
    {
        model.photo = file;
        this.styleXRemove.display = 'inherit';
        this.height = HEIGHT;
        this.width = WIDTH;
    }
}

FileUpload.prototype.removeImage = function(model)
{
    model.photo = "";
    this.height = NONE;
    this.width = NONE;
    this.styleXRemove.display = 'none';
    this.uploadStatus = 0;
}