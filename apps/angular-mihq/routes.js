import angular from "angular";
import "./root.component.js";

angular.module("single-spa-app").config([
  "$stateProvider",
  "$locationProvider",
  ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider.state("root", {
      url: "/mihq",
      template: "<root />"
    });
  }
]);
