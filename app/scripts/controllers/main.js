'use strict';

/**
 * @ngdoc function
 * @name ranitsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ranitsApp
 */



angular.module('ranitsApp')
 .controller('MainCtrl', function($scope){
  // $scope.toggleSidenav = function(menuId) {
  //   $mdSidenav(menuId).toggle();
  // };

  $scope.links = [
    {
      href : '#/add',
      name: 'Lisa kogumik'
    },
    {
      href : '#/loggedin',
      name: 'Sisselogitud'
    },
    {
      href : '#/',
      name: 'Algus'
    }
  ];

  $scope.users = ['Fabio', 'Leonardo', 'Thomas', 'Gabriele', 'Fabrizio', 'John', 'Luis', 'Kate', 'Max'];


  $scope.messages = [{
      what: 'Geograafia õpik gümnaasiumile, III kursus. Maailma ühiskonnageograafia. Loodusvarade majandamine ja keskkonnaprobleemid',
      who: 'Sulev Mäeltsemees',
      when: '2015',
      notes: " III kursuse geograafiaõpik gümnaasiumile vaatleb "
    }, {
      what: 'Eesti ajaloo õpik gümnaasiumile, II osa. Rootsi ajast 20. saj alguseni',
      who: 'Pärtel Piirimäe, Andres Andresen, Marten Seppel, Ago Pajur',
      when: '2015',
      notes: "16. sajandi teine pool ning 17. sajandi esimene pool oli kogu "
    }, {
      what: 'Ajaloo õpik 9. klassile. Lähiajalugu, I osa',
      who: 'Einar Värä, Ago Pajur, Tõnu Tannberg',
      when: '2015',
      notes: "9. klassi uue Lähiajaloo õpiku kaheks tähtsamaks raskuspunktiks on ideede ajalugu ja inimesekeskne ajalugu."
    }, {
      what: 'Keemia õpik 8. klassile',
      who: 'Taavi Ivan',
      when: '2015',
      notes: "Uue põhikooli VIII klassi õpiku peamised ülesanded on äratada õpilastes"
    }, {
      what: 'Normaalne söömine',
      who: 'Mihkel Zilmer, Urmas Kokassaar, Anne Lill',
      when: '2015',
      notes: "Söömine on inimese elu alus. Puudujäägid ja liialdused "
    }];

})
.controller('DialogCtrl', function($scope, $mdDialog) {
  $scope.showMeta = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/dialogMeta.tmpl.html',
      targetEvent: ev,
    })
  };
  $scope.showLogin = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/dialogLogin.tmpl.html',
      targetEvent: ev,
    })
  };
});

function DialogController($scope, $mdDialog, $location) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.forward = function(target) {
    $mdDialog.cancel();
    $location.path(target);
  };
  $scope.model = {
    chips: ['Item1', 'Item2']
  };
  $scope.angulars = [
    'angular 1.0',
    'angular 1.2',
    'angular 1.4',
    'angular 2.0'
  ];
}
