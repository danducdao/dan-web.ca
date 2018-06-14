/*
* Program : Class Service
* Écrit par : Dan Duc Dao
*/

export class Service {

    private protocol:string;
    private domain:string;
    private path:string;
    private url:string;

    constructor() {
        this.protocol = "http://";
        this.domain = "localhost:4000";
    }

    set Path(path:string){
        if(path.indexOf('/') === -1)
        {
           this.path += "/" + path;
        }else{
           this.path = path;
        }
        this.url = this.protocol + this.domain + this.path;
    }

    get Url():string{
        return this.url;
    }
}
