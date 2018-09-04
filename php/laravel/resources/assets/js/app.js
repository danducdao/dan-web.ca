/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require("./bootstrap");

window.Vue = require("vue");

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

export const bus = new Vue();

Vue.component(
  "autocomplete-component",
  require("./components/autocompleteComponent.vue")
);

Vue.component(
  "listing-component",
  require("./components/listingComponent.vue")
);

Vue.component(
  "textarea-component",
  require("./components/textareaComponent.vue")
);

Vue.component("radio-component", require("./components/radioComponent.vue"));

Vue.component(
  "fileupload-component",
  require("./components/fileUploadComponent.vue")
);

Vue.component("image-component", require("./components/imageComponent.vue"));

Vue.component("select-component", require("./components/selectComponent.vue"));

Vue.component(
  "select-multiple-component",
  require("./components/selectMultipleComponent.vue")
);

const app = new Vue({
  el: "#wrapper"
});
