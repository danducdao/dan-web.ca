<template>
    <section>
        <div class="content">
            <div class="row">
                <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Loop condition</strong></div>
                    <div class="panel-body">
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
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Loop',
  data () {
    return {
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
