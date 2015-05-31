'use strict';

/**
 * @ngdoc function
 * @name storeApp.controller:AddProductCtrl
 * @description
 * # AddProductCtrl
 * Controller of the storeApp
 */
angular.module('storeApp')
  .controller('AddProductCtrl',['$scope','$log','$timeout','productService','Upload','ENV','currencyService', function ($scope, $log, $timeout, productService, Upload, ENV, currencyService) {
    
    $scope.thumbnailUrl = null;
    $scope.imageUrl = null;
    $scope.hasAdded = false;


    $scope.addProduct = function(){

    	var product = $scope.product;
    	product.price = currencyService.convertEurosToCents(product.price);
    	product.thumbnailUrl = $scope.thumbnailUrl;
    	product.imageUrl = $scope.imageUrl;

    	$log.debug('Add product: ' + product);
    	productService.addProduct(product).then(function(data){
  			$log.debug('Product added succesfully: ' +data);
  			$scope.resetForm();
  			$scope.hasAdded = true;
  			$timeout(removeSuccessMessage, 4000);
  		},
  		function(data){
  			$log.debug('Error: ' + data);
  		});
    };

    $scope.removeSuccessMessage(){
    	$scope.hasAdded = false;
    }

    $scope.resetForm = function(){
    	$scope.product = {};
    	$scope.productForm.title.$setUntouched();
    	$scope.productForm.title.$setPristine();
    	$scope.productForm.price.$setUntouched();
    	$scope.productForm.price.$setPristine();
    	$scope.productForm.description.$setUntouched();
    	$scope.productForm.description.$setPristine();
    	$scope.productForm.number.$setUntouched();
    	$scope.productForm.number.$setPristine();
    	$scope.productForm.email.$setUntouched();
    	$scope.productForm.email.$setPristine();

    };

    
    $scope.$watch('files', function () {
        $scope.upload($scope.files);
    });

     $scope.upload = function (files) {
        if (files && files.length) {
                var file = files[0];
                Upload.upload({
                    url: ENV.apiEndPoint+'images/',
                    file: file
                }).progress(function (evt) {
                    var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);    
                    $log.debug('File upload in progress: ' + progressPercentage + '%');                
                }).success(function (data, status, headers, config) {

                    $log.debug('file ' + config.file.name + ' uploaded. Response: ' + data);
                    if (data.error === null && data.success){
                    	$scope.thumbnailUrl = data.thumbnailUrl;
                    	$scope.imageUrl = data.imageUrl;
                    }
                }).error(function (data, status){
                	$log.debug('Error in file upload: ' + data + 'status was: ' + status);
                });
        }
    };

  }]);
