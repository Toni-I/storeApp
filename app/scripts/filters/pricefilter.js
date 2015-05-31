'use strict';

/**
 * @ngdoc filter
 * @name storeApp.filter:priceFilter
 * @function
 * @description
 * # priceFilter
 * Filter in the storeApp.
 */
angular.module('storeApp')
  .filter('priceFilter', ['currencyService',function (currencyService) {
    return function (input) {
      return currencyService.convertCentsToEuro(input);
    };
  }]);
