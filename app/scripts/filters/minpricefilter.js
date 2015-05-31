'use strict';

/**
 * @ngdoc filter
 * @name storeApp.filter:minPriceFilter
 * @function
 * @description
 * # minPriceFilter
 * Filter in the storeApp.
 */
angular.module('storeApp')
  .filter('minPriceFilter',['currencyService',function (currencyService) {
    return function (items,searchParam) {
    	if (!searchParam)
      {
        return items;
      }
      return items.filter(function(element){
      		return currencyService.convertCentsToEuro(element.priceCents) >= parseFloat(searchParam);
      });
    };
  }]);
