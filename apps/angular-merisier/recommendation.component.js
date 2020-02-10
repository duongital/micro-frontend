import angular from 'angular';
import template from './recommendation.template.jade';
import { getUserData, auth, getAddresses, augment, user } from '../common/user';

angular
.module('merisier')
.component('recommendation', {
  template,
  controllerAs: 'vm',
  controller($timeout, $scope) {
    $scope.title = 'MERISIER - Die Kunst des Schenkens'
    $scope.showProducts = false
    $scope.map = { center: { latitude: 45, longitude: -73 }, zoom: 12 }

    if (!$scope.business) {
      $scope.business = {}
      // $scope.business.finder = finder
    }

    if (!$scope.business.relation) {
      $scope.business.relation = 0.5
    }
    // if (!finder.age) {
    //   finder.age = 40
    // }

    // TODO move auth funciton to login module
    auth("admin@merisier.de", "adminadmin").then(() => {
      getUserData().then(() => {
        getAddresses();
        console.log("user data ne", user)
        $scope.user = user;
      });
    });

    // TODO FINDER defination
    // finder.listClasses(finder.dims).then(function (classes) {
    //   finder.classes = classes.plain()
    //   $scope.showProducts = true
    // })

    $scope.business.dimensions = [
      'feminine',
      'elegant',
      'humor',
      'sensitive',
      'creative'
    ]

    $scope.showLargeInfoBox = function () {
      $scope.business.showInfoBoxLarge = !$scope.business.showInfoBoxLarge
      $scope.business.toggleInfoBoxLarge = $scope.business.showInfoBoxLarge ? 'Weniger' : 'Mehr'
    }

    $scope.changeSex = function (female) {
      if (female) {
        $scope.business.dimensions[0] = 'feminine'
      } else {
        $scope.business.dimensions[0] = 'masculine'
      }
    }

    $scope.augment = function () {
      augment($scope.augmentParams.email).then((resp) => {
        console.log("aug", resp)
        if (!aug) {
          $scope.augmentNotFound = true
        } else {
          $scope.currentAugment = aug.Clearbit
          $scope.currentAugment.organizations = aug.FullContact._embedded.Data.organizations
          $scope.currentAugment.socialProfiles = aug.FullContact._embedded.Data.socialProfiles

          $scope.map.center.latitude = $scope.currentAugment._embedded.Data.geo.lat
          $scope.map.center.longitude = $scope.currentAugment._embedded.Data.geo.lng
        }
      })
    }

    $scope.augmentParams = {}
    $scope.currentAugment = {}

    $scope.toggleAugments = function () {
      $scope.showAugments = !$scope.showAugments
      if ($scope.selectedContact) {
        $scope.augmentParams.email = $scope.selectedContact.originalObject.Email
      }
    }

    $scope.selectContact = function (selected) {
      if (!selected) {
        return
      }
      $scope.augmentParams.email = selected.originalObject.Email
      user.get_orders_by_person(selected.originalObject.ID)
        .then(function (orders) {
          $scope.currentOrders = orders
        })
    }

    // TODO move this function to common
    $scope.$on('sessionExpired', function (event, action) {
      $rootScope.go_to('userlogin', {})
    })
  }
})