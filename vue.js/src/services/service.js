export var Service = function(){

    var protocol = "http://",
    domain = "localhost:4000",
    path,

    setPath = function(p){
        path = p;
    },

    getPath = function(){
        return path;
    },

    getUrl = function(){
        return protocol + domain + path;
    },

    getHttpOptions = function() {
        return {
              "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept",
              'Content-Type':'application/json; charset=utf-8',
              'Access-Control-Allow-Origin': '*'
        };
    }

    return {
        setPath : setPath,
        getUrl : getUrl,
        getHttpOptions : getHttpOptions
    }
};
