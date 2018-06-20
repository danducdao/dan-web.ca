/*
* Program : Class Regex
* Écrit par : Dan Duc Dao
*/

export class Regex {

     constructor(){}

     static NoDigitPattern():string{
         return "^[a-zA-Z\\-]+$";
     }

     static DecimalPattern():string{
         return "^[0-9]+\\.?[0-9]*$";
     }

     static DigitPattern(){
        return  "^[0-9]+$";
     }
}
