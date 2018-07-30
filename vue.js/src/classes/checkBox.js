/*
* Program : Classe CheckBox
* Écrit par : Dan Duc Dao
*/

export var CheckBox = function(name,value,text,checked = false)
{
    this.name=name;
    this.text=text;
    this.value=value; 
    this.clsAttribut={'icheckbox_square-green':true,'checked':false};
    this.clsAttribut.checked = checked;

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

    this.doCheck = function()
    {
        this.ClsAttribut.checked = !this.clsAttribut.checked;
    }

    this.remember = function()
    {
        this.doCheck();
    }
}

