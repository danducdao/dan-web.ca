//***************************
// Écrite par Dan Duc Dao
// Module Patterns
//****************************

var counter = function(arr){
   return 'Il y a ' + arr.length + ' éléments dans ce tableau';
};

var add = function (a,b){
   return `La somme de 2 nombres ${a} et ${b} est ${a + b}`;
};

module.exports.substract = function(a,b){
   return `La différence de 2 nombres ${a} et ${b} est ${a - b}`;
};

module.exports.counter = counter;
module.exports.add = add;
