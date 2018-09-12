<template>
    <div class="content">
        <div class="row">
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        Vue JS 2
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo :</label>
                            <select v-model="tutoriels.Vuejs2.itemSelected" v-on:change="tutoriels.Vuejs2.selectedItem()" class="form-control">
                                    <option :disabled="true" value="">--Sélectionner--</option>
                                    <option v-for="(item,index) in tutoriels.Vuejs2.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.Vuejs2.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.Vuejs2.count}} - {{ tutoriels.Vuejs2.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.Vuejs2.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.Vuejs2.next()">Suivant</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        TypeScript Basics
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo : </label>
                            <select v-model="tutoriels.TypeScriptBasic.itemSelected" v-on:change="tutoriels.TypeScriptBasic.selectedItem()" class="form-control">
                                <option :disabled="true" value="">--Sélectionner--</option>
                                <option v-for="(item,index) in tutoriels.TypeScriptBasic.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.TypeScriptBasic.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.TypeScriptBasic.count}} - {{ tutoriels.TypeScriptBasic.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.TypeScriptBasic.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.TypeScriptBasic.next()">Suivant</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        Node JS
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo :</label>
                            <select v-model="tutoriels.Nodejs.itemSelected" v-on:change="tutoriels.Nodejs.selectedItem()" class="form-control">
                                <option :disabled="true" value="">--Sélectionner--</option>
                                <option v-for="(item,index) in tutoriels.Nodejs.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.Nodejs.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.Nodejs.count}} - {{ tutoriels.Nodejs.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.Nodejs.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.Nodejs.next()">Suivant</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        PHP 7 New Features 
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo :</label>
                            <select v-model="tutoriels.PHP7.itemSelected" v-on:change="tutoriels.PHP7.selectedItem()" class="form-control">
                                <option :disabled="true" value="">--Sélectionner--</option>
                                <option v-for="(item,index) in tutoriels.PHP7.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.PHP7.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.PHP7.count}} - {{ tutoriels.PHP7.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.PHP7.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.PHP7.next()">Suivant</button>
                        </p>   
                    </div>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        Python 3 for beginners
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo : </label>
                            <select v-model="tutoriels.Python3.itemSelected" v-on:change="tutoriels.Python3.selectedItem()" class="form-control">
                                <option :disabled="true" value="">--Sélectionner--</option>
                                <option v-for="(item,index) in tutoriels.Python3.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.Python3.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.Python3.count}} - {{ tutoriels.Python3.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.Python3.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.Python3.next()">Suivant</button>
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-lg-4">
                <div class="hpanel hgreen">
                    <div class="panel-heading hbuilt">
                        <div class="panel-tools">
                            <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                        </div>
                        Python OOP
                    </div>
                    <div class="panel-body">
                        <p>
                            <label class="control-label">Vidéo : </label>
                            <select v-model="tutoriels.PythonOOP.itemSelected" v-on:change="tutoriels.PythonOOP.selectedItem()" class="form-control">
                                    <option v-for="(item,index) in tutoriels.PythonOOP.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                            </select>
                        </p>
                        <p>
                            <iframe style="width:100%;" height="315" v-bind:src="tutoriels.PythonOOP.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </p>
                        <p class="titre">
                            <span>{{tutoriels.PythonOOP.count}} - {{ tutoriels.PythonOOP.titre }}</span>
                        </p>
                        <p>
                            <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.PythonOOP.previous()">Précédent</button>
                            <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.PythonOOP.next()">Suivant</button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Tuto from '../classes/tuto';
import youtubeEmbedUrls from '../inc/tutoriel';
export default {
        name: 'Home',
        data () {
            return {
                    tutoriels:{}
                }
        },
        created(){
            var i = 0;
            this.tutoriels = {
                    "Vuejs2" : new Tuto(youtubeEmbedUrls()[i]),
                    "TypeScriptBasic" : new Tuto(youtubeEmbedUrls()[++i]),
                    "Nodejs" : new Tuto(youtubeEmbedUrls()[++i]),
                    "Python3" : new Tuto(youtubeEmbedUrls()[++i]),
                    "PythonOOP" : new Tuto(youtubeEmbedUrls()[++i]),
                    "PHP7" : new Tuto(youtubeEmbedUrls()[++i]),
            };    
        }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    #main .title{
        text-align:left;
        }
    #previous{
        float:left;
    }
    #next{
        float:right;
    }
    .titre{
        min-height:50px;
        padding:10px;
        font-weight:bold;
        font-size:18px;
        text-align:center;
        border:1px solid #ccc;
    }
</style>