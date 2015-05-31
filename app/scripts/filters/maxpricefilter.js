'use strict';

/**
 * @ngdoc filter
 * @name storeApp.filter:maxPriceFilter
 * @function
 * @description
 * # maxPriceFilter
 * Filter in the storeApp.
 */
angular.module('storeApp')
  .filter('maxPriceFilter',['currencyService',function (currencyService) {
    return function (items,searchParam) {
    	if (!searchParam){
          return items;
      }
      return items.filter(function(element){
      		return currencyService.convertCentsToEuro(element.priceCents) <= parseFloat(searchParam);
      });
    };
  }]);
