'use strict';

describe('Filter: maxPriceFilter', function () {

  // load the filter's module
  beforeEach(module('storeApp'));

  // initialize a new instance of the filter before each test
  var maxPriceFilter;
  var productList;
  beforeEach(inject(function ($filter) {
    maxPriceFilter = $filter('maxPriceFilter');
    productList = [{priceCents: 100, title: '1'}, {priceCents: 101, title: '2'}, {priceCents: 99, title: '1'}];
  }));

   var testList = function(list, testPrice){
    for (var i = 0; i < list.length; i++)
    {
      var item = list[i];
      if (item.priceCents > testPrice){
        return true;
      }
    }
    return false;
  };

  it('should return only items with 1€ or less price', function () {
    var filteredList = maxPriceFilter(productList,1);
    var containsInvalidItem = testList(filteredList, 100);
    expect(containsInvalidItem).toBe(false);
  });


});
