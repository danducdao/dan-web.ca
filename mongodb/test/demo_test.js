/*
* Program : test assert
* Écrit par : Dan Duc Dao
*/

const mocha = require('mocha');
const assert = require('assert');

describe('some demo test',function(){
     it('ajouter 2 nombres', function(){
        assert(2 + 3 === 5);
     })
});
