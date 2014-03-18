/* make JSHint happy (even though we're breaking "Good JS" rules, we'll get there) */
/* exported FirstCtrl */
'use strict';

// Not quite sure about this invocation.
// Egghead.io #02 just a single global function taking $scope.
// Must clarify later.

// ...And now it's later.
// The app isn't working in production (after minification).
// Probably, we need to use the Angular style below to register components
// so they are minification friendly.
//
// http://docs.angularjs.org/error/$injector/unpr
// https://github.com/angular-ui/ui-router/issues/785


angular.module('projectfooApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  })
  .controller('FirstCtrl', function ($scope) {

  })
  .controller('SecondCtrl', function ($scope) {

  })
;

