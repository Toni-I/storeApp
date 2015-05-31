'use strict';

/**
 * @ngdoc overview
 * @name storeApp
 * @description
 * # storeApp
 *
 * Main module of the application.
 */
angular
  .module('storeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config',
    'ngFileUpload'
  ])
  .config(function ($routeProvider,$logProvider,ENV) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/product/:productId', {
        templateUrl: 'views/product.html',
        controller: 'ProductCtrl'
      })
      .when('/add-product', {
        templateUrl: 'views/add-product.html',
        controller: 'AddProductCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });

      $logProvider.debugEnabled(ENV.debugEnabled);
  });
