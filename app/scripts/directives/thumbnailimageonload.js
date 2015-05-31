'use strict';

/**
 * @ngdoc directive
 * @name storeApp.directive:thumbnailImageOnLoad
 * @description
 * # thumbnailImageOnLoad
 */
angular.module('storeApp')
  .directive('thumbnailImageOnLoad', function () {
    return {
			restrict: 'A',
			link: function(scope,element,attrs){
				element.bind('error', function(){	
					attrs.$set('src', '/images/noimage.jpg');
				});
			}
		};
  });
