<template>
    <section>
      <div class="content">
        <div class="row">
            <div class="hpanel hblue col-md-6">
                  <div class="panel-heading hbuilt"><strong>Compter le nombre de caractère</strong></div>
                  <div class="panel-body">
                      <div class="row">
                        <div class="col-lg-6">
                          <label for="texte" class="control-label">Text:</label>
                          <textarea rows="5" name="texte" id="text" v-model="texte" v-on:keyup="afficher()" autofocus class="form-control" /></textarea>
                        </div>
                        <div class="col-lg-6">
                          <div :style="{borderBottom:'1px solid grey'}"><h5>Résultat:</h5></div>
                          <ul :style="{listStyleType:'none',paddingLeft:'0px'}">
                              <li v-for="(myString,key) in myStrings" :key="key">
                                  <span><em><strong>{{ myString.texte}} : {{myString.count + " fois " }}</strong></em></span>
                              </li>
                          </ul>
                        </div>
                      </div>
                  </div>
            </div>
        </div>
      </div>
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
