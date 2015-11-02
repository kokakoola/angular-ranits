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

  $scope.click = function() {
    alert('Hello')
  }

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

  $scope.switchtext = "Avalik";
  $scope.switchOn = true;
  $scope.switch = function () {
    if ($scope.switchOn) {
      $scope.switchtext = 'Avalik';
    } else {
      $scope.switchtext = 'Avalda';
    }
  };

  $scope.books = [{
      what: 'Geograafia õpik gümnaasiumile, III kursus. Maailma ühiskonnageograafia. Loodusvarade majandamine ja keskkonnaprobleemid',
      who: 'Sulev Mäeltsemees',
      when: '2015',
      kind: 'book',
      notes: " III kursuse geograafiaõpik gümnaasiumile vaatleb ",
      image: "http://www.avita.ee/wtfiles/9/d2eb6898d6e39e5b5082a6079a80c2c2.jpg"
    }, {
      what: 'Eesti ajaloo õpik gümnaasiumile, II osa. Rootsi ajast 20. saj alguseni',
      who: 'Pärtel Piirimäe, Andres Andresen, Marten Seppel, Ago Pajur',
      when: '2015',
      kind: 'book',
      notes: "16. sajandi teine pool ning 17. sajandi esimene pool oli kogu ",
      image: "http://www.avita.ee/wtfiles/a/1cd6d61ceeccab949a97744c8a7b237b.jpg"
    }, {
      what: 'Ajaloo õpik 9. klassile. Lähiajalugu, I osa',
      who: 'Einar Värä, Ago Pajur, Tõnu Tannberg',
      when: '2015',
      kind: 'audio',
      notes: "9. klassi uue Lähiajaloo õpiku kaheks tähtsamaks raskuspunktiks on ideede ajalugu ja inimesekeskne ajalugu.",
      image: "http://www.avita.ee/wtfiles/z/55b0bb5b30b4db0329486b2746cc2e74.jpg"
    }, {
      what: 'Füüsika 9. klassile. Soojusõpetus. Tuumaenergia',
      who: 'Enn Pärtel, Jaak Lõhmus, Rein-Karl Loide',
      when: '2015',
      kind: '',
      notes: "Uue kujundusega õpik arvestab 2010. a ainekava nõudeid. Aine ehituse mudel. Soojusliikumine. Celsiuse temperatuuriskaala. Soojusülekanne (soojusülekande liigid, rakendused, aastaaegade vaheldumine, ainete soojuslikud kar",
      image: "http://koolibri.ee/download/?action=real&id=4170"
    }, {
      what: 'Keemia õpik 8. klassile',
      who: 'Taavi Ivan',
      when: '2015',
      kind: '',
      notes: "Uue põhikooli VIII klassi õpiku peamised ülesanded on äratada õpilastes",
      image: "http://www.avita.ee/wtfiles/k/1118a1a2f180bdba2f864f85c21dba23.jpg"
    },
    {
      what: 'Normaalne söömine',
      who: 'Mihkel Zilmer, Urmas Kokassaar, Anne Lill',
      when: '2015',
      kind: 'audio',
      notes: "Söömine on inimese elu alus. Puudujäägid ja liialdused ",
      image: "http://www.avita.ee/wtfiles/0/63848e77abca0f2873fb4f648035831a.jpg"
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
