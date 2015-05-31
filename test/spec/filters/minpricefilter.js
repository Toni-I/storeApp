'use strict';

describe('Filter: minPriceFilter', function () {

  // load the filter's module
  beforeEach(module('storeApp'));

  // initialize a new instance of the filter before each test
  var minPriceFilter;
  var productList;
  beforeEach(inject(function ($filter) {
    minPriceFilter = $filter('minPriceFilter');
    productList = [{priceCents: 100, title: '1'}, {priceCents: 101, title: '2'}, {priceCents: 99, title: '1'}];

  }));

  var testList = function(list, testPrice){
    for (var i = 0; i < list.length; i++)
    {
      var item = list[i];
      if (item.priceCents < testPrice){
        return true;
      }
    }
    return false;
  };

  it('should return only items with price 1€ or more"', function () {
    var filteredList = minPriceFilter(productList,1);
    var containsInvalidItem = testList(filteredList, 100);
    
    expect(containsInvalidItem).toBe(false);
  });

});
