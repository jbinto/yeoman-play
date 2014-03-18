'use strict';

// Warning: Don't use global functions. They break minification.


// Warning: Don't use module(s,[]) here!
// See "Creation versus Retrieval": 
// http://docs.angularjs.org/guide/module

var app = angular.module('projectfooApp');

app.factory('Data', function() {
  return { cssclass: 'alert alert-success' };
});

app.filter('reverse', function() {
  return function(data) {
    return data.split(' ').reverse().join(' ');
  };
});

app.controller('FirstCtrl', function ($scope, Data) {
    $scope.data = Data;
  }
);

app.controller('SecondCtrl', function ($scope, Data) {
    $scope.data = Data;

    $scope.reversedMessage = function(message) {
      return message.split(' ').reverse().join(' ');
    };
  }
);



app.controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }
);
