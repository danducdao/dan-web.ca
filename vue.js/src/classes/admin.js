/*
* Program : Classe Admin
* Écrit par : Dan Duc Dao
*/

export var Admin = function()
{
    this.employee={nom:"",prenom:""};
    this.username="";
    this.password="";
    this.confirmPassword="";
    this.dateCreation = new Date().toLocaleDateString("en-US");
    this.active = true; 
}
