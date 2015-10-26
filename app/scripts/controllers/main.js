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

  $scope.alert = '';
  $scope.showAlert = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    // Modal dialogs should fully cover application
    // to prevent interaction outside of dialog
    $mdDialog.show(
      $mdDialog.alert()
        .parent(angular.element(document.body))
        .title('This is an alert title')
        .content('You can specify some description text in here.')
        .ariaLabel('Alert Dialog Demo')
        .ok('Got it!')
        .targetEvent(ev)
    );
  };

  $scope.showConfirm = function(ev) {
    // Appending dialog to document.body to cover sidenav in docs app
    var confirm = $mdDialog.confirm()
      .title('Would you like to delete your debt?')
      .content('All of the banks have agreed to forgive you your debts.')
      .ariaLabel('Lucky day')
      .ok('Please do it!')
      .cancel('Sounds like a scam')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      $scope.alert = 'You decided to get rid of your debt.';
    }, function() {
      $scope.alert = 'You decided to keep your debt.';
    });
  };
  $scope.showAdvanced = function(ev) {
    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'views/templates/dialogMeta.tmpl.html',
      targetEvent: ev,
    })
    .then(function(cancel) {
      $mdDialog.hide();
    }, function() {
      // $scope.alert = 'You cancelled the dialog.';
    });
  };
  $scope.showLogin = function(ev) {
    $mdDialog.show({
      controller: MainController,
      templateUrl: 'views/templates/dialogLogin.tmpl.html',
      targetEvent: ev,
    })
    .then(function(cancel) {
      $mdDialog.hide();
    }, function() {
      // $scope.alert = 'You cancelled the dialog.';
    });
  };

});

function DialogController($scope, $mdDialog) {
  $scope.hide = function() {
    $mdDialog.hide();
  };
  $scope.cancel = function() {
    $mdDialog.cancel();
  };
  $scope.answer = function(answer) {
    $mdDialog.hide(answer);
  };
  $scope.model = {
    chips: ["Item1", "Item2"]
  };
  $scope.angulars = [
    'angular 1.0',
    'angular 1.2',
    'angular 1.4',
    'angular 2.0'
  ];
};
