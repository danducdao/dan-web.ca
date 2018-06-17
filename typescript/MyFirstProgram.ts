/*
Program : Mon premier program
Écrit par : Dan Duc Dao
*/

var a:number;
var b:boolean;
var c:string;

a = 2;
b = true;
c = 'Mon premier program';
console.log(a);
console.log(b);
console.log(c);

//Array
var myArray : number[];
myArray = [1,2,3,4,5];

//Tuple
var myTuple:[number,boolean] = [1 , true];
var myTuple2:[number,boolean];
myTuple2 = [2, false];

//Function
function additionner(a:number,b:number,c:number = 0) : number{
    return a + b + c;
}
console.log(additionner(2,5));
