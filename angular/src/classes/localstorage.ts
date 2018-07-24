/*
* Program : classe Localstorage et SessionStorage
* Écrit par : Dan Duc Dao
*/

export class LocalStorage
{
    static setItem(name:string,value:any):void{
         localStorage.setItem(name, JSON.stringify(value));
    }

    static getItem(name:string):any{
        return JSON.parse(localStorage.getItem(name));
    }

    static removeItem(name:string):void{
        localStorage.removeItem(name);
    }

    static itemExist(name:string):boolean
    {
        return JSON.parse(localStorage.getItem(name)) ? true : false;
    }
}

export class SessionStorage
{
    static setItem(name:string,value:any):void{
         sessionStorage.setItem(name, JSON.stringify(value));
    }

    static getItem(property:string):any{
        return JSON.parse(sessionStorage.getItem(name));
    }

    static removeItem(name:string):void{
        sessionStorage.removeItem(name);
    }

    static itemExist(name:string):boolean
    {
        return JSON.parse(sessionStorage.getItem(name)) ? true : false;
    }
}
