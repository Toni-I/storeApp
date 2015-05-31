'use strict';

describe('Service: currencyService', function () {

  // load the service's module
  beforeEach(module('storeApp'));

  // instantiate service
  var currencyService;
  beforeEach(inject(function (_currencyService_) {
    currencyService = _currencyService_;
  }));

  it('should test service', function () {
    expect(!!currencyService).toBe(true);
  });

  it('should test service convertsCentsToEuro with 100 cents', function () {

    var euros = currencyService.convertCentsToEuro(100);
    expect(euros).toBe(1);
  });

   it('should test service convertsCentsToEuro with null cents', function () {

    var euros = currencyService.convertCentsToEuro(null);
    expect(euros).toBe(-1);
  });

  it('should test service convertsCentsToEuro with undefined cents', function () {

    var euros = currencyService.convertCentsToEuro(undefined);
    expect(euros).toBe(-1);
  });


  it('should test service convertsCentsToEuro with 0 cents', function () {

    var euros = currencyService.convertCentsToEuro(0);
    expect(euros).toBe(0);

  });

});
