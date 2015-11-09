define([
  'require',
  'angular',
  'app',
  'angular-animate',
  'angular-aria',
  'angular-material',
  'angular-messages',
  'angular-resource',
  'angular-route',
  'angular-sanitize',
  'angular-touch',
  'angular-material',
  'angular-material-icons',
  'translationService',
  'authenticatedUserService',
  'serverCallService',
  'authenticationService',
  'searchService',
  'dopHeader',
  'dopFooter',
  'dopSidebar',
  'dopAlert',
  'alertService',
  'inputValueControl',
  'angularScreenfull',
  'dopDetailedSearch',
  'dopAddPortfolio',
  'loginController'
], function (require, ng) {
    'use strict';

    require(['requirejs-domready!'], function (document) {
        ng.bootstrap(document, ['app']);
    });
});
