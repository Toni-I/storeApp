'use strict';

describe('Filter: priceFilter', function () {

  // load the filter's module
  beforeEach(module('storeApp'));

  // initialize a new instance of the filter before each test
  var priceFilter;
  beforeEach(inject(function ($filter) {
    priceFilter = $filter('priceFilter');
  }));

  it('should return 1 "', function () {
    var priceInCents = 100;
    expect(priceFilter(priceInCents)).toBe(1);
  });

});
