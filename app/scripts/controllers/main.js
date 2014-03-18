'use strict';

// Warning: Don't use global functions. They break minification.


// Warning: Don't use module(s,[]) here!
// See "Creation versus Retrieval": 
// http://docs.angularjs.org/guide/module

var app = angular.module('projectfooApp');

app.factory('Data', function() {
  return { cssclass: 'alert alert-success' };
});

app.controller('FirstCtrl', function ($scope, Data) {
    $scope.data = Data;
  }
);

app.controller('SecondCtrl', function ($scope, Data) {
    $scope.data = Data;
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
