<template>
    <section id="string-container">
       <form>
            <div>
                <div class="form-group">
                      <label for="texte" class="control-label">Text:</label>
                      <textarea style="width:400px;" rows="5" name="texte" id="text" v-model="texte" v-on:keyup="afficher()" autofocus class="form-control" /></textarea>
                </div>
                <div>
                    <ul>
                        <li v-for="myString in myStrings">
                            <span class="col-sm-1">{{ myString.texte}}</span>
                            <span class="col-sm-1">=====></span>
                            <span class="col-sm-1">{{myString.count + " fois " }}</span>
                        </li>
                    </ul>

                </div>
            </div>
        </form>
     </section>
</template>

<script>
export default {
  name: "texte",
  data() {
    return {
      texte: "",
      myStrings: []
    };
  },
  methods: {
    afficher() {
      var myStrings = [];
      for (var i = 0; i < this.texte.length; i++) {
        var patt = /\s+/g;
        var result = patt.test(this.texte[i]);
        if (result) var texte = "espace";
        else var texte = this.texte[i];

        if (myStrings.length === 0) {
          myStrings.push({
            texte: texte,
            count: 1
          });
        } else {
          var newStrings = myStrings.filter(function(data, index) {
            return data.texte.indexOf(texte) !== -1 ? data : null;
          });

          if (newStrings.length == 0) {
            myStrings.push({
              texte: texte,
              count: 1
            });
          } else {
            var index = myStrings.indexOf(newStrings[0]);
            var count = newStrings[0].count;
            myStrings[index] = {
              texte: texte,
              count: ++count
            };
          }
        }
      }
      this.myStrings = myStrings;
    }
  }
};
</script>
<style>
</style>
