'use strict';

angular.module('ngwhatididApp.auth', [
  'ngwhatididApp.constants',
  'ngwhatididApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
