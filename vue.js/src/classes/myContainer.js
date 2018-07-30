/*
* Program : Classe myContainer
* Écrit par : Dan Duc Dao
*/

export var MyContainer = function()
{
    this.myRadioButtonContainer = [];

    Object.defineProperty(this, 'Container', {
        get() {
            return this.myRadioButtonContainer;
        },
        set(value){
            this.myRadioButtonContainer.push(value);
        }
    });

    this.discChecked = function(i,produit)
    {
        for(var x = 0; x < this.Container.length; x++)
        {
            if(i === x)
            {
                this.Container[x].ClsAttribut.checked = true;
                if(this.Container[i].Value === 'Oui')
                    produit.discontinue = true;
                else
                    produit.discontinue = false;
            }else{
                 this.Container[x].ClsAttribut.checked = false;
            }
        }
    }
}