<template>
    <section id="main">
        <div class="hpanel col-md-9">
                <div class="panel-heading hbuilt">
                    <div class="panel-tools">
                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                    </div>
                    Vue JS 2, TypeScript Basics
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6 border-right">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="tutoriels.Vuejs2.itemSelected" v-on:change="tutoriels.Vuejs2.selectedItem()">
                                        <option v-for="(item,index) in tutoriels.Vuejs2.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>Vue JS 2</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="tutoriels.Vuejs2.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </p>
                                <p class="titre">
                                    <span>{{tutoriels.Vuejs2.count}} - {{ tutoriels.Vuejs2.titre }}</span>
                                </p>
                                <p>
                                    <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.Vuejs2.previous()">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.Vuejs2.next()">Suivant</button>
                                </p>
                        </div>
                        <div class="col-lg-6">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="tutoriels.TypeScriptBasic.itemSelected" v-on:change="tutoriels.TypeScriptBasic.selectedItem()">
                                        <option v-for="(item,index) in tutoriels.TypeScriptBasic.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>TypeScript Basics</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="tutoriels.TypeScriptBasic.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
            <div class="hpanel col-md-9">
                <div class="panel-heading hbuilt">
                    <div class="panel-tools">
                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                    </div>
                    Node JS, Python 3 for beginners
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6 border-right">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="tutoriels.Nodejs.itemSelected" v-on:change="tutoriels.Nodejs.selectedItem()">
                                        <option v-for="(item,index) in tutoriels.Nodejs.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>Node JS</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="tutoriels.Nodejs.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </p>
                                <p class="titre">
                                    <span>{{tutoriels.Nodejs.count}} - {{ tutoriels.Nodejs.titre }}</span>
                                </p>
                                <p>
                                    <button type="button" class="btn btn-primary" id="previous"  v-on:click="tutoriels.Nodejs.previous()">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="next" v-on:click="tutoriels.Nodejs.next()">Suivant</button>
                                </p>
                        </div>
                        <div class="col-lg-6">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="tutoriels.Python3.itemSelected" v-on:change="tutoriels.Python3.selectedItem()">
                                        <option v-for="(item,index) in tutoriels.Python3.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>Python 3 for beginners</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="tutoriels.Python3.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
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
            </div>
    </section>
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
                    "Python3" : new Tuto(youtubeEmbedUrls()[++i]) 
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
