'use strict';

/**
 * @ngdoc function
 * @name ranitsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the ranitsApp
 */
angular.module('ranitsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
