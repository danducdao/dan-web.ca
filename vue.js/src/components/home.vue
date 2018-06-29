<template>
    <section id="main">
        <h2 class="title"><strong>Vue JS 2 Tutorial</strong></h2>
        <div class="row">
            <div class="col-md-4">
                <iframe width="546" height="315" v-bind:src="url" frameborder="1" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 titre">
                <span>Tutorial #{{count}} - {{ titre }}</span> 
            </div>
        </div>
        <div class="row">
            <div class="col-md-4">
                <button type="button" class="btn btn-primary" id="previous" v-on:click="previous()">Précédent</button>
                <button type="button" class="btn btn-primary" id="next" v-on:click="next()">Suivant</button>
            </div>
        </div>
    </section>
</template>

<script>
export default {
        name: 'Home',
        data () {
          return {
                url:"",
                titre:"",
                count:0,
                isDisabled :false,
                videosURLs:[],
                i:0,
                btnNext:"",
                btnPrevious:""
            }
        },
        methods:{
            next(){
                    var i = 0;
                    if(this.i < this.videosURLs.length - 1)
                    {
                        var i = ++this.i; 
                    }else{
                         this.i = 0;
                         i = this.i;
                    }
                    this.setVideo(this.videosURLs[i].url,this.videosURLs[i].titre,i);   
                },
            previous(){
                    var i = 0
                    if(this.i > 0)
                    {
                        i = --this.i;
                    }else{
                        this.i = this.videosURLs.length - 1;
                        i = this.i;
                    }
                    this.setVideo(this.videosURLs[i].url,this.videosURLs[i].titre,i);   
                },
            setVideo(url,titre,i){
                    this.url = url;
                    this.titre = titre;
                    this.count = ++i
                }
        },
        created(){
               this.videosURLs = [
                                    {
                                        titre : "Introduction",
                                        url :"https://www.youtube.com/embed/5LYrN_cAJoA",
                                    },
                                    {
                                        titre:"The Vue Instance",
                                        url:"https://www.youtube.com/embed/3ROjxrSa5pk"
                                    },
                                    {
                                        titre:"Data & Methods",
                                        url:"https://www.youtube.com/embed/2MAoq2-2nnE"
                                    },
                                    {
                                        titre:"Data Binding",
                                        url:"https://www.youtube.com/embed/xIOwFTCBBDg"
                                    },
                                    {
                                        titre:"Events",
                                        url:"https://www.youtube.com/embed/DCwOPBxsXDs"
                                    },
                                    {
                                        titre:"Event Modifiers",
                                        url:"https://www.youtube.com/embed/VqKjr4I4Fdo"
                                    },
                                    {
                                        titre:"Keyboard Events",
                                        url:"https://www.youtube.com/embed/Ni6qd0uRoKY"
                                    },
                                    {
                                        titre:"Two-Way Data Binding",
                                        url:"https://www.youtube.com/embed/FgvjjYBP2A0"
                                    },
                                    {
                                        titre:"Computed Properties",
                                        url:"https://www.youtube.com/embed/O14qJr5sKXo"
                                    },
                                    {
                                        titre:"Dynamic CSS Classes",
                                        url:"https://www.youtube.com/embed/4Gh5YcvGDjI"
                                    },
                                    {
                                        titre:"Conditionals",
                                        url:"https://www.youtube.com/embed/0EJqZLcwVLY"
                                    },
                                    {
                                        titre:"Looping with v-for",
                                        url:"https://www.youtube.com/embed/9Hcswbo0nCY"
                                    },
                                    {
                                        titre:"Simple Punchbag Game",
                                        url:"https://www.youtube.com/embed/WjfpQlVem-8"
                                    },
                                    {
                                        titre:"Multiple Vue Instances",
                                        url:"https://www.youtube.com/embed/k5p3TozQt84"
                                    },
                                    {
                                        titre:"Intro to Components",
                                        url:"https://www.youtube.com/embed/EAONyIKrZN0"
                                    },
                                    {
                                        titre:"Refs",
                                        url:"https://www.youtube.com/embed/rSyFM2FANtk"
                                    },
                                    {
                                        titre:"The Vue CLI",
                                        url:"https://www.youtube.com/embed/MBZVDsB4VMA"
                                    },
                                    {
                                        titre:"Vue Files & The Root Component",
                                        url:"https://www.youtube.com/embed/yP5Tu3S_FtU"
                                    },
                                    {
                                        titre:"Nesting Components",
                                        url:"https://www.youtube.com/embed/ko5Eijiaozo"
                                    },
                                    {
                                        titre:"Component CSS (scoped)",
                                        url:"https://www.youtube.com/embed/LsoLfELhG74"
                                    },
                                    {
                                        titre:"Nesting Components Examples",
                                        url:"https://www.youtube.com/embed/6-us2D7GQCk"
                                    },
                                    {
                                        titre:"Props",
                                        url:"https://www.youtube.com/embed/9qqFH60isFc"
                                    },
                                    {
                                        titre:"Primitive vs Reference Types",
                                        url:"https://www.youtube.com/embed/gfT0udzYkyw"
                                    },
                                    {
                                        titre:"Events (child to parent)",
                                        url:"https://www.youtube.com/embed/5pvG6fzkdFM"
                                    },
                                    {
                                        titre:"The Event Bus",
                                        url:"https://www.youtube.com/embed/jzh4zQcfB0o"
                                    },
                                    {
                                        titre:"Life-cycle Hooks",
                                        url:"https://www.youtube.com/embed/8rn3SK4N8Go"
                                    },
                                    {
                                        titre:"Slots",
                                        url:"https://www.youtube.com/embed/F44OoFk8spg"
                                    },
                                    {
                                        titre:"Dynamic Components",
                                        url:"https://www.youtube.com/embed/09n2945JW_0"
                                    },
                                    {
                                        titre:"Input Binding (Creating a blog, part 1)",
                                        url:"https://www.youtube.com/embed/yopDG8t60ko"
                                    },
                                    {
                                        titre:"Checkbox Binding",
                                        url:"https://www.youtube.com/embed/IkymKuIkajE"
                                    },
                                    {
                                        titre:"Select Box Binding",
                                        url:"https://www.youtube.com/embed/xtmZVV9QpaA"
                                    },
                                    {
                                        titre:"HTTP Requests",
                                        url:"https://www.youtube.com/embed/btDfVBPYI-U"
                                    },
                                    {
                                        titre:"GET Requests",
                                        url:"https://www.youtube.com/embed/aoWqFLGCK60"
                                    },
                                    {
                                        titre:"Custom Directives",
                                        url:"https://www.youtube.com/embed/3-fLYMEKOU0"
                                    },
                                    {
                                        titre:"Filters",
                                        url:"https://www.youtube.com/embed/o8UspKnsV_0"
                                    },
                                    {
                                        titre:"Custom Search Filter",
                                        url:"https://www.youtube.com/embed/G34_yNV8FMY"
                                    },
                                    {
                                        titre:"Registering Things Locally",
                                        url:"https://www.youtube.com/embed/T5h6L5MFLRA"
                                    },
                                    {
                                        titre:"Mixins",
                                        url:"https://www.youtube.com/embed/YZuml1Y9BmQ"
                                    },
                                    {
                                        titre:"Setting up Routing",
                                        url:"https://www.youtube.com/embed/Zflo2-s4768"
                                    },
                                    {
                                        titre:"Hash vs History (Routing)",
                                        url:"https://www.youtube.com/embed/js5Sr_ZSHDs"
                                    },
                                    {
                                        titre:"Adding Router Links",
                                        url:"https://www.youtube.com/embed/yn0_6T4HwHs"
                                    },
                                    {
                                        titre:"Route Parameters",
                                        url:"https://www.youtube.com/embed/KGFcgnCSS6A"
                                    },
                                    {
                                        titre:"Posting to Firebase",
                                        url:"https://www.youtube.com/embed/CzJyGo5rh7M"
                                    },
                                    {
                                        titre:"Retrieving Posts from Firebase",
                                        url:"https://www.youtube.com/embed/ieCsEdq94TA"
                                    }
                                ];
            this.setVideo(this.videosURLs[this.i].url,this.videosURLs[this.i].titre,this.i);
            this.btnNext = document.getElementById("next")
            this.btnPrevious = document.getElementById("previous")
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
        font-size:20px;
        text-align:center;
    }
</style>
