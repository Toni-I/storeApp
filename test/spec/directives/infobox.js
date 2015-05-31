'use strict';

describe('Directive: infobox', function () {

  // load the directive's module
  beforeEach(module('storeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<infobox>test</infobox>');
    element = $compile(element)(scope);

    expect(element.text()).toBe('test');
  }));
});
