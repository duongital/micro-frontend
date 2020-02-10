import angular from "angular";

import "./recommendation.component.js";
import "./konto.component.js";

angular.module("merisier").config([
  "$stateProvider",
  "$locationProvider",
  ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider
      .state("root", {
        url: "/recommendation",
        template: "<recommendation />"
      })
      .state("root2", {
        url: "/konto",
        template: "<konto />"
      });
  }
]);
