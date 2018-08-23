/*
* Program : Classe CheckBox
* Écrit par : Dan Duc Dao
*/

export var CheckBox = function(name, value, text, checked = false) {
  this.icheckboxSquare = "icheckbox_square-green checked";
  this.name = name;
  this.text = text;
  this.value = value;
  this.clsAttribut =
    checked === true
      ? this.icheckboxSquare
      : this.icheckboxSquare.split(" ")[0];
};

CheckBox.prototype.selectedItem = function() {
  if (this.clsAttribut.indexOf("checked") !== -1) {
    this.clsAttribut = this.icheckboxSquare.split(" ")[0];
  } else {
    this.clsAttribut = this.icheckboxSquare;
  }
};
