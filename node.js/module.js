//***************************
// Écrite par Dan Duc Dao
// Module Patterns
//****************************

var multiplie = function(a,b){
   return `La multiplication de 2 nombres ${a} et ${b} est ${a * b}`;
};

var division = function(a,b){
    return `La division de 2 nombres ${a} et ${b} est ${a / b}`;
};

module.exports = {
    multiplie : multiplie,
    division : division
}
