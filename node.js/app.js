//***************************
// Écrite par Dan Duc Dao
// Module Patterns
//****************************

var os = require('os');
var count = require('./count');
var mod = require('./module');
var myEvent = require('events');
var myUtil = require('util');

var message = 'Ce script est en cours d\'exécution sur Node.js ' + process.version +
              ' sur la ' + os.type + ' du système d\'opération.';

console.log(message);
console.log('********* Module examples *********');
console.log(count.counter(['shaun', 'crystal', 'ryu']));
console.log(count.add(2,3));
console.log(count.substract(5,3));
console.log(mod.multiplie(6,3));
console.log(mod.division(6,3));

//First Event Exemple
var callback = function(msg){
    console.log(msg);
};

console.log('********* First event example *********');

var myFirstEvent = new myEvent.EventEmitter();
myFirstEvent.on('monEvents', callback)
myFirstEvent.emit('monEvents','L\'événement est complété');

//Seconde Event Exemple
var Person = function(name){
    this.name = name;
};

Person.prototype.parle = function(message){
     console.log(this.name + ' parle ' + message);
}

myUtil.inherits(Person,myEvent.EventEmitter);

var jonh = new Person('Jonh');
var mary = new Person('Mary');
var james = new Person('James');
var persons = [jonh,mary,james];
persons.forEach(function(person){
    person.on('parle',function(msg){
        person.parle(msg);
    });
});
console.log('********* Seconde event example *********');
jonh.emit('parle','Anglais');
mary.emit('parle','Française');
james.emit('parle','Mandarin');
