'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('projectfooApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});

// From egghead.io #007 - Testing Overview
// The code above seems way more complex; not sure why.
describe('filter', function() {
    beforeEach(module('projectfooApp'));

    it('should reverse a string', inject(function(reverseFilter) {
      expect(reverseFilter('one two three')).toEqual('three two one');
    }));
  }
);