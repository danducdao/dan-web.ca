<template>
   <div>
   <p><h3>Quelques albums préférés</h3></p>
   <table class="table-bordered">
       <thead>
           <tr>
               <th>Titre</th>
               <th>Artiste</th>
               <th>Commentaires</th>
           </tr>
       </thead>
       <tbody>
          <template v-for="album in albums">
           <tr>
               <td>{{ album.title}}</td>
               <td>{{ album.artiste }}</td>
               <td>{{album.comments }}</td>
           </tr>
         </template>
       </tbody>
    </table>
   </div>
</template>
<script>
export default {
  props:['albums'],
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
