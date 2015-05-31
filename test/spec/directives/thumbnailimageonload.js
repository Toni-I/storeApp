'use strict';

describe('Directive: thumbnailImageOnLoad', function () {

  // load the directive's module
  beforeEach(module('storeApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should put noimage image to img source', inject(function ($compile) {
    element = angular.element('<img src="" thumbnail-image-on-load ></img>');
    element = $compile(element)(scope);
    console.log(element[0]);
    element.triggerHandler('error');
    expect(element[0].src.indexOf('noimage.jpg')).not.toBe(-1);
   
    
  }));
});
