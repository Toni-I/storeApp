'use strict';

describe('Controller: AddProductCtrl', function () {

  // load the controller's module
  beforeEach(module('storeApp'));

  var AddProductCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AddProductCtrl = $controller('AddProductCtrl', {
      $scope: scope
    });

  }));

  it('should reset hasAdded variable', function () {
    scope.hasAdded = true;
    scope.removeSuccessMessage();
    expect(scope.hasAdded).toBe(false);
  });
});
