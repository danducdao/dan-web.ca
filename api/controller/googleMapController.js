/*
Program : Google map controller
Écrit par : Dan Duc Dao
*/

module.exports = function(app){
    app.get('/city', function(req,res)
    {
       fs.readFile("./public/city.list.json", "utf8", function(err, data){
          if(err) throw err;
           data = data.split('\n');
           var villes = [];
           for(var i = 0; i < data.length; i++) {
                if(data[i] === "")
                   continue;
                var json = JSON.parse(data[i]);
                villes.push(json);
           }
           res.send(villes);
        });
    });
}
