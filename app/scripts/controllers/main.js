'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')

  .controller('MainCtrl', ['$scope','$cookies','$log','$filter','productService', function ($scope, $cookies, $log, $filter, productService) {

  	var orderByFilter = $filter('orderBy');
  	$scope.reverse = true;
  	$scope.selectedSorting = 'title';


  	productService.getProducts().then(function(products){
  		$scope.productList = products;
  		$scope.order('title');
  		$scope.setSearchParams();
  		
  	}, function(data){
  		$log.debug('Products retrieval failed:' + data);
  	});

  	$scope.searchText = function (row) {
  		var q = angular.lowercase($scope.query);
        return (angular.lowercase(row.title).indexOf(q || '') !== -1 || angular.lowercase(row.description).indexOf(q || '') !== -1);
    };

    $scope.clearSearch = function(){
    	$scope.query = '';
    	$scope.minPrice = '';
    	$scope.maxPrice = '';
    	$scope.selectedSorting = 'title';
    	$scope.reverse = false;
    	$scope.saveSearchParams();
    };

    $scope.order = function(predicate){
    	if (predicate === $scope.selectedSorting){
    		$scope.changeReverse();
    	}
    	
    	$scope.productList = orderByFilter($scope.productList,predicate, $scope.reverse);
    	$scope.selectedSorting = predicate;
    };

    $scope.changeReverse = function(){
    	$scope.reverse = $scope.reverse ? false : true;
    };

    $scope.$on('$routeChangeStart', function() { 
  		$scope.saveSearchParams();
 	});

    $scope.saveSearchParams = function (){
  		if ($scope.query !== undefined){
  			$cookies.searchText = $scope.query;
  		}
  		if ($scope.minPrice !== undefined){
  			$cookies.searchMinPrice = $scope.minPrice;
  		}
  		if ($scope.maxPrice !== undefined){
  			$cookies.searchMaxPrice = $scope.maxPrice;
  		}

  		$cookies.searchReverse = $scope.reverse;
  		$cookies.searchSortingPredicate = $scope.selectedSorting;

  	};

  	$scope.setSearchParams = function (){
  		if ($cookies.searchText !== undefined){
  			$scope.query = $cookies.searchText;
  		}
  		if ($cookies.searchMinPrice !== undefined ){
  			$scope.minPrice = parseFloat($cookies.searchMinPrice);
  		}
  		if ($cookies.searchMaxPrice !== undefined){
  			$scope.maxPrice = parseFloat($cookies.searchMaxPrice);
  		}

  		if ($cookies.searchReverse !== undefined){
  			$scope.reverse = $cookies.searchReverse;
  		}

  		if ($cookies.searchSortingPredicate !== undefined){
  			$scope.selectedSorting = $cookies.searchSortingPredicate;
  		}
  	};
    
  }]);





  
