'use strict';

// Warning: Don't use global functions. They break minification.


// Warning: Don't use module(s,[]) here!
// See "Creation versus Retrieval": 
// http://docs.angularjs.org/guide/module

var app = angular.module('projectfooApp');

app.directive('evil', function() {
  return {
    restrict: 'A',  // A=attribute, E=element (tag)
    template: '<div>At the end of the day, it\'s their own fault. -Rob Ford</div>'
  };
});

app.directive('enter', function() {
  return {
    restrict: 'A', // note: A=default; this line redundant
    link: function(scope, element, attrs) {
      // "bind" as in JQuery bind, according to the video (?)
      element.bind('mouseenter', function() {
        console.log('Swimming with the sharks!');
        element.addClass(attrs.enter);
      });
    }
  };
});

app.directive('leave', function() {
  // Attribute based directives that call a function are common
  // Use syntactic sugar, don't need the config object. 
  // Equivalent to 'enter' above.
  return function(scope, element, attrs) {
    element.bind('mouseleave', function() {
      console.log('My heart bleeds for them');
      element.removeClass(attrs.enter);
    });
  };
});

app.factory('BusRoutes', function() {
  var TTC = {};
  TTC.routes = [
    { number: 1, name: 'Yonge-University-Spadina' },
    { number: 7, name: 'Bathurst' },
    { number: 14, name: 'Glencairn' },
    { number: 28, name: 'Davisville' },
    { number: 32, name: 'Eglinton West' },
    { number: 34, name: 'Eglinton East' },
    { number: 310, name: 'Vomit Comet' },
    { number: 501, name: 'Queen' },
    { number: 503, name: 'Downtowner' },
    { number: 504, name: 'King' },
    { number: 505, name: 'Dundas' },
    { number: 510, name: 'St. Clair' }
  ];
  return TTC;
});

app.controller('BusRoutesCtrl', function($scope, BusRoutes) {
  $scope.busroutes = BusRoutes;
});


app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
