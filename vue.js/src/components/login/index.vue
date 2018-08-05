<template>
    <section class="login-container">
        <div class="row">
           <div class="col-md-12">
                <div class="text-center m-b-md">
                    <h3>SE CONNECTER À ADMIN</h3>
                </div>
                <div class="hpanel">
                    <div class="panel-body">
                        <form @submit.prevent="onSubmit()">
                            <div class="form-group">
                                <label class="control-label" for="username">Nom d'utilisateur</label>&nbsp;<span style="color:red;">*</span>
                                <input type="email" 
                                       name="username"
                                       v-input-bar-color-error=[$v.admin.username.$error,!$v.admin.username.$invalid]
                                       required
                                       v-model.trim="$v.admin.username.$model" 
                                       placeholder="exemple@gmail.com" 
                                       title="Veuillez entrer votre nom d'utilisateur">
                                <div class="alert alert-danger" v-if="$v.admin.username.$error && !$v.admin.username.required">Nom d'utilisateur est obligatoire</div>
                                <div class="alert alert-danger" v-if="!$v.admin.username.email">Nom d'utilisateur est invalid</div>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="password">Mot de passe</label>&nbsp;<span style="color:red;">*</span>
                                <input type="password" 
                                       name="password" 
                                       v-input-bar-color-error=[$v.admin.password.$error,!$v.admin.password.$invalid]
                                       required 
                                       v-model.trim="$v.admin.password.$model" 
                                       placeholder="******" 
                                       title="Veuillez entrer votre mot de passe">
                                <div class="alert alert-danger" v-if="$v.admin.password.$error && !$v.admin.password.required">Mot de passe est obligatoire</div>
                                <div class="alert alert-danger" v-if="!$v.admin.password.password">
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
                            <div class="form-group">
                                <div :class="checkbox.clsAttribut" style="position: relative;" @click="checkbox.remember()">
                                    <input type="checkbox" :name="checkbox.Name" style="position: absolute; opacity: 0;" :value="checkbox.Value">
                                    <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>&nbsp;{{checkbox.Text}}
                                <p class="help-block small">(s'il s'agit d'un ordinateur privé)</p>
                                <button type="submit" 
                                        name="identifier" 
                                        class="btn btn-success btn-block" 
                                        :disabled="!$v.admin.username.required 
                                                  || !$v.admin.username.email 
                                                  || !$v.admin.password.required
                                                  || !$v.admin.password.password">
                                        Identifier
                                  </button>
                                <button name="register" class="btn btn-primary btn-block" @click.prevent="register()">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>
import { AdminService } from "../../services/admin";
import { Admin } from "../../classes/admin";
import { LocalStorage } from "../../classes/localstorage";
import { CheckBox } from "../../classes/checkBox";
import { required, email } from "vuelidate/lib/validators";
import { password } from "../../inc/helper";
import { InputBarColorError } from "../../directives/classDirective.js";

export default {
  name: "Login",
  data() {
    return {
      adminService: new AdminService(this.$http),
      admin: new Admin(),
      localStorage: new LocalStorage(),
      checkbox: new CheckBox()
    };
  },
  created() {
    this.checkbox = new CheckBox("memo", "memo", "Mémoriser la connexion");

    if (this.localStorage.itemExist("rememberMe")) {
      this.checkbox.ClsAttribut.checked = true;
      this.admin.username = this.localStorage.getItem("rememberMe").username;
      this.admin.password = this.localStorage.getItem("rememberMe").password;
    } else {
      this.checkbox.ClsAttribut.checked = false;
    }
  },
  methods: {
    onSubmit() {
      this.adminService
        .authenticate(this.admin)
        .then(data => this.callback(data));
    },
    callback(data) {
      if (data.status == 200 && data.body && data.body.success) {
        if (this.checkbox.ClsAttribut.checked) {
          this.localStorage.setItem("rememberMe", {
            username: this.admin.username,
            password: this.admin.password
          });
        } else {
          if (this.localStorage.itemExist("rememberMe"))
            this.localStorage.removeItem("rememberMe");
        }
        this.$router.push("admin");
        return;
      }
      alert("Nom d'utilisateur ou Mot de passe est incorrect");
      this.localStorage.removeItem("rememberMe");
    },
    register() {
      this.$router.push("register");
    }
  },
  validations: {
    admin: {
      username: {
        required,
        email
      },
      password: {
        required,
        password
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>


