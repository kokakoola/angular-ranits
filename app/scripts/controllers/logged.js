'use strict';

/**
 * @ngdoc function
 * @name ranitsApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the ranitsApp
 */

angular.module('ranitsApp')
 .controller('LoggedCtrl', function($scope, $mdSidenav){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };
})
