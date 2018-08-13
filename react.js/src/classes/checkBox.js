/*
* Program : Class CheckBox
* Écrit par : Dan Duc Dao
*/

export class CheckBox {
  constructor(name, value, text, checked = false) {
    this.icheckboxSquare = "icheckbox_square-green checked";
    this.isChecked = checked;
    this.name = name;
    this.text = text;
    this.value = value;
    this.clsAttribut =
      checked === true
        ? this.icheckboxSquare
        : this.icheckboxSquare.split(" ")[0];
  }
  selectItem(obj) {
    if (this.clsAttribut.indexOf("checked") !== -1) {
      this.clsAttribut = this.icheckboxSquare.split(" ")[0];
      this.isChecked = false;
    } else {
      this.clsAttribut = this.icheckboxSquare;
      this.isChecked = true;
    }
  }
}
