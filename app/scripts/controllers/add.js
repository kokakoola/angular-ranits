'use strict';

/**
 * @ngdoc function
 * @name ranitsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ranitsApp
 */

angular.module('ranitsApp')
 .controller('AddCtrl', function($scope, $mdSidenav){

  $scope.menu = [
    {
      link : '',
      title: 'Peatükk',
      icon: 'dashboard'
    },
    {
      link : '',
      title: 'Alampeatükk',
      icon: 'group'
    },
    {
      link : '',
      title: 'Alampeatükk',
      icon: 'message'
    }
  ];

    $scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

});
