import Vuex from "vuex";
import Vue from "vue";

import Products from "./products";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    Products,
  }
});

export default store;
