'use strict';

describe('Service: productService', function () {



  beforeEach(module('storeApp'));

  
  var productService;
  beforeEach(inject(function (_productService_) {
    productService = _productService_;
  }));

  it('should test productService service', function () {
    expect(!!productService).toBe(true);
  });

 


});
