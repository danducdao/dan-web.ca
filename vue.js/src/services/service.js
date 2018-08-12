/*
* Program : Classe Service 
* Écrit par : Dan Duc Dao
*/

export var Service = function() {
  var protocol = "http://",
    domain = "localhost:4000",
    path,
    setPath = function(p) {
      path = p;
    },
    getUrl = function() {
      return protocol + domain + path;
    };

  return {
    setPath: setPath,
    getUrl: getUrl
  };
};
