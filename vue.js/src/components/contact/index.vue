<template>
    <section>
        <form @submit.prevent="onSubmit">
            <div class="content">
                <div class="row">
                    <div class="hpanel col-sm-5">
                        <div class="panel-heading hbuilt"><strong>Contact Form</strong></div>
                        <div class="panel-body">
                            <div class="row">
                                <div class="col-lg-3">
                                    <label class="label-control"><strong>Nom</strong><br>Obligatoire</label>
                                </div>
                                <div class="col-md-8">
                                    <input type="text"  
                                            v-input-bar-color-error=[$v.email.nom.$error,!$v.email.nom.$invalid] 
                                            v-model.trim="$v.email.nom.$model">
                                    <div v-if="$v.email.nom.$error && !$v.email.nom.required" class="alert alert-danger">Nom est obligatoire</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3">
                                    <label class="label-control"><strong>Courriel</strong><br>Obligatoire</label>
                                </div>
                                <div class="col-lg-8">
                                    <input type="email" 
                                            v-input-bar-color-error=[$v.email.courriel.$error,!$v.email.courriel.$invalid]   
                                            v-model.trim="$v.email.courriel.$model">
                                    <div v-if="$v.email.courriel.$error && !$v.email.courriel.required" class="alert alert-danger">Courriel est obligatoire</div>
                                    <div class="alert alert-danger" v-if="!$v.email.courriel.email">Courriel est invalid</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3">
                                    <label class="label-control"><strong>Sujet</strong><br>Obligatoire</label>
                                </div>
                                <div class="col-lg-8">
                                    <input type="text" 
                                            v-input-bar-color-error=[$v.email.sujet.$error,!$v.email.sujet.$invalid]  
                                            v-model.trim="$v.email.sujet.$model">
                                    <div v-if="$v.email.sujet.$error && !$v.email.sujet.required" class="alert alert-danger">Sujet est obligatoire</div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-3" >
                                    <label class="label-control"><strong>Message</strong><br>Obligatoire</label>
                                </div>
                                <div class="col-lg-9">
                                    <vue-editor style="height:120px;" v-model="$v.email.message.$model" :editorToolbar="customToolbar"></vue-editor> 
                                </div>
                            </div><br><br><br>
                            <div class="row" style="margin-top:-13px;">
                                <div class="col-lg-3" />
                                <div class="col-lg-9">
                                    <div v-if="$v.email.message.$error && !$v.email.message.required" class="alert alert-danger">Message est obligatoire</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="hpanel col-sm-5">
                        <div class="panel-heading hbuilt"><strong>Information</strong></div>
                        <div class="panel-body">
                                <div class="row">
                                    <div class="col-lg-2"><span><strong>Téléphone</strong></span></div>
                                    <div class="col-lg-4"><span>(514)999-9999</span></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2"><span><strong>Courriel</strong></span></div>
                                    <div class="col-lg-4"><span>exemple@gmail.com</span></div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-2"><span><strong>Address</strong></span></div>
                                    <address class="col-lg-4">
                                        <div>
                                            123 Peel<br>
                                            Montréal, Québec<br>
                                            H0Z-0X0
                                        </div>
                                    </address>
                                </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="hpanel hblue col-lg-6"> 
                        <button type="submit" 
                                class="btn btn-success" 
                                :disabled="!$v.email.nom.required
                                        || !$v.email.courriel.required 
                                        || !$v.email.courriel.email
                                        || !$v.email.sujet.required
                                        || !$v.email.message.required">
                            <i class="fa fa-check-square-o" style="font-size:24px;float:left;"></i>
                            <span style="margin-left:5px;font-weight:bold;font-size:18px;">OK</span>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
import { VueEditor } from "vue2-editor";
import { EmailService } from "../../services/email";
import { required, email } from "vuelidate/lib/validators";
import { InputBarColorError } from "../../directives/classDirective.js";

export default {
  name: "Contact",
  directives: {
    InputBarColorError
  },
  components: {
    "vue-editor": VueEditor
  },
  data() {
    return {
      emailService: new EmailService(this.$http),
      email: { nom: "", courriel: "", sujet: "", message: "" },
      customToolbar: ""
    };
  },
  created() {
    this.customToolbar = [
      ["bold", "italic", "underline"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["image", "code-block"]
    ];
  },
  methods: {
    onSubmit() {
      this.emailService
        .send(this.email)
        .then(
          data =>
            data.body.success
              ? alert("Votre message a été envoyé avec succès")
              : alert("Votre message a été envoyé avec sans succès")
        );
    }
  },
  validations: {
    email: {
      nom: {
        required
      },
      courriel: {
        required,
        email
      },
      sujet: {
        required
      },
      message: {
        required
      }
    }
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
