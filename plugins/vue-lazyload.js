import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import loading from "~/assets/images/spinner.svg";

Vue.use(VueLazyload, {
  preLoad: 1,
  loading: loading,
  attempt: 1
});
