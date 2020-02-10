import angular from 'angular';
import template from './recommendation.template.jade';

angular
.module('merisier')
.component('recommendation', {
  template,
  controllerAs: 'vm',
  controller($timeout) {
    
  }
})