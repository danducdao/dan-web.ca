/*
* Program : Class CheckBox
* Écrit par : Dan Duc Dao
*/

export class CheckBox
{
     private clsAttribut:any;
     private name:string;
     private text:string;
     private value:string;

     constructor(name:string,value:string,text:string,checked:boolean = false)
     {
         this.name = name;
         this.text = text;
         this.value = value
         this.clsAttribut = {'icheckbox_square-green':true,'checked':false};
         this.clsAttribut.checked = checked;
     }

     doCheck():void
     {
        this.ClsAttribut.checked = !this.clsAttribut.checked;
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

     public searchBy(filtreParams:any[])
     {
         var that = this;
         this.doCheck();
         filtreParams.map(function(value)
         {
             if(value.type.match(that.Value))
             {
                 value.isChecked = that.ClsAttribut.checked;
             }
             return value;
         });
     }
     public remember()
     {
         this.doCheck();
     }
}
