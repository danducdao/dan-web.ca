import Vue from "vue";

export const InputBarColorError = {
  bind(el, binding, vnode) {
    el.className = "form-control";
  },
  update(el, binding, vnode) {
    if (binding.value[0] === true) {
      el.className = "input_form_error";
    }
    if (binding.value[1] === true) {
      el.className = "input_form_valid";
    }
    el.className += " form-control";
  }
};

Vue.directive("input-bar-color-error", InputBarColorError);
