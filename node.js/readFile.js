//***************************
// Écrite par Dan Duc Dao
// Read file sync and async
//***************************

var fs = require('fs');

/********* Read File Sync *********/
var readMe = fs.readFileSync('readMe.txt','utf8');
console.log(readMe);
fs.writeFileSync('writeMe.txt',readMe);
var readMe2 = fs.readFileSync('writeMe.txt','utf8');
console.log(readMe2);

/********* Read File Async *********/
fs.readFile('readMe.txt','utf8',function(err,data){
    fs.writeFile('writeMe.txt',data,function (err) {
      if (err) throw err;
      console.log('Remplacé!');
    });
});
console.log("Complété");
