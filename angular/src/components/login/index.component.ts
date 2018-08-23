import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Admin } from "../../classes/admin";
import { LocalStorage } from "../../classes/localstorage";
import { AdminService } from "../../services/admin.service";
import { CheckBox } from "../../classes/checkbox";
import { Regex } from "../../classes/regex";

@Component({
  selector: "app-login-index",
  templateUrl: "../../views/login/index.html"
})
export class LoginComponent implements OnInit {
  public admin = new Admin();
  public checkbox: any;
  public passwordPattern: string = Regex.PasswordPattern();
  public emailPattern: string = Regex.EmailPattern();

  constructor(private _adminService: AdminService, private router: Router) {}

  ngOnInit() {
    this.checkbox = new CheckBox(
      "memo",
      "memo",
      "Mémoriser la connexion",
      false
    );
    if (LocalStorage.itemExist("rememberMe")) {
      this.checkbox.clsAttribut = this.checkbox.icheckboxSquare;
      this.admin.username = LocalStorage.getItem("rememberMe").username;
      this.admin.password = LocalStorage.getItem("rememberMe").password;
    } else {
      this.checkbox.clsAttribut = this.checkbox.icheckboxSquare.split(" ")[0];
    }
  }

  onSubmit(): void {
    this._adminService.authenticate(this.admin).subscribe(
      res => this.callback(res),
      err => {
        console.log(err);
        alert("Nom d'utilisateur ou Mot de passe est incorrect");
      }
    );
  }
  callback(res): void {
    if (res === null || !res.success) {
      alert("Nom d'utilisateur ou Mot de passe est incorrect");
      LocalStorage.removeItem("rememberMe");
      return;
    }
    if (this.checkbox.clsAttribut.indexOf("checked") !== -1) {
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
