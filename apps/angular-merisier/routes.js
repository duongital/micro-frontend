import angular from "angular";
import "./root.component.js";

angular.module("merisier").config([
  "$stateProvider",
  "$locationProvider",
  ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });

    $stateProvider.state("root", {
      url: "/merisier",
      template: "<root />"
    });
  }
]);
