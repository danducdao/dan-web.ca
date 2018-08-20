/*
* Program : Class CheckBox
* Écrit par : Dan Duc Dao
*/

export class CheckBox {
  public icheckboxSquare: string = "icheckbox_square-green checked";
  public clsAttribut: any;
  public name: string;
  public text: string;
  public value: string;

  constructor(
    name: string,
    value: string,
    text: string,
    checked: boolean = false
  ) {
    this.name = name;
    this.text = text;
    this.value = value;
    this.clsAttribut =
      checked === true
        ? this.icheckboxSquare
        : this.icheckboxSquare.split(" ")[0];
  }

  selectedItem() {
    if (this.clsAttribut.indexOf("checked") !== -1) {
      this.clsAttribut = this.icheckboxSquare.split(" ")[0];
    } else {
      this.clsAttribut = this.icheckboxSquare;
    }
  }
}
