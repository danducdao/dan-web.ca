/*
* Program : Classe LocalStorage
* Écrit par : Dan Duc Dao
*/

export class LocalStorage {
  setItem(name, value) {
    localStorage.setItem(name, JSON.stringify(value));
  }

  getItem(name) {
    return JSON.parse(localStorage.getItem(name));
  }

  removeItem(name) {
    localStorage.removeItem(name);
  }

  itemExist(name) {
    return JSON.parse(localStorage.getItem(name)) ? true : false;
  }
}
