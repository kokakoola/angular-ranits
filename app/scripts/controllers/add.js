'use strict';

/**
* @ngdoc function
* @name ranitsApp.controller:MainCtrl
* @description
* # MainCtrl
* Controller of the ranitsApp
*/

angular.module('ranitsApp')
.controller('AddCtrl', function($scope, $timeout, $mdSidenav, $mdUtil, $log){
  // $scope.toggleSidenav = function(menuId) {
  //   $mdSidenav(menuId).toggle();
  // };

  $scope.toggleLeft = buildToggler('left');

  /**
  * Build handler to open/close a SideNav; when animation finishes
  * report completion in console
  */
  function buildToggler(navID) {
    var debounceFn =  $mdUtil.debounce(function(){
      $mdSidenav(navID)
      .toggle()
      .then(function () {
        $log.debug("toggle " + navID + " is done");
      });
    },200);

    return debounceFn;
  }

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


})
// .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
//   $scope.close = function () {
//     $mdSidenav('left').close()
//     .then(function () {
//       $log.debug("close LEFT is done");
//     });
//
//   };
// })
// .directive('sidenavPushIn', function () {
//   return {
//     restrict: 'A',
//     require: '^mdSidenav',
//     link: function ($scope, element, attr, sidenavCtrl) {
//       var body = angular.element(document.body);
//       body.addClass('md-sidenav-push-in');
//       var cssClass = (element.hasClass('md-sidenav-left') ? 'md-sidenav-left' : 'md-sidenav-right') + '-open';
//       var stateChanged = function (state) {
//         body[state ? 'addClass' : 'removeClass'](cssClass);
//       };
//       // overvwrite default functions and forward current state to custom function
//       angular.forEach(['open', 'close', 'toggle'], function (fn) {
//         var org = sidenavCtrl[fn];
//         sidenavCtrl[fn] = function () {
//           var res = org.apply(sidenavCtrl, arguments);
//           stateChanged(sidenavCtrl.isOpen());
//           return res;
//         };
//       });
//     }
//   };
// });
