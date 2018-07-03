/*
* Program : Class Regex
* Écrit par : Dan Duc Dao
*/

export class Regex {

     constructor(){}

     static NoDigitPattern():string{
         return "^[a-zA-ZäöüÄÖÜß\\-\/ *]+$";
     }

     static DecimalPattern():string{
         return "^[0-9]+\\.?[0-9]*$";
     }

     static DigitPattern(){
        return  "^[0-9]+$";
     }
}
