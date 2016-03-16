'use strict';

angular.module('ngwhatididApp', [
  'ngwhatididApp.auth',
  'ngwhatididApp.admin',
  'ngwhatididApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
