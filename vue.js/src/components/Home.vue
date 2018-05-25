<template>
  <div>
     <p>Nom : {{name}}</p>
     <p>Titre : {{job|}}</p>
     <p>{{ getDate()}}</p>
     <p><a v-bind:href="website">www.indeed.com</a></p>
     <p v-hml="websiteTag"></p>

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
      websiteTag : '<a href="http://exemple.com">Exemple</a>'
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
