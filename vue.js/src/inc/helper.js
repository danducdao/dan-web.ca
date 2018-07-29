/*
* Program : Des fonctions
* Écrit par : Dan Duc Dao
*/

export var htmlTag = function(value){
    return value === true?'<i class="fa fa-check-square"></i>':'';
}

export var alpha = function (value) {
    var patt = /^[a-zA-ZäöüÄÖÜßáôéàè\-\/\s]*$/;
    return patt.test(value);
}

export var password = function (value) {
    var patt = /^(\s*|(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,})$/;
    return patt.test(value);
}

export var convertDate = function(value)
{
    var date = new Date(value);
    return date.getFullYear() + "-" + date.getMonth().toString().padStart(2,'0') + "-" + date.getDate().toString().padStart(2,'0');
}

