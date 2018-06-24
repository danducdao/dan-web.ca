/*
* Program : classe Localstorage et SessionStorage
* Écrit par : Dan Duc Dao
*/

export class LocalStorage {

    static setItem(property:string,value:any){
         localStorage.setItem(property, value);
    }

    static getItem(property:string):any{
        return localStorage.getItem(property);
    }

    static removeItem(property:string):void{
        localStorage.removeItem(property);
    }

    static itemExist(property:string)
    {
        return localStorage.getItem(property) ? true : false;
    }
}

export class SessionStorage{
    static setItem(property:string,value:any){
         sessionStorage.setItem(property, value);
    }

    static getItem(property:string):any{
        return sessionStorage.getItem(property);
    }

    static removeItem(property:string):void{
        sessionStorage.removeItem(property);
    }

    static itemExist(property:string)
    {
        return sessionStorage.getItem(property) ? true : false;
    }
}
