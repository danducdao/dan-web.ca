/*
* Program : Class Tuto
* Écrit par : Dan Duc Dao
*/

export default function Tuto(myVideos){
    this.myVideos =  myVideos;
    this.url = "";
    this.titre = "";
    this.count = 0;
    this.i = 0;
    this.itemSelected = "";
    this.setVideo(this.myVideos[this.i].url,this.myVideos[this.i].titre);
};

Tuto.prototype.setVideo = function(url,titre){
    this.url = url;
    this.titre = titre;
    this.count = this.i + 1;
};

Tuto.prototype.next = function()
{
    var i = 0;
    if(this.i < this.myVideos.length - 1)
    {
       var i = ++this.i;
    }else{
        this.i = 0;
        i = this.i;
    }
    this.setVideo(this.myVideos[i].url,this.myVideos[i].titre);
};

Tuto.prototype.previous = function(){
    var i = 0
    if(this.i > 0)
    {
        i = --this.i;
    }else{
        this.i = this.myVideos.length - 1;
        i = this.i;
    }
    this.setVideo(this.myVideos[i].url,this.myVideos[i].titre);
};

Tuto.prototype.listItem = function(){
    let listItem = [];
    this.myVideos.forEach((data,index) => {
         listItem.push({
                           "titre" : data.titre,
                           "id" : index
                       });
    });
    return listItem;
};

Tuto.prototype.selectedItem = function(){

    this.i = parseInt(this.itemSelected);
    this.count = this.i + 1;
    this.setVideo(this.myVideos[this.i].url,this.myVideos[this.i].titre);

};