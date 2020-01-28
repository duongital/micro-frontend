import Vue from 'vue';
import singleSpaVue from 'single-spa-vue';
import store from "./src/store";
import routes from "./src/routes";
import Main from './main.vue';

const vueLifecycles = singleSpaVue({
  Vue,
  appOptions: {
    el: '#vue',
    store: store,
    router: routes,
    render: r => r(Main)
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