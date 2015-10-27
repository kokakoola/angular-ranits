'use strict';

/**
 * @ngdoc function
 * @name ranitsApp.controller:IndexCtrl
 * @description
 * # IndexCtrl
 * Controller of the ranitsApp
 */

angular.module('ranitsApp')
 .controller('IndexCtrl', function($scope, $mdSidenav, $mdBottomSheet){
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };

  $scope.links = [
    {
      href : '#/add',
      name: 'Lisa kogumik'
    },
    {
      href : '#/',
      name: 'Algus'
    }
  ];

  $scope.alert = '';
    $scope.showListBottomSheet = function($event) {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'views/templates/sheetLogin.tmpl.html',
        // template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
        controller: 'ListBottomSheetCtrl',
        targetEvent: $event
      }).then(function(clickedItem) {
        $scope.alert = clickedItem.name + ' clicked!';
      });
    };

    $scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];

})
.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet) {

    $scope.model = {
      chips: ['Item1', 'Item2']
    };
    $scope.angulars = [
      'angular 1.0',
      'angular 1.2',
      'angular 1.4',
      'angular 2.0'
    ];
})
