import singleSpaAngularJS from 'single-spa-angularjs';
import angular from 'angular';
/* We import app.module.js before routes.js because we need to create the 'app' module
 * before we try to use it. SystemJS (which is used to bundle this angularjs app) does
 * ensure that imports are executed with the first import exectued first. This nuance
 * is something caused by angularjs's dependency injection layer that was invented before
 * es6 import statements.
 */
import './app.module.js';
import './routes.js';

require('../css/merisier.styl');
require('../css/merisier.minimal.styl');
require('../css/tooltip.less');
require('../css/loading-bar.styl');

const domElementGetter = () => document.getElementById('mihq');

const angularLifecycles = singleSpaAngularJS({
  angular,
  domElementGetter,
  mainAngularModule: 'merisier',
  uiRouter: true,
  // angular-ui-router references `window.angular` :(, so we have to preserve the window.angular global
  preserveGlobal: true,
});

export const bootstrap = [
  angularLifecycles.bootstrap,
];

export const mount = [
  angularLifecycles.mount,
];

export const unmount = [
  angularLifecycles.unmount,
];