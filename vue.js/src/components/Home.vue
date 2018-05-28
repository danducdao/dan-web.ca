<template>
  <div>
     <p>Nom : {{name}}</p>
     <p>Titre : {{job|}}</p>
     <p>{{ getDate()}}</p>
     <p><a v-bind:href="website">www.indeed.com</a></p>
     <p v-html="websiteTag"></p>
     <hr>
     <ul>
        <li v-for="language in languages">{{language}}</li>
     </ul>
     <hr>
     <ul>
        <li v-for="(pers,index) in persons">{{++index}} . {{pers.name}} - {{pers.age}} ans</li>
     </ul>
     <hr>
     <table class="table-striped">
        <thead>
           <tr>
             <th>No.</th>
             <th>Id</th>
             <th>Titre</th>
           </tr>
        </thead>
        <tbody>
             <template v-for="(job,index) in jobs">
                <tr>
                    <td>{{++index}}</td>
                    <td>{{job.id}}</td>
                    <td>{{job.title}}</td>
                </tr>
            </template>
         </tbody>
      </table>
      <hr>
      <template v-for="job in jobs">
          <ul>
             <li v-for="(val,key) in job">{{key}} - {{val}}</li>
          </ul>
      </template>
      <hr>
      <div id="canvas" v-on:mousemove="updateXY">{{x}},{{y}}</div>
  </div>
</template>
<script>
var dateFormat = require('dateformat');
export default {
  name: 'Home',
  data () {
    return {
      name: 'Jonh Doe',
      job: 'Programmeur',
      website : 'http://www.indeed.com',
      websiteTag : '<a href="http://exemple.com">Exemple</a>',
      languages:['PHP','C#','JavaScript','Java','C++','Python'],
      persons:[
                {name:'Jonh',age:34},
                {name:'Mary',age:45},
                {name:'Mario',age:23},
                {name:'Steve',age:60}
              ],
      jobs:[
              {id:1,title:'Programmeur-Analyste'},
              {id:2,title:'Représentant de vente'},
              {id:3,title:'Commis de bureau'},
              {id:4,title:'Technicien en informatique'},
              {id:5,title:'Commis comptable'}
            ],
      x:0,
      y:0
    }
  },
  methods:{
      getDate(){
         var now = new Date();
         return dateFormat(now, "yyyy/mm/d");
      },
      updateXY(event){
          this.x = event.offsetX;
          this.y = event.offsetY;
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
   #canvas{
       width:600px;
       padding:200px 20px;
       text-align:center;
       border:1px solid #333;
   }
</style>
