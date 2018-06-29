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
    }

    return {
        getVilles:function(http){
                setPath('/city');
                return http.get(getUrl());
        }
    }
}();
