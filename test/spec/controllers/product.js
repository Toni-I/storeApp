'use strict';

describe('Controller: ProductCtrl', function () {

 
  beforeEach(module('storeApp'));

  var ProductCtrl,
    scope;
  

  
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();

    ProductCtrl = $controller('ProductCtrl', {
      $scope: scope,
      $routeParams:  {productId:'123'}
    });
  }));

  it('should test productCtrl routeParams assign', function () {
    expect(scope.productId).toBe('123');
  });
});
