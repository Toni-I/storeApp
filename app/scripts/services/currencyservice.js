'use strict';

/**
 * @ngdoc service
 * @name storeApp.currencyService
 * @description
 * # currencyService
 * Service in the storeApp.
 */
angular.module('storeApp')
  .service('currencyService', function () {
   	this.convertCentsToEuro = function(cents){
   		if (cents === null ||cents === undefined){
   			return -1;
   		}
   		var euros = (parseInt(cents) / 100);
   		return euros;
   	};

   	this.convertEurosToCents = function(euros){
   		if (euros === null ||euros === undefined){
   			return -1;
   		}
   		var cents = parseInt((parseFloat(euros) * 100));
   		return cents;

   	};
  });
