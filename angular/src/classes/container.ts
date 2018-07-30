/*
* Program : Class Container
* Écrit par : Dan Duc Dao
*/
import { RadioButton } from '../classes/radiobutton';
import { Produit } from '../classes/produit';

export class Container
{
     private _myRadioButtonContainer:Array<RadioButton> = [];

     constructor(){}

     setContainer(myRadioBtn:RadioButton)
     {
         this._myRadioButtonContainer.push(myRadioBtn);
     }

     getContainer():Array<RadioButton>
     {
         return this._myRadioButtonContainer;
     }

     discChecked(i:number,produit:Produit)
     {
          for(let x:number = 0; x < this.getContainer().length; x++)
          {
               if(i === x)
               {
                  this.getContainer()[x].ClsAttribut.checked = true;
                  if(this.getContainer()[i].Value === 'Oui')
                      produit.discontinue = true;
                  else
                        produit.discontinue = false;
               }else{
                  this.getContainer()[x].ClsAttribut.checked = false;
               }
          }
     }
}
