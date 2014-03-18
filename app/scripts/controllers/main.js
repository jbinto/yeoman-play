'use strict';

// Warning: Don't use global functions. They break minification.


// Warning: Don't use module(s,[]) here!
// See "Creation versus Retrieval": 
// http://docs.angularjs.org/guide/module

var app = angular.module('projectfooApp');

app.directive("villain", function() {
  return {
    restrict: "E",
    template: "<div>At the end of the day, it's their own fault. -Rob Ford</div>"
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
  debugger;
});


app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
