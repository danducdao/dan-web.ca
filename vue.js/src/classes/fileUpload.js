/*
* Program : Classe fileUpload
* Écrit par : Dan Duc Dao
*/

const HEIGHT = 135,
  WIDTH = 192,
  NONE = 0;

export var FileUpload = function() {
  this.uploadStatus = 0;
  this.height = HEIGHT;
  this.width = WIDTH;
};

FileUpload.prototype.UploadStatus = function(uploadStatus) {
  this.uploadStatus = uploadStatus;
};

FileUpload.prototype.FileToSave = function(file, model) {
  if (this.uploadStatus) {
    model.photo = file;
    this.height = HEIGHT;
    this.width = WIDTH;
  }
};

FileUpload.prototype.removeImage = function(model) {
  model.photo = "";
  this.height = NONE;
  this.width = NONE;
  this.uploadStatus = 0;
};
