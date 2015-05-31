'use strict';

/**
 * @ngdoc service
 * @name storeApp.productService
 * @description
 * # productService
 * Service in the storeApp.
 */
angular.module('storeApp')
  .service('productService', ['$http','$q','$log','ENV', function ($http,$q, $log, ENV) {
  	
    this.getProducts = function() {
    	$log.debug('Start getProducts function');
    	var products = null;
    	var def = $q.defer();


    	$http.get(ENV.apiEndPoint + '/marketads').
    		success(function(data,status){
    			$log.debug('Products retrieval was successfull with status: ' + status);
    			if (data !== null && data.length > 0){
    				products = data;
    			}
    			def.resolve(products);
    		}).
			error(function(data,status){
				$log.debug('Products retrieval failed: ' +data + ' status: ' +status);
				def.reject('Error while retrieving items');
			});

    	return def.promise;
    };

    this.getSpecificProduct = function(productId){
    	var product = null;
    	var def = $q.defer();

    	if(productId === null || productId === undefined){
    		return def.reject('Product id not provided');
    	}

    	$http.get(ENV.apiEndPoint + '/marketads/'+productId).
    		success(function(data,status){
    			$log.debug('Product retrieval was successfull. status was: ' + status);
    			if (data !== null){
    				product = data;
    			}
    			def.resolve(product);
    		}).
			error(function(data,status){
				$log.debug('Product retrieval failed: ' +data + ' status: ' +status);
				def.reject('Error while retrieving item');

			});

    	return def.promise;
    };

    this.addProduct = function(product){

    	var def = $q.defer();
    	if (product === null){
    		return null;
    	}

    	var request = {
 			method: 'POST',
 			url: ENV.apiEndPoint + '/marketads',
 			data: { title: product.title,
 				 description: product.description, 
 				 priceCents: product.price,
 				 email: product.email,
 				 phone: product.number,
 				 thumbnailUrl: product.thumbnailUrl,
 				 imageUrl: product.imageUrl
 			}
		};

		$http(request).success(function(data,status){
			$log.debug('Request made with: '+ data + ' And status is: ' +status);
			if (status === 200){
				def.resolve('Product added');
			}
		}).error(function(data,status){

			$log.debug('Add product error data:' + data.message);
			$log.debug('Add product error status: ' + status);
			

			def.reject('Adding product failed');

		});
		return def.promise;
    };


   
  }]);
