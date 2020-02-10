import angular from 'angular';
import template from './konto.template.html';

angular
.module('merisier')
.component('konto', {
  template,
  controllerAs: 'vm',
  controller($http) {
    const vm = this;

    $http
    .get('https://api.giphy.com/v1/gifs/search?q=ping+pong&api_key=dc6zaTOxFJmzC')
    .then(response => {
      vm.gifs = response.data.data;
    })
    .catch(err => {
      setTimeout(() => {
        throw err;
      }, 0)
    });
  },
});