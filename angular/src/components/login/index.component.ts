import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Admin } from "../../classes/admin";
import { LocalStorage } from "../../classes/localstorage";
import { AdminService } from "../../services/admin.service";
import { CheckBox } from "../../classes/checkbox";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-login-index",
  templateUrl: "../../view/login/index.html"
})
export class LoginComponent implements OnInit {
  public admin = new Admin();
  public checkbox: any;
  public passwordPattern: string = Regex.PasswordPattern();
  public emailPattern: string = Regex.EmailPattern();

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.checkbox = new CheckBox("memo", "memo", "Mémoriser la connexion");
    if (LocalStorage.itemExist("rememberMe")) {
      this.checkbox.ClsAttribut.checked = true;
      this.admin.username = LocalStorage.getItem("rememberMe").username;
      this.admin.password = LocalStorage.getItem("rememberMe").password;
    } else {
      this.checkbox.ClsAttribut.checked = false;
    }
  }

  onSubmit(): void {
    this._adminService
      .authenticate(this.admin)
      .subscribe(data => this.callback(data), error => console.log(error));
  }
  callback(data): void {
    if (!data.success) {
      alert("Nom d'utilisateur ou Mot de passe est incorrect");
      LocalStorage.removeItem("rememberMe");
      return;
    }
    if (this.checkbox.ClsAttribut.checked) {
      LocalStorage.setItem("rememberMe", {
        username: this.admin.username,
        password: this.admin.password
      });
    } else {
      if (LocalStorage.itemExist("rememberMe"))
        LocalStorage.removeItem("rememberMe");
    }
    this.router.navigateByUrl("/admin");
  }
  register(event: any): void {
    this.router.navigateByUrl("/register");
    event.preventDefault();
  }
}
