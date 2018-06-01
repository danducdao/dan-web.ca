<template>
    <div>
       <form>
            <div>
                <div class="form-group">
                      <label for="title" class="control-label">Titre:</label>
                      <input type="text" style="width:400px;" ref="title" name="title" id="title" autofocus class="form-control" />
                </div>
                <div class="form-group">
                      <label for="artiste" class="control-label">Artiste:</label>
                      <input type="text" style="width:400px;" ref="artiste" name="artiste" id="artiste" class="form-control"/>
                </div>
                <div class="form-group">
                      <label for="comments" class="control-label">Commentaire:</label>
                      <textarea style="width:400px;" ref="comments" name="comments" id="comments" class="form-control" /></textarea>
                </div>
                <div class="form-group">
                    <input type="button" class="btn btn-primary" name="submit" value="Ajouter album" v-on:click="add()"/>
                </div>
            </div>
            <div>
                <app-listAlbum v-bind:albums="albums"></app-listAlbum>
            </div>
        </form>
     </div>
</template>

<script>
import ListAlbum from './list-album';
export default {
  name: 'Album',
  components:{
      'app-listAlbum' : ListAlbum
  },
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
