/*
* Program : Class Admin
* Écrit par : Dan Duc Dao
*/

export class Admin {
  public id: string;
  public employee_id: number;
  public username: string;
  public password: string;
  public confirm_password: string;
  public active: number;

  constructor() {
    this.employee_id = null;
    this.username = "";
    this.password = "";
    this.confirm_password = "";
    this.active = 1;
  }
}
