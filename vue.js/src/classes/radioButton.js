/*
* Program : Classe RadioButton
* Écrit par : Dan Duc Dao
*/

export var RadioButton = function(name,value,text)
{
    this.name=name;
    this.text=text;
    this.value=value; 
    this.clsAttribut={'iradio_square-green':true,'checked':false};

    Object.defineProperty(this, 'ClsAttribut', {
        get() {
          return this.clsAttribut;
        }
    });

    Object.defineProperty(this, 'Name', {
        get() {
          return this.name;
        }
    });

    Object.defineProperty(this, 'Text', {
        get() {
          return this.text;
        }
    });

    Object.defineProperty(this, 'Value', {
        get() {
          return this.value;
        }
    });
}
