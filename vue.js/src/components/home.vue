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
                                <select v-model="Vuejs2.itemSelected" v-on:change="Vuejs2.selectedItem()">
                                        <option v-for="(item,index) in Vuejs2.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>Vue JS 2 Tutorial</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="Vuejs2.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </p>
                                <p class="titre">
                                    <span>Tutorial #{{Vuejs2.count}} - {{ Vuejs2.titre }}</span>
                                </p>
                                <p>
                                    <button type="button" class="btn btn-primary" id="previous"  v-on:click="Vuejs2.previous()">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="next" v-on:click="Vuejs2.next()">Suivant</button>
                                </p>
                        </div>
                        <div class="col-lg-6">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="TypeScriptBasic.itemSelected" v-on:change="TypeScriptBasic.selectedItem()">
                                        <option v-for="(item,index) in TypeScriptBasic.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h3 class="title"><strong>TypeScript Basics</strong></h3>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="TypeScriptBasic.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </p>
                                <p class="titre">
                                    <span>Tutorial #{{TypeScriptBasic.count}} - {{ TypeScriptBasic.titre }}</span>
                                </p>
                                <p>
                                    <button type="button" class="btn btn-primary" id="previous"  v-on:click="TypeScriptBasic.previous()">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="next" v-on:click="TypeScriptBasic.next()">Suivant</button>
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
                    Node JS
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="col-lg-6 border-right">
                                <label class="col-sm-2 control-label">Vidéo : </label>
                                <select v-model="Nodejs.itemSelected" v-on:change="Nodejs.selectedItem()">
                                        <option v-for="(item,index) in Nodejs.listItem()" v-bind:value="item.id">{{ index + 1 }} - {{ item.titre}}</option>
                                </select>
                                <h2 class="title"><strong>Node JS</strong></h2>
                                <p>
                                        <iframe width="580" height="315" v-bind:src="Nodejs.url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                                </p>
                                <p class="titre">
                                    <span>Tutorial #{{Nodejs.count}} - {{ Nodejs.titre }}</span>
                                </p>
                                <p>
                                    <button type="button" class="btn btn-primary" id="previous"  v-on:click="Nodejs.previous()">Précédent</button>
                                    <button type="button" class="btn btn-primary" id="next" v-on:click="Nodejs.next()">Suivant</button>
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
                Vuejs2:"",
                TypeScriptBasic:"",
                Nodejs:""
            }
        },
        created(){
                var i = 0;
                this.Vuejs2 = new Tuto(youtubeEmbedUrls()[i]);
                this.TypeScriptBasic = new Tuto(youtubeEmbedUrls()[++i]);
                this.Nodejs = new Tuto(youtubeEmbedUrls()[++i]);      
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
