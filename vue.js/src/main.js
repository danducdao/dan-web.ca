// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import * as VueGoogleMaps from "vue2-google-maps";
import VueCurrencyFilter from "vue-currency-filter";
import Vuelidate from "vuelidate";

Vue.config.productionTip = false;

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCBi6fMDrXoitlxzOyRJ-Nvjq1gRR4E1uM",
    libraries: "places" // necessary for places input
  }
});

Vue.use(VueCurrencyFilter, {
  symbol: "$",
  thousandsSeparator: ".",
  fractionCount: 2,
  fractionSeparator: ".",
  symbolPosition: "front",
  symbolSpacing: false
});

Vue.use(Vuelidate);

export const bus = new Vue();

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  components: { App },
  template: "<App/>"
});
