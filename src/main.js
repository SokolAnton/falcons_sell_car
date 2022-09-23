import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axious from "axios";
import VueAxious from "vue-axios";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "material-design-icons-iconfont";
import NuModal from "nu-modal-vue";
Vue.use(NuModal);

Vue.config.productionTip = false;
Vue.use(VueAxious, axious);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
