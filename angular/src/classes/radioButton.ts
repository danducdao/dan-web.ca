/*
* Program : Class RadioButton
* Écrit par : Dan Duc Dao
*/

export class RadioButton {
  public iradioButtonSquare: string = "iradio_square-green checked";
  public clsAttribut: any;
  public name: string;
  public text: string;
  public value: string;
  public isChecked: boolean;

  constructor(name: string, value: string, text: string, checked: boolean) {
    this.name = name;
    this.text = text;
    this.value = value;
    this.isChecked = checked;
    this.clsAttribut =
      checked === true
        ? this.iradioButtonSquare
        : this.iradioButtonSquare.split(" ")[0];
  }
}
