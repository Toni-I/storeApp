'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('storeApp'));

  var MainCtrl,
    scope, products;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    products = [{title: 'car', description: 'Not new'},{title: 'car2', description: 'Test'}, {title: 'apart', description:'aparment-test'}];
    scope = $rootScope.$new();

    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should clear search params', function () {
    scope.query = 'test';
    scope.minPrice = 10;
    scope.maxPrice = 100;

    scope.clearSearch();
    expect(scope.query.length).toBe(0);
    expect(scope.minPrice).toBe('');
    expect(scope.maxPrice).toBe('');
  });

  it('should filter item with text: test', function () {
   var product = products[1];
   scope.query = 'test';
   var result = scope.searchText(product); 
   expect(result).toBe(true);
   
  });

  it('should not find item with text: apartment', function () {
   var product = products[1];
   scope.query = 'apartment';

   var result = scope.searchText(product); 
   expect(result).toBe(false);
   
  });
});
