/*
* Program : Class RadioButton
* Écrit par : Dan Duc Dao
*/

export class RadioButton
{
    private clsAttribut:any;
    private name:string;
    private text:string;
    private value:string;

    constructor(name:string,value:string,text:string){
       this.name = name;
       this.text = text;
       this.value = value;
       this.clsAttribut = {'iradio_square-green':true,'checked':false};
    }

    get ClsAttribut():any
    {
         return this.clsAttribut;
    }

    get Name():string
    {
         return this.name;
    }

    get Text():string
    {
         return this.text;
    }

    get Value():string
    {
         return this.value;
    }
}
