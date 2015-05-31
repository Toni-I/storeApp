'use strict';

/**
 * @ngdoc directive
 * @name storeApp.directive:infobox
 * @description
 * # infobox
 */
angular.module('storeApp')
  .directive('infobox', function () {
    return {
      template: '<div class="col-md-12 bg-info infobox"><div ng-transclude></div></div>',
      restrict: 'E',
      transclude: true
    };
  });
