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
     <table border="1">
        <thead>
           <td>No.</td>
           <td>Id</td>
           <td>Titre</td>
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
            ]
    }
  },
  methods:{
      getDate(){
         var now = new Date();
         return dateFormat(now, "yyyy/mm/d");
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
