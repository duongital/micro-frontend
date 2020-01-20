import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import store from "./src/store";
import routes from "./src/routes";
import Hello from './main.vue';

import "../styles/index.css";

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    store: store,
    router: routes,
    render: r => r(Hello)
  } 
});

export const bootstrap = [
  vueLifecycles.bootstrap,
];

export const mount = [
  vueLifecycles.mount,
];

export const unmount = [
  vueLifecycles.unmount,
];