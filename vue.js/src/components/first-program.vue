<template>
   <div>
      <p>Nom : {{name}}</p>
      <p>Titre : {{job }}</p>
      <p><a v-bind:href="website">www.indeed.com</a></p>
      <p v-html="websiteTag"></p>
    </div>
</template>

<script>
export default {
        name: 'Home',
        data () {
          return {
            name: 'Jonh Doe',
            job: 'Programmeur',
            website : 'http://www.indeed.com',
            websiteTag : '<a href="http://www.exemple.com">http://www.exemple.com</a>'
          }
        }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
