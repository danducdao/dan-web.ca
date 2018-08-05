<template>
    <section id="register-container">
        <form @submit.prevent="onSubmit">
            <div class="row">
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Information</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="abr">Titre de civilité</label>&nbsp;<span style="color:red;">*</span>    
                                <select name="abr" 
                                        v-input-bar-color-error=[true,!$v.employee.abrege.$invalid]
                                        v-model.trim="$v.employee.abrege.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="abrege in employee.AbregeOpt" :value="abrege.value">{{abrege.name}}</option>
                                </select>
                                <div v-if="$v.employee.abrege.$error && !$v.employee.abrege.required" class="alert alert-danger">Titre de civilité est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="nom">Nom</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="text"
                                        name="nom" 
                                        v-input-bar-color-error=[$v.employee.nom.$error,!$v.employee.nom.$invalid]
                                        required 
                                        v-model.trim="$v.employee.nom.$model"/>
                                <div v-if="$v.employee.nom.$error && !$v.employee.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                                <div v-if="!$v.employee.nom.alpha" class="alert alert-danger">Nom contient seulement des caractères</div>
                            </div>
                            <div class="col-md-6">
                                <label class="control-label" for="prenom">Prénom</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="text"
                                        name="prenom" 
                                        v-input-bar-color-error=[$v.employee.prenom.$error,!$v.employee.prenom.$invalid]
                                        required 
                                        v-model.trim="$v.employee.prenom.$model"/>
                                <div v-if="$v.employee.prenom.$error && !$v.employee.prenom.required" class="alert alert-danger">Prénom est obligatoire</div>
                                <div v-if="!$v.employee.prenom.alpha" class="alert alert-danger">Prénom contient seulement des caractères</div>
                            </div>
                        </div>
                        <div class="row">
                        <div class="col-md-6">
                            <label class="control-label" for="titre">Titre</label>&nbsp;<span style="color:red;">*</span>
                            <input  type="text"
                                    name="titre"
                                    v-input-bar-color-error=[$v.employee.titre.$error,!$v.employee.titre.$invalid]
                                    required 
                                    v-model.trim="$v.employee.titre.$model" />
                            <div v-if="$v.employee.titre.$error && !$v.employee.titre.required" class="alert alert-danger">Titre est obligatoire</div>
                            <div v-if="!$v.employee.titre.alpha" class="alert alert-danger">Titre contient seulement des caractères</div>
                        </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="statut">Statut</label>
                                <select class="form-control" name="statut" v-model="employee.statut">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="statut in employee.StatutOpt" :value="statut.value">{{statut.name}}</option> 
                                </select>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="genre">Genre</label>
                                <select class="form-control" name="genre" v-model="employee.genre">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="genre in employee.GenreOpt" :value="genre.value">{{genre.name}}</option>
                                </select>  
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="dateNaissance">Date de naissance</label>&nbsp;<span style="color:red;">*</span>
                                <date-picker  name="dateNaissance" 
                                              v-input-bar-color-error[$v.employee.dateNaissance.$error,!$v.employee.dateNaissance.$invalid]
                                              required 
                                              v-model.trim="$v.employee.dateNaissance.$model" 
                                              lang="fr"
                                              :style="DatePickerStyle"></date-picker>            
                                <div v-if="$v.employee.dateNaissance.$error && !$v.employee.dateNaissance.required" class="alert alert-danger" :style="DatePickerStyle">Date de naissance est obligatoire</div> 
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Coordonnée</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-7">
                                <label class="control-label" for="address">Address</label>&nbsp;<span style="color:red;">*</span>
                                <input type="text"
                                       name="address" 
                                       v-input-bar-color-error=[$v.employee.address.$error,!$v.employee.address.$invalid] 
                                       required 
                                       v-model.trim="$v.employee.address.$model"/>
                                <div v-if="$v.employee.address.$error && !$v.employee.address.required" class="alert alert-danger">Address est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="pays">Pays</label>&nbsp;<span style="color:red;">*</span>
                                <select v-input-bar-color-error=[true,!$v.employee.pays.$invalid]
                                        name="pays" 
                                        v-model.trim="$v.employee.pays.$model" 
                                        @change.prevent="selectedPays()">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="pays in paysOpt" :value="pays.value">{{pays.name}}</option>
                                </select>
                                <div v-if="$v.employee.pays.$error && !$v.employee.pays.required" class="alert alert-danger">Pays est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="ville">Ville</label>&nbsp;<span style="color:red;">*</span>
                                <select name="ville" 
                                        v-input-bar-color-error=[true,!$v.employee.ville.$invalid]
                                        v-model.trim="$v.employee.ville.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="ville in villesOpt" :value="ville.value">{{ville.name}}</option>
                                </select>
                                <div v-if="$v.employee.ville.$error && !$v.employee.ville.required" class="alert alert-danger">Ville est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="region">Région</label>&nbsp;<span style="color:red;">*</span>
                                <select name="region" 
                                        v-input-bar-color-error=[true,!$v.employee.region.$invalid]
                                        v-model="$v.employee.region.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="region in regionsOpt" :value="region.value">{{region.name}}</option>
                                </select>
                                <div v-if="$v.employee.region.$error && !$v.employee.region.required" class="alert alert-danger">Région est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="codePostale">Code postale</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="text"
                                        name="codePostale" 
                                        v-input-bar-color-error=[$v.employee.codePostale.$error,!$v.employee.codePostale.$invalid] 
                                        required
                                        v-model.trim="$v.employee.codePostale.$model" />
                                <div v-if="$v.employee.codePostale.$error && !$v.employee.codePostale.required" class="alert alert-danger">Code postale est obligatoire</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Contact</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="telephone">Téléphone</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="text"
                                        name="telephone" 
                                        v-input-bar-color-error=[$v.employee.telephone.$error,!$v.employee.telephone.$invalid]
                                        required
                                        v-model.trim="$v.employee.telephone.$model"
                                        placeholder="(___)___-____"/>
                                <div v-if="$v.employee.telephone.$error && !$v.employee.telephone.required" class="alert alert-danger">Téléphone est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="cellulaire">Cellulaire</label>
                                <input class="form-control" name="cellulaire" v-model="employee.cellulaire"  placeholder="(___)___-____"/>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="email">Courriel</label>&nbsp;<span style="color:red;">*</span>
                                <input type="email" 
                                       name="email" 
                                       v-input-bar-color-error=[$v.employee.email.$error,!$v.employee.email.$invalid]
                                       required
                                       v-model.trim="$v.employee.email.$model" 
                                       placeholder="exemple@gmail.com"/>
                                <div v-if="$v.employee.email.$error && !$v.employee.email.required" class="alert alert-danger">Courriel est obligatoire</div>
                                <div v-if="!$v.employee.email.email" class="alert alert-danger">Courriel est invalid</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Statut emploi</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="dateEmbauche">Date d'embauche</label>&nbsp;<span style="color:red;">*</span>
                                <date-picker name="dateEmbauche" 
                                             v-input-bar-color-error=[$v.employee.dateEmbauche.$error,!$v.employee.dateEmbauche.$invalid]
                                             required 
                                             v-model.trim="$v.employee.dateEmbauche.$model" 
                                             lang="fr"
                                             :style="DatePickerStyle"></date-picker>
                                <div v-if="$v.employee.dateEmbauche.$error && !$v.employee.dateEmbauche.required" class="alert alert-danger" :style="DatePickerStyle">Date d'embauche est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="salaire">Salaire</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="text"
                                        name="salaire" 
                                        v-input-bar-color-error=[$v.employee.salaire.montant.$error,!$v.employee.salaire.montant.$invalid]
                                        required
                                        v-model="$v.employee.salaire.montant.$model" />
                                <div v-if="$v.employee.salaire.montant.$error && !$v.employee.salaire.montant.required" class="alert alert-danger">Salaire est obligatoire</div>
                                <div v-if="!$v.employee.salaire.montant.decimal" class="alert alert-danger">Salaire doit être décimal</div>
                            </div>
                            <div class="col-md-4">
                                <label class="control-label" for="par">Par</label>&nbsp;<span style="color:red;">*</span>
                                <select name="par"
                                        v-input-bar-color-error=[true,!$v.employee.salaire.par.$invalid]
                                        v-model.trim="$v.employee.salaire.par.$model">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="par in employee.ParOpt" :value="par.value">{{par.name}}</option>
                                </select>
                                <div v-if="$v.employee.salaire.par.$error && !$v.employee.salaire.par.required" class="alert alert-danger" :style="DatePickerStyle">Payé par est obligatoire</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="congeVacance">Congé vacance</label>
                                <input type="text" 
                                       name="congeVacance"
                                       v-input-bar-color-error=[!$v.employee.congeVacance.numeric,!$v.employee.congeVacance.$invalid]
                                       v-model.trim="employee.congeVacance" />
                                <div class="alert alert-danger" v-if="!$v.employee.congeVacance.numeric">Congé vacance doit être digit</div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-4">
                                <label class="control-label" for="congeMaladie">Congé maladie</label>
                                <input name="congeMaladie"
                                       v-input-bar-color-error=[!$v.employee.congeMaladie.numeric,!$v.employee.congeMaladie.$invalid]
                                       v-model.trim="employee.congeMaladie" />
                                <div class="alert alert-danger" v-if="!$v.employee.congeMaladie.numeric">Congé maladie doit être digit</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div clas="row">
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Autres Informations</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="note">Note</label>
                                <textarea class="form-control" name="note" v-model="employee.note"></textarea>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="image">Image</label>
                                <app-file-upload 
                                        name="image"
                                        maxFiles = 1
                                        maxSize = 2
                                        fileExt ="JPG, GIF, PNG, JPEG"
                                        v-on:UploadStatus="UploadStatus($event)" 
                                        v-on:FileToSave="FileToSave($event)">
                                </app-file-upload>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <div class="well" v-if="employee.photo">
                                <div class="parent">
                                    <img v-bind:src="employee.photo" :height="fileUpload.height" :width="fileUpload.width" />
                                        <button class="btn btn-danger"
                                                :style="fileUpload.styleXRemove"
                                                @click.prevent="removeImage">X
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Login</strong></div>
                    <div class="panel-body">
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="username">Nom d'utilisateur</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="email" 
                                        name="username"
                                        v-input-bar-color-error=[$v.admin.username.$error,!$v.admin.username.$invalid]
                                        required
                                        v-model.trim="$v.admin.username.$model" 
                                        placeholder="exemple@gmail.com" 
                                        title="Veuillez entrer votre nom d'utilisateur">
                                <div v-if="$v.admin.username.$error">
                                    <div class="alert alert-danger" v-if="!$v.admin.username.required">Nom d'utilisateur est obligatoire</div>
                                    <div class="alert alert-danger" v-if="!$v.admin.username.email">Nom d'utilisateur est invalid</div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="password">Mot de passe</label>&nbsp;<span style="color:red;">*</span>
                                <input  type="password" 
                                        name="password"
                                        v-input-bar-color-error=[$v.admin.password.$error,!$v.admin.password.$invalid]
                                        required    
                                        v-model.trim="$v.admin.password.$model" 
                                        placeholder="******" 
                                        title="Veuillez entrer votre mot de passe">
                                <div v-if="$v.admin.password.$error">
                                    <div class="alert alert-danger" v-if="!$v.admin.password.required">Mot de passe est obligatoire</div>
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
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label class="control-label" for="confirmPassword">Confirme mot de passe</label>
                                <input  type="password"
                                        name="confirmpassword"
                                        v-input-bar-color-error=[$v.admin.confirmPassword.$error,!$v.admin.confirmPassword.$invalid]
                                        required
                                        v-model.trim="$v.admin.confirmPassword.$model" 
                                        placeholder="******" 
                                        title="Veuillez confimer votre mot de passe">
                                <div v-if="$v.admin.password.$error">
                                    <div class="alert alert-danger" v-if="!$v.admin.confirmPassword.sameAsPassword">Mots de passe doivent être identiques</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-md-12">
                    <button type="submit" class="btn btn-success" :disabled="!$v.employee.nom.required 
                                                                            || !$v.employee.nom.alpha 
                                                                            || !$v.employee.prenom.required 
                                                                            || !$v.employee.prenom.alpha
                                                                            || !$v.employee.titre.required 
                                                                            || !$v.employee.titre.alpha 
                                                                            || !$v.employee.dateNaissance.required
                                                                            || !$v.employee.address.required
                                                                            || !$v.employee.pays.required 
                                                                            || !$v.employee.ville.required
                                                                            || !$v.employee.region.required
                                                                            || !$v.employee.codePostale.required
                                                                            || !$v.employee.telephone.required
                                                                            || !$v.employee.email.required
                                                                            || !$v.employee.dateEmbauche.required
                                                                            || !$v.employee.salaire.montant.required
                                                                            || !$v.employee.salaire.montant.decimal
                                                                            || !$v.employee.salaire.par.required
                                                                            || !$v.employee.congeVacance.numeric
                                                                            || !$v.employee.congeMaladie.numeric
                                                                            || !$v.admin.username.required
                                                                            || !$v.admin.username.email
                                                                            || !$v.admin.password.required
                                                                            || !$v.admin.password.password
                                                                            || !$v.admin.confirmPassword.sameAsPassword
                                                                            ">

                        <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                    </button>&nbsp;
                    <router-link :to="'/login'" append class="btn btn-success">
                        <i class="fa fa-backward" style="font-size:24px;float:left;"></i>
                        <span style="margin-left:5px;font-weight:bold;font-size:18px;">BACK</span>
                    </router-link>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import DatePicker from "vue2-datepicker";
import fileUpload from "../fileUpload/fileUpload";
import { Employee } from "../../classes/employee";
import { Admin } from "../../classes/admin";
import { FileUpload } from "../../classes/fileUpload";
import { GoogleMapService } from "../../services/googleMap";
import { EmployeeService } from "../../services/employee";
import { alpha, password, convertDate } from "../../inc/helper";
import { InputBarColorError } from "../../directives/classDirective.js";
import {
  required,
  email,
  sameAs,
  decimal,
  numeric
} from "vuelidate/lib/validators";

export default {
  name: "Enregistrer",
  components: {
    DatePicker,
    "app-file-upload": fileUpload
  },
  data() {
    return {
      employee: new Employee(),
      fileUpload: new FileUpload(),
      admin: new Admin(),
      googleMap: new GoogleMapService(this.$http),
      employeeService: new EmployeeService(this.$http),
      DatePickerStyle: "width:235px;",
      paysOpt: [],
      villesOpt: [],
      regionsOpt: []
    };
  },
  created() {
    this.googleMap.getPays().then(data => (this.paysOpt = data.body));
  },
  methods: {
    selectedPays() {
      if (!this.employee.pays) return;
      this.googleMap
        .getVilles(this.employee.pays)
        .then(data => (this.villesOpt = data.body));
      this.googleMap
        .getRegions(this.employee.pays)
        .then(data => (this.regionsOpt = data.body));
    },
    UploadStatus(uploadStatus) {
      this.fileUpload.UploadStatus(uploadStatus);
    },
    FileToSave(file) {
      this.fileUpload.FileToSave(file, this.employee);
    },
    removeImage: function() {
      this.fileUpload.removeImage(this.employee);
    },
    onSubmit() {
      this.admin.employee.nom = this.employee.nom;
      this.admin.employee.prenom = this.employee.prenom;
      this.employee.dateNaissance = convertDate(this.employee.dateNaissance);
      this.employee.dateEmbauche = convertDate(this.employee.dateEmbauche);
      this.employeeService
        .saveEmployee(this.employee, this.admin)
        .then(resp => this.callback(resp));
    },
    callback(resp) {
      if (resp.status == 200 && resp.body) {
        alert(
          "Félicitation! Vos informations ont été sauvegardées avec succès"
        );
        this.$router.push("login");
        return;
      }
      alert("Désolé! Vos informations ont été sauvegardées avec sans succès");
    }
  },
  validations: {
    employee: {
      abrege: {
        required
      },
      nom: {
        required,
        alpha
      },
      prenom: {
        required,
        alpha
      },
      titre: {
        required,
        alpha
      },
      address: {
        required
      },
      pays: {
        required
      },
      ville: {
        required
      },
      region: {
        required
      },
      codePostale: {
        required
      },
      telephone: {
        required
      },
      email: {
        required,
        email
      },
      dateEmbauche: {
        required
      },
      dateNaissance: {
        required
      },
      salaire: {
        montant: {
          required,
          decimal
        },
        par: {
          required
        }
      },
      congeVacance: {
        required,
        numeric
      },
      congeMaladie: {
        required,
        numeric
      }
    },
    admin: {
      username: {
        required,
        email
      },
      password: {
        required,
        password
      },
      confirmPassword: {
        sameAsPassword: sameAs("password")
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#register-container .row {
  margin: 0 0 5px 0;
}
</style>


