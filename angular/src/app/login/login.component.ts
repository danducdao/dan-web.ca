import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/classes/admin';
import { LocalStorage } from 'src/classes/localstorage';
import { AdminService } from 'src/services/admin.service';

@Component({
  selector: 'app-login',
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
                                              <label class="control-label" for="username">Nom d'utilisateur</label>
                                              <input type="email"
                                                     class="form-control"
                                                     name="username"
                                                     #username="ngModel"
                                                     required
                                                     [(ngModel)]="admin.username"
                                                     placeholder="exemple@gmail.com"
                                                     title="Veuillez entrer votre nom d'utilisateur"
                                                     pattern="[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}">
                                              <div *ngIf="username.errors">
                                                    <div [hidden]="!username.errors.required || username.pristine" class="alert alert-danger">Nom d'utilsateur est obligatoire</div>
                                                    <div [hidden]="!username.errors.pattern" class="alert alert-danger">Username est invalide</div>
                                              </div>
                                          </div>
                                          <div class="form-group">
                                              <label class="control-label" for="password">Mot de passe</label>
                                              <input type="password"
                                                     class="form-control"
                                                     name="password"
                                                     #password="ngModel"
                                                     required
                                                     [(ngModel)]="admin.password"
                                                     placeholder="******"
                                                     title="Veuillez entrer votre mot de passe">
                                              <div *ngIf="password.errors">
                                                    <div [hidden]="!password.errors.required || password.pristine" class="alert alert-danger">Mot de passe est obligatoire</div>
                                              </div>
                                          </div>
                                          <div class="checkbox">
                                              <div [ngClass]="iCheck" style="position: relative;" (click)="remember()">
                                                  <input type="checkbox" style="position: absolute; opacity: 0;" >
                                                  <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                              </div>
                                              Mémoriser la connexion
                                              <p class="help-block small">(s'il s'agit d'un ordinateur privé)</p>
                                              <button type="submit" class="btn btn-success btn-block" [disabled]="!loginForm.form.valid">Identifier</button>
                                              <button class="btn btn- btn-block" (click)="register($event)">Registre</button>
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
  public iCheck = {"icheckbox_square-green":true,'checked':false};

  constructor(private _adminService :AdminService,private router: Router) { }

  ngOnInit()
  {
      if(LocalStorage.itemExist('rememberMe'))
      {
          this.iCheck.checked = true;
          this.admin.username = LocalStorage.getItem('rememberMe').username;
          this.admin.password = LocalStorage.getItem('rememberMe').password;
      }else
      {
          this.iCheck.checked = false;
      }
  }
  remember():void
  {
      this.iCheck.checked = !this.iCheck.checked;
      this.iCheck.checked?LocalStorage.setItem('rememberMe',{'username':this.admin.username,'password':this.admin.password}):LocalStorage.removeItem('rememberMe');
  }
  onSubmit():void
  {
      this._adminService.authenticate(this.admin)
                        .subscribe(data => this.callback(data));
  }
  callback(data)
  {
     if(!data.success)
     {
         alert("Nom d'utilisateur ou Mot de passe est incorrect")
         LocalStorage.removeItem('rememberMe');
         return;
     }
     this.router.navigateByUrl('/admin')

  }
  register(event:any):void
  {
       alert("Désolé! ce module n'est pas disponible pour l'instant");
       event.preventDefault();
  }

}
