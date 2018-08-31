/*
* Program : Classe RadioButton
* Écrit par : Dan Duc Dao
*/

export var RadioButton = function(name, value, text, checked = false) {
  this.iradioButtonSquare = "iradio_square-green checked";
  this.name = name;
  this.text = text;
  this.value = value;
  this.checked = checked ? "checked" : "";
  this.clsAttribut = this.checked
    ? this.iradioButtonSquare
    : this.iradioButtonSquare.split(" ")[0];

  Object.defineProperty(this, "ClsAttribut", {
    get() {
      return this.clsAttribut;
    },
    set(value) {
      this.clsAttribut = value;
    }
  });

  Object.defineProperty(this, "Name", {
    get() {
      return this.name;
    }
  });

  Object.defineProperty(this, "Text", {
    get() {
      return this.text;
    }
  });

  Object.defineProperty(this, "Value", {
    get() {
      return this.value;
    }
  });

  Object.defineProperty(this, "Checked", {
    set(value) {
      this.checked = value;
    },
    get() {
      return this.checked;
    }
  });
};
