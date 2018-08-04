import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Admin } from "src/classes/admin";
import { LocalStorage } from "src/classes/localstorage";
import { AdminService } from "src/services/admin.service";
import { CheckBox } from "src/classes/checkbox";
import { Regex } from "src/classes/regex";

@Component({
  selector: "app-login",
  template: `
                <section class="login-container">
                      <div class="row">
                         <div class="col-md-12">
                              <div class="text-center m-b-md">
                                  <h3>SE CONNECTER À ADMIN</h3>
                              </div>
                              <div class="hpanel">
                                  <div class="panel-body">
                                      <form (ngSubmit)="onSubmit()" #loginForm="ngForm">
                                          <div class="form-group">
                                              <label class="control-label" for="username">Nom d'utilisateur</label>&nbsp;<span style="color:red;">*</span>
                                              <input type="email"
                                                     class="form-control"
                                                     name="username"
                                                     #username="ngModel"
                                                     required
                                                     [(ngModel)]="admin.username"
                                                     placeholder="exemple@gmail.com"
                                                     title="Veuillez entrer votre nom d'utilisateur"
                                                     [pattern]="emailPattern">
                                              <div *ngIf="username.errors">
                                                    <div [hidden]="!username.errors.required || username.pristine" class="alert alert-danger">Nom d'utilisateur est obligatoire</div>
                                                    <div [hidden]="!username.errors.pattern" class="alert alert-danger">Nom d'utilisateur est invalid</div>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label" for="password">Mot de passe</label>&nbsp;<span style="color:red;">*</span>
                                              <input type="password"
                                                     class="form-control"
                                                     name="password"
                                                     #password="ngModel"
                                                     required
                                                     [(ngModel)]="admin.password"
                                                     [pattern]="passwordPattern"
                                                     placeholder="******"
                                                     title="Veuillez entrer votre mot de passe">
                                              <div *ngIf="password.errors">
                                                    <div [hidden]="!password.errors.required || password.pristine" class="alert alert-danger">Mot de passe est obligatoire</div>
                                                    <div [hidden]="!password.errors.pattern" class="alert alert-danger">
                                                          <div>Mot de passe doit contenir:</div>
                                                          <ul style="margin-left:-10px;">
                                                              <li>Au moins un majuscule</li>
                                                              <li>Au moins un minuscule</li>
                                                              <li>Au moins un digit</li>
                                                              <li>Au moins un caractère spéciaux</li>
                                                              <li>Minimum huit de longeur</li>
                                                          </ul>
                                                    </div>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <div [ngClass]="checkbox.clsAttribut" style="position: relative;" (click)="checkbox.remember()">
                                                  <input type="checkbox" name="checkbox.Name" style="position: absolute; opacity: 0;" value="checkbox.Value">
                                                  <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                              </div>&nbsp;{{checkbox.Text}}
                                              <p class="help-block small">(s'il s'agit d'un ordinateur privé)</p>
                                              <button type="submit" class="btn btn-success btn-block" [disabled]="!loginForm.form.valid">Identifier</button>
                                              <button class="btn btn-primary btn-block" (click)="register($event)">Enregistrer</button>
                                          </div>
                                      </form>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </section>
              `,
  styles: []
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
