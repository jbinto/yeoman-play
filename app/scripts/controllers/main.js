/* make JSHint happy (even though we're breaking "Good JS" rules, we'll get there) */
/* exported FirstCtrl */
'use strict';

// Not quite sure about this invocation.
// Egghead.io #02 just a single global function taking $scope.
// Must clarify later.

angular.module('projectfooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

function FirstCtrl($scope) {
  $scope.data = { cssclass: 'alert alert-success' };
}