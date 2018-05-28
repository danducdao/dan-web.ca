/*
Program : Mon premier program
Écrit par : Dan Duc Dao
*/
var a;
var b;
var c;
a = 2;
b = true;
c = 'Mon premier program';
console.log(a);
console.log(b);
console.log(c);
//Array
var myArray;
myArray = [1, 2, 3, 4, 5];
//Tuple
var myTuple = [1, true];
var myTuple2;
myTuple2 = [2, false];
//Function
function additionner(a, b, c) {
    if (c === void 0) { c = 0; }
    return a + b + c;
}
console.log(additionner(2, 5));
