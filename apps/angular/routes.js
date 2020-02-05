import angular from 'angular';
import './root.component.js';
import './gifts.component.js';
import './lorem-ipsum.component.js';

angular
.module('single-spa-app')
    .config(["$stateProvider", "$locationProvider", ($stateProvider, $locationProvider) => {

  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false,
  });

  $stateProvider
  .state('root', {
    url: '/angular',
    template: '<root />',
  })

  .state('root.gifs', {
    url: '/gifs',
    template: '<gifs />',
  })

  .state('root.lorem-ipsum', {
    url: '/lorem-ipsum',
    template: '<lorem-ipsum />',
  })
    }]);