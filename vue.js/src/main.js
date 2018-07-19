// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import * as VueGoogleMaps from "vue2-google-maps";
import VueCurrencyFilter from 'vue-currency-filter'
import Vuelidate from 'vuelidate'

Vue.config.productionTip = false

Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyCBi6fMDrXoitlxzOyRJ-Nvjq1gRR4E1uM",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueCurrencyFilter,
{
  symbol : '$',
  thousandsSeparator: '.',
  fractionCount: 2,
  fractionSeparator: '.',
  symbolPosition: 'front',
  symbolSpacing: false
});
Vue.use(Vuelidate);

import "@/assets/css/fontawesome/css/font-awesome.css";
import "@/assets/css/metisMenu/dist/metisMenu.css";
import "@/assets/css/animate.css/animate.css";
import "@/assets/css/bootstrap/dist/css/bootstrap.css";
import "@/assets/css/sweetalert/lib/sweet-alert.css";
import "@/assets/css/toastr/build/toastr.min.css";
import "@/assets/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css";
import "@/assets/css/fonts/pe-icon-7-stroke/css/helper.css";
import "@/assets/css/styles/style.css";
import "@/assets/css/styles/static_custom.css";
import "@/assets/css/styles/styles.css";

import "@/assets/js/jquery/dist/jquery.min.js";
import "@/assets/js/jquery-ui/jquery-ui.min.js";
import "@/assets/js/slimScroll/jquery.slimscroll.min.js";
import "@/assets/js/bootstrap/dist/js/bootstrap.min.js";
import "@/assets/js/metisMenu/dist/metisMenu.min.js";
import "@/assets/js/peity/jquery.peity.min.js";
import "@/assets/js/nestable/jquery.nestable.js";
import "@/assets/js/sparkline/index.js";
import "@/assets/js/bootstrap-tour/build/js/bootstrap-tour.min.js";
import "@/assets/js/homer.js";

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
