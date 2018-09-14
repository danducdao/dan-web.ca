<template>
  <section>
    <div class="content">
          <div class="row">
              <div class="hpanel hblue col-md-6">
                    <div class="panel-heading hbuilt"><strong>Hello world</strong></div>
                    <div class="panel-body">
                      <p>Nom : {{ name }}</p>
                      <p>Titre : {{ job }}</p>
                      <p><a v-bind:href="website">www.indeed.com</a></p>
                      <p v-html="websiteTag"></p>
                    </div>
              </div>
          </div>
    </div>
  </section>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      name: "Jonh Doe",
      job: "Directeur de vente",
      website: "http://www.indeed.com",
      websiteTag: '<a href="http://www.exemple.com">http://www.exemple.com</a>'
    };
  }
};
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
