'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:ProductCtrl
 * @description
 * # ProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('ProductCtrl',['$scope','$routeParams','$log','productService', function ($scope, $routeParams, $log, productService) {
   $scope.productId = $routeParams.productId;
   

   productService.getSpecificProduct($scope.productId).then(function(product){
  		$scope.product = product;
  	},
  	function(data){
  		$log.debug('Error in product retrieval:' + data);
  	});


  }]);
