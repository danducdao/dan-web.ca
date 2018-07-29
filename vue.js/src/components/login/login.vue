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
                                <input type="email" class="form-control" name="username" v-model.trim="$v.admin.username.$model" placeholder="exemple@gmail.com" title="Veuillez entrer votre nom d'utilisateur">
                                <div class="alert alert-danger" v-if="$v.admin.username.$error && !$v.admin.username.required">Nom d'utilisateur est obligatoire</div>
                                <div class="alert alert-danger" v-if="!$v.admin.username.email">Nom d'utilisateur est invalid</div>
                            </div>
                            <div class="form-group">
                                <label class="control-label" for="password">Mot de passe</label>&nbsp;<span style="color:red;">*</span>
                                <input type="password" class="form-control" name="password" v-model.trim="$v.admin.password.$model" placeholder="******" title="Veuillez entrer votre mot de passe">
                                <div class="alert alert-danger" v-if="$v.admin.password.$error && !$v.admin.password.required">Mot de passe est obligatoire</div>
                                <div class="alert alert-danger" v-if="!$v.admin.password.password">
                                    <div>Au moins un majuscule</div>
                                    <div>Au moins un minuscule</div>
                                    <div>Au moins un digit</div>
                                    <div>Au moins un caractère spéciaux</div>
                                    <div>Minimum huit de longeur</div>
                                </div>
                            </div>
                            <div class="checkbox">
                                <div :class="iCheck" style="position: relative;" @click.prevent="remember">
                                    <input type="checkbox" style="position: absolute; opacity: 0;" >
                                    <ins class="iCheck-helper" style="position: absolute; top: 0%; left: 0%; display: block; width: 100%; height: 100%; margin: 0px; padding: 0px; background: rgb(255, 255, 255) none repeat scroll 0% 0%; border: 0px none; opacity: 0;"></ins>
                                </div>
                                Mémoriser la connexion
                                <p class="help-block small">(s'il s'agit d'un ordinateur privé)</p>
                                <button type="submit" class="btn btn-success btn-block" :disabled="!$v.admin.username.required 
                                                                                                  || !$v.admin.username.email 
                                                                                                  || !$v.admin.password.required
                                                                                                  || !$v.admin.password.password">Identifier</button>
                                <button class="btn btn-primary btn-block" @click.prevent="register()">Enregistrer</button>
                            </div>
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    </section>
</template>

<script>

import { AdminService } from '../../services/admin';
import { Admin } from '../../classes/admin';
import { LocalStorage } from '../../classes/localstorage';
import { required,email } from 'vuelidate/lib/validators';
import { password } from '../../inc/helper';

export default {
    name: 'Login',
    data () {
        return {
            iCheck:{"icheckbox_square-green":true,'checked':false},
            adminService:new AdminService(this.$http),
            admin:new Admin(),
            localStorage:new LocalStorage()
        }
    },
    created()
    {
        if(this.localStorage.itemExist('rememberMe'))
        {
            this.iCheck.checked = true;
            this.admin.username = this.localStorage.getItem('rememberMe').username;
            this.admin.password = this.localStorage.getItem('rememberMe').password;
        }else
        {
            this.iCheck.checked = false;
        }
    },
    methods :{
        remember()
        {
            this.iCheck.checked = !this.iCheck.checked;
        },
        onSubmit()
        {
            this.adminService.authenticate(this.admin)
                             .then(data => this.callback(data));
        },
        callback(data)
        {
            if(data.status == 200 && data.body && data.body.success)
            {
                if(this.iCheck.checked)
                {
                    this.localStorage.setItem('rememberMe',{'username':this.admin.username,'password':this.admin.password});
                }else{
                    if(this.localStorage.itemExist('rememberMe'))
                        this.localStorage.removeItem('rememberMe');
                }
                this.$router.push("admin");
                return;
            }
            alert("Nom d'utilisateur ou Mot de passe est incorrect");
            this.localStorage.removeItem('rememberMe');  
        },
        register()
        {
            this.$router.push("register");
        }
    },
    validations : {
        admin : {
            username :{
                required,
                email
            },
            password :{
                required,
                password
            }
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>


