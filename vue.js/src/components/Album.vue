<template>
  <div>
  <form>
      <div style="display:inline-block;padding-right:20px;border-right-style:solid;border-right-color:#ccc;border-right-width:1px;">
      <table>
        <tr><td>Title:</td><td> <input type="text" ref="title" name="title" autofocus /></td></tr>
        <tr><td> Artiste: </td><td><input type="text" ref="artiste" name="artiste" /> </td></tr>
        <tr><td> Commentaire:</td><td> <textarea ref="comments" name="comments" /></textarea></td></tr>
        <tr><td><input type="button" name="submit" value="Add" v-on:click="add()"/> </td></tr>
      </table>
      </div>
      <div style="display:inline-block;vertical-align:top;padding-left:20px;">
      <table border="1">
          <caption>
              <strong>Quelques albums préférés</strong>
          </caption>
          <tr>
              <th> Titre </th>
              <th> Artiste </th>
              <th> Commentaires </th>
          </tr>
         <template v-for="album in albums">
            <tr>
                <td> {{ album.title}} </td>
                <td> {{ album.artiste }} </td>
                <td> {{album.comments }} </td>
            </tr>
          </template>
       </table>
       </div>
  </form>
  </div>
</template>

<script>
export default {
  name: 'Album',
  data(){
      return {
          albums:[]
      }
  },
  methods:{
    add(){
        this.$http.post('https://fir-database-fedef.firebaseio.com/albums.json',{
             title:this.$refs.title.value,
             artiste:this.$refs.artiste.value,
             comments:this.$refs.comments.value
        }).then(function(data){
            return this.$http.get('https://fir-database-fedef.firebaseio.com/albums.json')
        }).then(function(data){
            return data.json();
        }).then(function(data){
            var albumArray=[];
            for(let key in data){
              data[key].id = key;
              albumArray.push(data[key]);
            }
            this.albums = albumArray;
        });
    }
  },
  created(){
      this.$http.get('https://fir-database-fedef.firebaseio.com/albums.json').then(function(data){
           return data.json();
      }).then(function(data){
        var albumArray=[];
        for(let key in data){
          data[key].id = key;
          albumArray.push(data[key]);
        }
        this.albums = albumArray;
      })
  }
}
</script>

<style>

</style>
