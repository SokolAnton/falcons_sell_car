import Vue from "vue";
import Vuex from "vuex";
import BMW from "./modules/BMW.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    BMW,
  },
});
