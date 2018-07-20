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

